"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  // Type the footer element
  const footerRef = useRef<HTMLElement | null>(null);

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
      className="py-20 px-10 text-center max-w-6xl mx-auto"
    >
      <div className="footer-content space-y-3">
        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/50">
          © {new Date().getFullYear()} Manav Dhamecha — All Rights Reserved
        </p>

        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/40">
          Built with passion & precision
        </p>
      </div>
    </footer>
  );
}
