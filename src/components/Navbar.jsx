"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(logoRef.current, {
        y: -20,
        opacity: 0,
        delay: 0.3,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(linksRef.current, {
        y: -20,
        opacity: 0,
        stagger: 0.15,
        delay: 0.5,
        duration: 0.6,
        ease: "power3.out",
      });

      // Hover feedback
      linksRef.current.forEach((link) => {
        const anchor = link.querySelector("a");
        if (!anchor) return;

        const onMouseEnter = () => {
          gsap.to(anchor, { y: -2, opacity: 0.6, duration: 0.2 });
        };

        const onMouseLeave = () => {
          gsap.to(anchor, { y: 0, opacity: 1, duration: 0.2 });
        };

        anchor.addEventListener("mouseenter", onMouseEnter);
        anchor.addEventListener("mouseleave", onMouseLeave);
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center py-6 px-10 max-w-6xl mx-auto tracking-wide"
    >
      <a
        href="#home"
        ref={logoRef}
        className="inline-block font-semibold text-xl text-zinc-500"
      >
        Your Name
      </a>

      <ul className="flex gap-8 text-sm font-medium uppercase text-neutral-700">
        {["Experience", "Skills", "Projects", "Contact"].map((item, index) => (
          <li key={item} ref={(el) => (linksRef.current[index] = el)}>
            <a
              href={`#${item.toLowerCase()}`}
              className="inline-block transition-all"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
