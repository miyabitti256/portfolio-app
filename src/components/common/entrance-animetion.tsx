"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState, useEffect } from "react";

export default function EntranceAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
    if (!hasSeenAnimation) {
      setIsVisible(true);
      sessionStorage.setItem('hasSeenAnimation', 'true');
    }
  }, []);

  useGSAP(() => {
    if (!isVisible) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
      }
    });

    // コンテナのアニメーション
    tl.fromTo(containerRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 1, delay: 3.5 }
    );

    // サークルのアニメーション
    tl.fromTo(circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.25, duration: 1.5, ease: "elastic.out(1, 0.3)" },
      0
    );

    // テキストのアニメーション
    tl.fromTo(textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      0.5
    );

    return () => {
      tl.kill();
    };
  }, { scope: containerRef, dependencies: [isVisible] });

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
    >
      <div
        ref={circleRef}
        className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-0"
      ></div>
      <div
        ref={textRef}
        className="text-4xl font-bold text-black dark:text-white opacity-0"
      >
        ようこそ！
      </div>
    </div>
  );
}
