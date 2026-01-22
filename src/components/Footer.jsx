"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="
        py-10
        px-10
        text-center
        max-w-6xl mx-auto
      "
    >
      <p
        className="
          footer-content
          text-xs
          tracking-widest
          uppercase
          text-neutral-500
        "
      >
        © {new Date().getFullYear()} Manav Dhamecha — All Rights Reserved.
      </p>
    </footer>
  );
}
