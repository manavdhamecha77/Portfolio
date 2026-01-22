"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(".hero-content > *", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        delay: 0.8, // waits for navbar anim
      }).from(
        ".hero-btns a",
        {
          scale: 0.9,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
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
      className="
        min-h-screen
        flex items-center
        px-10
        max-w-6xl mx-auto
      "
    >
      <div className="hero-content tracking-wide">
        <h1 className="text-6xl font-semibold text-black leading-tight">
          Your Name
        </h1>

        <h2 className="text-2xl text-neutral-500 mt-3 uppercase tracking-wider">
          Your Role / Tagline
        </h2>

        <p className="max-w-lg mt-6 text-neutral-700 text-base leading-relaxed">
          Short introduction about yourself. What you do, what you love, and
          what you are looking for.
        </p>

        <div className="hero-btns mt-10 flex gap-4">
          <a
            href="#projects"
            className="
              px-6 py-2
              border border-black
              rounded-full
              text-black
              text-sm
              uppercase
              tracking-widest
              inline-block
              transition-all
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              px-6 py-2
              border border-neutral-400
              rounded-full
              text-neutral-600
              text-sm
              uppercase
              tracking-widest
              inline-block
              transition-all
            "
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
