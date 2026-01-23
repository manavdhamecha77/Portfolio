"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  // For arrays: use HTMLAnchorElement | null (for buttons)
  const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  // For cards: use HTMLDivElement | null
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: {
          ease: "power3.out",
          duration: 0.8,
        },
      });

      tl.from(titleRef.current, {
        y: 30,
        opacity: 0,
      })
        .from(
          textRef.current,
          {
            y: 20,
            opacity: 0,
          },
          "-=0.4"
        )
        .from(
          buttonsRef.current.filter(Boolean), // null-safe
          {
            y: 10,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          cardsRef.current.filter(Boolean),
          {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.7,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen px-10 py-32">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 ref={titleRef} className="text-4xl font-semibold text-neutral-100">
          About Me
        </h2>

        <p ref={textRef} className="mt-6 text-neutral-400 leading-relaxed">
          Hello, I&apos;m Manav Dhamecha, passionate about building smart
          and scalable web & mobile applications. I&apos;ve completed a
          full-stack development course and constantly explore new technologies
          to refine my skills. Focused on continuous learning, I aim to
          transition into the IT industry and eventually move toward AI and
          data science.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <a
            ref={(el) => void (buttonsRef.current[0] = el)}
            href="#"
            className="px-6 py-2 rounded-full border border-neutral-500 text-xs uppercase tracking-widest text-neutral-200 inline-block"
          >
            Download CV
          </a>

          <a
            ref={(el) => void (buttonsRef.current[1] = el)}
            href="#projects"
            className="px-6 py-2 rounded-full border border-neutral-700 text-xs uppercase tracking-widest text-neutral-400 inline-block"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Total Projects",
            value: "4",
            desc: "Innovative web & mobile solutions crafted",
          },
          {
            label: "Certificates",
            value: "3",
            desc: "Professional skills validated",
          },
          {
            label: "Years of Experience",
            value: "3",
            desc: "Continuous learning journey",
          },
        ].map((item, index) => (
          <div
            key={item.label}
            ref={(el) => void (cardsRef.current[index] = el)}
            className="p-6 rounded-xl border border-neutral-800 text-neutral-200"
          >
            <div className="text-3xl font-semibold">{item.value}</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-neutral-400">
              {item.label}
            </div>
            <p className="mt-2 text-sm text-neutral-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
