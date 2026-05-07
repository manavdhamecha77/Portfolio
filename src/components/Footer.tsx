"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
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
      className="py-10 px-10 text-center max-w-6xl mx-auto border-t border-[#7cff67]/20"
    >
      <div className="footer-content space-y-6">
        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/50 font-mono font-bold">
          © {new Date().getFullYear()} Manav Dhamecha — All Rights Reserved
        </p>

        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#7cff67]/60 font-mono font-bold">
          Built with passion & precision
        </p>
      </div>
    </footer>
  );
}
