"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chars = "miyabitti".split("");
  const twoRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 初期アニメーション
      tl.from(".char", {
        y: () => Math.random() * 200 - 100,
        x: () => Math.random() * 200 - 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // iの回転アニメーション
      tl.to(
        ".char-i",
        {
          rotationX: 360,
          duration: 0.6,
          ease: "power1.inOut",
          stagger: 0.2,
          repeat: -1,
          repeatDelay: 2,
        },
        "+=1"
      );

      // 256 から 0 へのカウントダウン、待機時間、2進数カウントアップ、そして0の吸収アニメーション（ループ）
      const numberAnimation = gsap.timeline({ repeat: -1 });
      numberAnimation
        .to(".number", {
          duration: 3,
          onUpdate: function () {
            const progress = this.progress();
            const currentNumber = Math.floor(256 * (1 - progress));
            gsap.set(".number", { innerHTML: currentNumber.toString() });
          },
          ease: "power1.in",
        })
        .to(".number", {
          duration: 1.5,
          onStart: () => {
            gsap.set(".number", { innerHTML: "0" });
          },
        })
        .to(".number", {
          duration: 8,
          onUpdate: function () {
            const progress = this.progress();
            const currentNumber = Math.floor(progress * 256);
            gsap.set(".number", {
              innerHTML: currentNumber.toString(2).padStart(8, "0"),
            });
          },
          ease: "none",
        })
        .to(".number", {
          duration: 1.5,
          onComplete: () => {
            gsap.set(".number", { innerHTML: "100000000" });
          },
        })
        .to(".absorb-two", {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
        })
        .to(".absorb-two", {
          scale: 0.5,
          y: "50vh",
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(".number", { innerHTML: "2<sup>1</sup>0000000" });
            gsap.set(".absorb-two", { y: "50vh", scale: 1, opacity: 0 });
          },
        });

      // 0を一つずつ吸収するアニメーション
      const twoElement = twoRef.current;
      if (twoElement) {
        for (let i = 1; i < 8; i++) {
          numberAnimation
            .to(twoElement, {
              scale: 0.5,
              y: "50%",
              duration: 0.3,
              ease: "power2.in",
            })
            .to(twoElement, {
              scale: 1,
              y: "0%",
              duration: 0.3,
              ease: "power2.out",
              onComplete: () => {
                const element = document.querySelector(".number") as HTMLElement;
                if (element) {
                  const currentText = element.innerHTML;
                  const newText = currentText.replace(
                    /(\d+)<sup>(\d+)<\/sup>(.*)/,
                    (match, base, exp, zeros) => {
                      return `${base}<sup>${parseInt(exp) + 1}</sup>${zeros.slice(
                        1
                      )}`;
                    }
                  );
                  gsap.set(".number", { innerHTML: newText });
                }
              },
            });
        }
      }

      numberAnimation
        .to(".number", {
          duration: 2,
        })
        .to({}, { duration: 1.5 }) // 1.5秒の待機時間を追加
        .to(".number", {
          duration: 0.5,
          onStart: () => {
            const element = document.querySelector(".number") as HTMLElement;
            if (element) {
              const currentText = element.innerHTML;
              const newText = currentText.replace(
                /(\d+)<sup>(\d+)<\/sup>/,
                (match, base) => {
                  return `${base}*2<sup>7</sup>`; // 7乗に変更
                }
              );
              gsap.set(".number", { innerHTML: newText });
            }
          },
        });

      // 2を7回倍々にし、指数を減らすアニメーション
      for (let i = 0; i < 7; i++) {
        numberAnimation
          .to(".number", {
            duration: 0.5,
            onStart: () => {
              const element = document.querySelector(".number") as HTMLElement;
              if (element) {
                const currentText = element.innerHTML;
                const [, base, exp] =
                  currentText.match(/(\d+)\*2(?:<sup>(\d+)<\/sup>)?/) || [];
                const startValue = parseInt(base);
                const endValue = startValue * 2;
                const newExp = Math.max(parseInt(exp || "1") - 1, 0);

                gsap.to(
                  {},
                  {
                    duration: 0.5,
                    onUpdate: function () {
                      const progress = this.progress();
                      const currentValue = Math.round(
                        startValue + (endValue - startValue) * progress
                      );
                      let newText;
                      if (newExp > 0) {
                        newText = `${currentValue}*2<sup>${newExp}</sup>`;
                      } else {
                        newText = `${currentValue}`;
                      }
                      gsap.set(".number", { innerHTML: newText });
                    },
                    ease: "power1.inOut",
                  }
                );
              }
            },
            ease: "power2.inOut",
          })
          .to({}, { duration: 0.5 }); // カウントアップ後の待機時間
      }

      // 最後に3秒のディレイを追加
      numberAnimation.to({}, { duration: 3 });

      tl.add(numberAnimation, "+=1");
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="h-[calc(100vh-76px)] relative flex items-center justify-center"
    >
      <h1 className="md:text-6xl text-4xl font-bold">
        {chars.map((char, index) => (
          <span
            key={index}
            className={`char inline-block ${char === "i" ? "char-i" : ""}`}
          >
            {char}
          </span>
        ))}
        <span className="number inline-block ml-2">256</span>
      </h1>
      <span 
        ref={twoRef}
        className="two absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-4xl font-bold"
      >
        2
      </span>
      <span className="absorb-two absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-4xl font-bold">
        2
      </span>
    </section>
  );
}
