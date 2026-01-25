"use client";

import { useEffect, useRef, useState } from "react";
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
          "-=0.4",
        )
        .from(
          buttonsRef.current.filter(Boolean), // null-safe
          {
            y: 10,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
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

  useEffect(() => {
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
          className="text-5xl sm:text-6xl font-semibold text-white tracking-tight"
        >
          About Me
        </h2>

        <p
          ref={textRef}
          className="mt-6 text-white/70 leading-relaxed text-base sm:text-lg text-left max-w-2xl mx-auto"
        >
          Hello, I&apos;m Manav Dhamecha — passionate about building smart and
          scalable web & mobile applications.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            ref={(el) => void (buttonsRef.current[0] = el)}
            href="#"
            className=" px-8 py-3 rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-[1.04]"
          >
            Download CV
          </a>

          <a
            ref={(el) => void (buttonsRef.current[1] = el)}
            href="#projects"
            className=" px-8 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] shadow-[0_0_28px_rgba(255,255,255,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] hover:scale-[1.05]"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="mt-12 flex justify-center px-4">
        <div className="inline-flex rounded-full border border-white/30 backdrop-blur-sm p-1 w-full max-w-2xl">
          {ABOUT_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={` flex-1 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-[9px] sm:text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ${activeTab === tab ? "bg-white text-black shadow-[0_0_28px_rgba(255,255,255,0.4)]" : "text-white/70 hover:text-white"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div ref={contentRef} className="mt-16 max-w-4xl mx-auto">
        {activeTab === "Experience" && (
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-white/10" />

            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-14 sm:pl-20 pb-12 last:pb-0">
                {/* Dot */}
                <div className="absolute left-3.5 sm:left-6.5 top-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] ring-1 ring-white/20" />

                <div
                  ref={(el) => void (cardsRef.current[i] = el)}
                  className=" p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white/90"
                >
                  <h3 className="text-lg sm:text-xl font-medium">
                    {exp.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-white/60 tracking-wide flex flex-wrap sm:flex-nowrap sm:items-center">
                    <span className="flex gap-2">
                      {exp.company} • {exp.type} • {exp.location}
                    </span>

                    <span className="w-full sm:w-auto sm:ml-auto text-left block mt-1 sm:mt-0">
                      {exp.period.start} – {exp.period.end}
                    </span>
                  </p>

                  <ul className="mt-4 space-y-3 list-disc list-inside text-sm sm:text-base text-white/80 leading-relaxed">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>

                  {exp.tech && exp.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className=" px-3 py-1 rounded-full text-[10px] sm:text-xs bg-white/10 border border-white/20 text-white"
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
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-white/10" />

            {EDUCATION.map((edu, i) => (
              <div key={i} className="relative pl-14 sm:pl-20 pb-12 last:pb-0">
                <div className="absolute left-3.5 sm:left-6.5 top-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] ring-1 ring-white/20" />

                <div
                  ref={(el) => void (cardsRef.current[i] = el)}
                  className=" p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white/90"
                >
                  <h3 className="text-lg sm:text-xl font-medium">
                    {edu.degree}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-white/60 tracking-wide flex flex-wrap gap-2">
                    <span>
                      {edu.period.start} – {edu.period.end}
                    </span>
                    <span>
                      {edu.institute} • {edu.location}
                    </span>
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-white/80">
                    {edu.grade}
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
