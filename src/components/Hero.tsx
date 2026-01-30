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

    // Skip heavy animations on mobile - use simple fade
    if (isMobile) {
      const contentElements = contentRef.current.filter(Boolean);
      const buttonElements = buttonsRef.current.filter(Boolean);

      gsap.fromTo(
        [...contentElements, ...buttonElements],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
      return;
    }

    // Full animation for desktop
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

      <div className="max-w-3xl tracking-tight">
        <h1
          ref={(el) => {
            contentRef.current[0] = el;
          }}
          className="text-6xl sm:text-7xl font-bold leading-tight text-white mb-2"
          style={{ opacity: mounted ? undefined : 1 }}
        >
          Manav Dhamecha
        </h1>

        <div
          ref={(el) => {
            contentRef.current[1] = el;
          }}
          style={{ opacity: mounted ? undefined : 1 }}
        >
          <TextType
            className="text-3xl py-3 sm:text-6xl font-medium leading-[1.08] text-white"
            text={[
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
              "ML Enthusiast",
            ]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
          />
        </div>

        <h2
          ref={(el) => {
            contentRef.current[2] = el;
          }}
          className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/70"
          style={{ opacity: mounted ? undefined : 1 }}
        >
          B.Tech — Artificial Intelligence
        </h2>

        <p
          ref={(el) => {
            contentRef.current[3] = el;
          }}
          className="mt-6 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed"
          style={{ opacity: mounted ? undefined : 1 }}
        >
          Enhancing digital experiences that are smooth, scalable, and built for
          impact.
        </p>

        <div className="mt-14 flex gap-4 flex-wrap">
          <a
            ref={(el) => {
              buttonsRef.current[0] = el;
            }}
            href="#portfolio"
            className="px-8 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] shadow-[0_0_28px_rgba(255,255,255,0.35)] transition-transform duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.7)] hover:scale-[1.04]"
            style={{ opacity: mounted ? undefined : 1 }}
          >
            View Work
          </a>

          <a
            ref={(el) => {
              buttonsRef.current[1] = el;
            }}
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium uppercase tracking-[0.25em] backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-[1.04]"
            style={{ opacity: mounted ? undefined : 1 }}
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}