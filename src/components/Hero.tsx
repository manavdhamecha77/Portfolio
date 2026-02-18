"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import TextType from "./ui/TextType";

// Lazy-load sphere so it never blocks initial paint
const SkillSphere = dynamic(() => import("./SkillSphere"), {
  ssr: false,
  loading: () => null,
});

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
      className="relative min-h-screen flex items-center px-6 sm:px-10 py-20 overflow-hidden bg-black"
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7cff67]/10 via-[#5227FF]/5 to-black" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,255,103,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(124,255,103,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Two-column layout: text left, sphere right */}
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">

        {/* ── LEFT: Text content ── */}
        <div className="flex-1 tracking-tight">
          {/* Main Title with Glitch Effect */}
          <h1
            ref={(el) => { contentRef.current[0] = el; }}
            className="group text-5xl sm:text-7xl md:text-8xl font-black font-mono uppercase tracking-tighter text-white mb-2 leading-[0.9] relative cursor-default"
            style={{ opacity: mounted ? undefined : 0 }}
          >
            <span className="relative inline-block">
              {/* Mobile: Simple white text, Desktop: Gradient animation */}
              <span className="relative z-10 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-white sm:via-[#7cff67] sm:to-white sm:animate-gradient-x">
                Manav Dhamecha
              </span>
              {/* Glitch layers - hidden on mobile */}
              <span className="hidden sm:block absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 text-[#7cff67] blur-[1px] animate-glitch-1" aria-hidden="true">
                Manav Dhamecha
              </span>
              <span className="hidden sm:block absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 text-[#5227FF] blur-[1px] animate-glitch-2" aria-hidden="true">
                Manav Dhamecha
              </span>
            </span>
          </h1>

          {/* Typing Text with Glow */}
          <div
            ref={(el) => { contentRef.current[1] = el; }}
            style={{ opacity: mounted ? undefined : 0 }}
            className="font-mono uppercase tracking-[0.1em] sm:tracking-[0.2em]"
          >
            <TextType
              className="text-lg sm:text-2xl md:text-3xl font-bold py-3 text-[#7cff67] sm:drop-shadow-[0_0_15px_rgba(124,255,103,0.5)]"
              text={["Full Stack Developer", "AI Engineer", "Problem Solver"]}
              typingSpeed={75}
              deletingSpeed={50}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
            />
          </div>

          {/* Subtitle */}
          <h2
            ref={(el) => { contentRef.current[2] = el; }}
            className="mt-6 text-[11px] sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/70 font-mono leading-relaxed max-w-2xl"
            style={{ opacity: mounted ? undefined : 0 }}
          >
            B.Tech — Artificial Intelligence • NIT Surat
          </h2>

          {/* Buttons */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap">
            <a
              ref={(el) => { buttonsRef.current[0] = el; }}
              href="#portfolio"
              className="group relative px-8 py-3 rounded-full bg-[#7cff67] text-black text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_28px_rgba(124,255,103,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,255,103,0.6)] hover:scale-[1.04] overflow-hidden"
              style={{ opacity: mounted ? undefined : 0 }}
            >
              <span className="relative z-10">View Work</span>
              <span className="hidden sm:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </a>

            <a
              ref={(el) => { buttonsRef.current[1] = el; }}
              href="#contact"
              className="group relative px-8 py-3 rounded-full border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 hover:border-[#7cff67] hover:text-[#7cff67] hover:shadow-[0_0_20px_rgba(124,255,103,0.3)] hover:scale-[1.04]"
              style={{ opacity: mounted ? undefined : 0 }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* ── RIGHT: 3D Skill Sphere ── */}
        {mounted && (
          <div className="flex-shrink-0 flex flex-col items-center justify-center">
            <SkillSphere size={380} mobileSize={280} />
          </div>
        )}
      </div>

      {/* Scanline Effect - hidden on mobile for performance */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-30 animate-scanline" />
    </section>
  );
}