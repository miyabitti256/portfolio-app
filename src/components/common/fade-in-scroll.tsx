"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function FadeInScroll({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 50,
}: FadeInOnScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0.001,
          y: y,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  }, []);
  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
