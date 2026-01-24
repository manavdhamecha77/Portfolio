"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextType from "./ui/TextType";
import Aurora from "./ui/Aurora";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  const contentRef = useRef<(HTMLElement | null)[]>([]);
  const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.9,
        },
      });

      // Set initial state explicitly
      gsap.set(contentRef.current.filter(Boolean), { y: 30, opacity: 0 });
      gsap.set(buttonsRef.current.filter(Boolean), { y: 10, opacity: 0 });

      tl.to(contentRef.current.filter(Boolean), {
        y: 0,
        opacity: 1,
        stagger: 0.18,
        delay: 0.7,
      }).to(
        buttonsRef.current.filter(Boolean),
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,
        },
        "-=0.4",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center px-6 sm:px-10 py-20 overflow-hidden"
    >
      {/* Aurora */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <div
        ref={(el) => void (contentRef.current[0] = el)}
        className="max-w-3xl tracking-tight"
      >
        <TextType
          className="
        text-4xl sm:text-7xl font-medium
        leading-[1.08] text-white
      "
          text={["Full Stack Developer", "ML Enthusiast"]}
          typingSpeed={75}
          deletingSpeed={50}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          cursorBlinkDuration={0.5}
        />

        <h2
          ref={(el) => void (contentRef.current[1] = el)}
          className="
        mt-3 text-[10px] sm:text-xs uppercase
        tracking-[0.25em] text-white/70
      "
        >
          B.Tech — Artificial Intelligence
        </h2>

        <p
          ref={(el) => void (contentRef.current[2] = el)}
          className="
        mt-6 max-w-xl text-white/80
        text-base sm:text-lg leading-relaxed
      "
        >
          Enhancing digital experiences that are smooth, scalable, and built for
          impact.
        </p>

        <div className="mt-14 flex gap-4 flex-wrap">
          <a
            ref={(el) => void (buttonsRef.current[0] = el)}
            href="#portfolio"
            className="
          px-8 py-3 rounded-full
          bg-white text-black
          text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]
          shadow-[0_0_28px_rgba(255,255,255,0.35)]
          transition-transform duration-300
          hover:shadow-[0_0_40px_rgba(255,255,255,0.7)]
          hover:scale-[1.04]
        "
          >
            View Work
          </a>

          <a
            ref={(el) => void (buttonsRef.current[1] = el)}
            href="#contact"
            className="
          px-8 py-3 rounded-full
          border border-white/30 text-white
          text-xs sm:text-sm font-medium uppercase tracking-[0.25em]
          backdrop-blur-sm
          transition-all duration-300
          hover:border-white hover:bg-white/10 hover:scale-[1.04]
        "
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
