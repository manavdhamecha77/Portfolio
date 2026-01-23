"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  // content: h1, h2, p
  const contentRef = useRef<(HTMLElement | null)[]>([]);
  // buttons: two <a>
  const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.9,
        },
      });

      tl.from(
        contentRef.current.filter(Boolean), // prevents null errors
        {
          y: 30,
          opacity: 0,
          stagger: 0.18,
          delay: 0.7,
        }
      ).from(
        buttonsRef.current.filter(Boolean),
        {
          y: 10,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
        },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center px-10">
      <div className="max-w-3xl tracking-wide">
        <h1
          ref={(el) => {
            contentRef.current[0] = el;
          }}
          className="text-6xl font-semibold text-neutral-100 leading-tight"
        >
          Full Stack <br /> Developer
        </h1>

        <h2
          ref={(el) => {
            contentRef.current[1] = el;
          }}
          className="mt-4 text-sm uppercase tracking-widest text-neutral-400"
        >
          Computer Science & Engineering
        </h2>

        <p
          ref={(el) => {
            contentRef.current[2] = el;
          }}
          className="mt-6 max-w-lg text-neutral-400 leading-relaxed"
        >
          Enhancing digital experiences that are smooth, scalable, and made
          to impress.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            ref={(el) => {
              buttonsRef.current[0] = el;
            }}
            href="#projects"
            className="px-6 py-2 border border-neutral-500 rounded-full text-xs uppercase tracking-widest text-neutral-200 inline-block"
          >
            Projects
          </a>

          <a
            ref={(el) => {
              buttonsRef.current[1] = el;
            }}
            href="#contact"
            className="px-6 py-2 border border-neutral-700 rounded-full text-xs uppercase tracking-widest text-neutral-400 inline-block"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
