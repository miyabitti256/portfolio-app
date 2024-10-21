"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeaderNavigation() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const navItems = useMemo(() => [
    { href: "/about-me", label: "About Me" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ], []);

  useEffect(() => {
    const index = navItems.findIndex(item => pathname.startsWith(item.href));
    setActiveIndex(index !== -1 ? index : null);
  }, [pathname, navItems]);

  useGSAP(() => {
    if (bgRef.current && listRef.current) {
      if (activeIndex !== null) {
        const activeItem = listRef.current.children[activeIndex] as HTMLElement;
        gsap.to(bgRef.current, {
          x: activeItem.offsetLeft,
          width: activeItem.offsetWidth,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        gsap.to(bgRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="relative">
      <div
        ref={bgRef}
        className="absolute h-full bg-blue-200 dark:bg-blue-600 rounded-full -z-10"
        style={{ top: 0, left: 0, opacity: 0 }}
      />
      <ul ref={listRef} className="flex items-center gap-4 text-lg font-semibold">
        {navItems.map((link) => (
          <li key={link.href} className="relative py-2 px-4">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
