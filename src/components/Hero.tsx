"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import TextType from "./ui/TextType";
import Aurora from "./ui/Aurora";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<(HTMLElement | null)[]>([]);
  const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  // Detect mobile for conditional animation
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.9,
        },
      });

      const contentElements = contentRef.current.filter(Boolean);
      const buttonElements = buttonsRef.current.filter(Boolean);

      if (contentElements.length === 0) return;

      gsap.set(contentElements, { y: 30, opacity: 0 });
      gsap.set(buttonElements, { y: 10, opacity: 0 });

      tl.to(contentElements, {
        y: 0,
        opacity: 1,
        stagger: 0.18,
        delay: 0.5,
      }).to(
        buttonElements,
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,
        },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, [mounted, isMobile]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center px-6 sm:px-10 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <div className="max-w-4xl tracking-tight">
        <h1
          ref={(el) => {
            contentRef.current[0] = el;
          }}
          className="text-5xl sm:text-7xl md:text-8xl font-black font-mono uppercase tracking-tighter text-white mb-2 leading-[0.9]"
          style={{ opacity: mounted ? undefined : 0 }}
        >
          Manav Dhamecha
        </h1>

        <div
          ref={(el) => {
            contentRef.current[1] = el;
          }}
          style={{ opacity: mounted ? undefined : 0 }}
          className="font-mono uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[#7cff67]"
        >
          <TextType
            className="text-lg sm:text-2xl md:text-3xl font-bold py-3"
            text={[
              "Full Stack Developer",
              "AI Engineer",
              "Problem Solver",
            ]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </div>

        <h2
          ref={(el) => {
            contentRef.current[2] = el;
          }}
          className="mt-6 text-[11px] sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/70 font-mono leading-relaxed max-w-2xl"
          style={{ opacity: mounted ? undefined : 0 }}
        >
          B.Tech — Artificial Intelligence • NIT Surat
        </h2>

        <div className="mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap">
          <a
            ref={(el) => {
              buttonsRef.current[0] = el;
            }}
            href="#portfolio"
            className="px-8 py-3 rounded-full bg-[#7cff67] text-black text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_28px_rgba(124,255,103,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,255,103,0.6)] hover:scale-[1.04]"
            style={{ opacity: mounted ? undefined : 0 }}
          >
            View Work
          </a>

          <a
            ref={(el) => {
              buttonsRef.current[1] = el;
            }}
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-[1.04]"
            style={{ opacity: mounted ? undefined : 0 }}
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}