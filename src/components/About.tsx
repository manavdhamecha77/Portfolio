"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ABOUT_TABS, type AboutTab, EDUCATION, EXPERIENCE } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const [activeTab, setActiveTab] = useState<AboutTab>("Experience");

  // For arrays: use HTMLAnchorElement | null (for buttons)
  const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  // For cards: use HTMLDivElement | null
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setButtonRef = (index: number) => (el: HTMLAnchorElement | null) => {
    buttonsRef.current[index] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
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
          "-=0.4",
        )
        .from(
          buttonsRef.current.filter(Boolean), // null-safe
          {
            y: 10,
            autoAlpha: 0,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            immediateRender: false,
          },
          "-=0.3",
        )
        .from(
          cardsRef.current.filter(Boolean),
          {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.7,
          },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];

    gsap.fromTo(
      children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
      },
    );
  }, [activeTab]);

  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen px-6 sm:px-10 py-32"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl font-black font-mono uppercase tracking-tighter text-white"
        >
          About Me
        </h2>
      </div>

      <div className="mt-12 flex justify-center px-4">
        <div className="inline-flex rounded-full border border-[#7cff67]/30 backdrop-blur-sm p-1 w-full max-w-2xl">
          {ABOUT_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-bold font-mono uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === tab
                  ? "bg-[#7cff67] text-black shadow-[0_0_28px_rgba(124,255,103,0.4)]"
                  : "text-white/70 hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div ref={contentRef} className="mt-16 max-w-4xl mx-auto">
        {activeTab === "Experience" && (
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[#7cff67]/20" />

            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-14 sm:pl-20 pb-12 last:pb-0">
                <div className="absolute left-3.5 sm:left-6.5 top-1.5 w-3 h-3 rounded-full bg-[#7cff67] shadow-[0_0_20px_rgba(124,255,103,0.6)] ring-2 ring-[#7cff67]/30" />

                <div
                  ref={(el) => void (cardsRef.current[i] = el)}
                  className="p-6 rounded-xl border border-[#7cff67]/20 bg-black/40 backdrop-blur-sm text-white/90 hover:border-[#7cff67]/40 transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono uppercase tracking-tight text-white">
                    {exp.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-white/60 tracking-wide flex flex-wrap sm:flex-nowrap sm:items-center font-mono">
                    <span className="flex gap-2">
                      {exp.company} • {exp.type} • {exp.location}
                    </span>

                    <span className="w-full sm:w-auto sm:ml-auto text-left block mt-1 sm:mt-0 text-[#7cff67]">
                      {exp.period.start} – {exp.period.end}
                    </span>
                  </p>

                  <ul className="mt-4 space-y-3 list-none text-sm sm:text-base text-white/80 leading-relaxed">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-[#7cff67] mt-1 flex-shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tech && exp.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-[#7cff67]/10 border border-[#7cff67]/30 text-[#7cff67] hover:bg-[#7cff67]/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Education" && (
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[#7cff67]/20" />

            {EDUCATION.map((edu, i) => (
              <div key={i} className="relative pl-14 sm:pl-20 pb-12 last:pb-0">
                <div className="absolute left-3.5 sm:left-6.5 top-1.5 w-3 h-3 rounded-full bg-[#7cff67] shadow-[0_0_20px_rgba(124,255,103,0.6)] ring-2 ring-[#7cff67]/30" />

                <div
                  ref={(el) => void (cardsRef.current[i] = el)}
                  className="p-6 rounded-xl border border-[#7cff67]/20 bg-black/40 backdrop-blur-sm text-white/90 hover:border-[#7cff67]/40 transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono uppercase tracking-tight text-white">
                    {edu.degree}
                    {edu.class && (
                      <>
                        <br />
                        <span className="text-sm text-white/70">
                          {edu.class}
                        </span>
                      </>
                    )}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-white/60 tracking-wide flex flex-wrap gap-2 font-mono">
                    <span className="text-[#7cff67]">
                      {edu.period.start} – {edu.period.end}
                    </span>
                    <span>
                      {edu.institute} • {edu.location}
                    </span>
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-white/80 font-mono">
                    {edu.grade}
                    {edu.board && ` • ${edu.board}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
