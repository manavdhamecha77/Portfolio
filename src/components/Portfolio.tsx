"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  PORTFOLIO_TABS,
  type PortfolioTab,
  SKILLS,
  CERTIFICATES,
  PROJECTS,
} from "@/constants";

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<PortfolioTab>("projects");

  useEffect(() => {
    const c = contentRef.current;
    if (!c) return;
    gsap.fromTo(
      Array.from(c.children),
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out" },
    );
  }, [activeTab]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen px-6 sm:px-10 py-32"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-semibold text-white tracking-tight">
          Portfolio Showcase
        </h2>
        <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-12 flex justify-center px-4">
        <div className="inline-flex rounded-full border border-white/30 backdrop-blur-sm p-1 w-full max-w-2xl">
          {PORTFOLIO_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-full
                text-[10px] sm:text-sm font-semibold uppercase tracking-[0.18em]
                transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-white text-black shadow-[0_0_28px_rgba(255,255,255,0.4)]"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="mt-16">
        {activeTab === "projects" && <Projects />}
        {activeTab === "certificates" && <Certificates />}
        {activeTab === "skills" && <Skills />}
      </div>
    </section>
  );
}

function Projects() {
  const [showMore, setShowMore] = useState(false);
  const visible = showMore ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((p) => (
        <div
          key={p.title}
          className="
            p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm
            text-white/90 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]
          "
        >
          {/* Image */}
          <div className="rounded-lg overflow-hidden h-40 mb-4 bg-white/10">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title + Desc */}
          <h3 className="text-lg font-medium">{p.title}</h3>
          <p className="mt-2 text-sm text-white/70">{p.desc}</p>

          {/* Tech Badges */}
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-[10px] rounded-full bg-white/10 border border-white/20 text-white uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="mt-4 flex justify-between text-[11px] uppercase tracking-widest text-white/60">
            <a href={p.live} target="_blank" rel="noopener noreferrer">
              Live →
            </a>
            <a href={p.repo} target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </div>
        </div>
      ))}

      {PROJECTS.length > 6 && (
        <div className="col-span-full flex justify-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              px-8 py-3 rounded-full bg-white text-black
              text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]
              shadow-[0_0_28px_rgba(255,255,255,0.4)]
              transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] hover:scale-[1.05]
            "
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

function Certificates() {
  const [showMore, setShowMore] = useState(false);
  const visible = showMore ? CERTIFICATES : CERTIFICATES.slice(0, 6);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((c) => (
        <div
          key={c.title}
          className="
            p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm
            text-white/90 flex flex-col items-center text-center
            transition-all duration-300 hover:border-white/20 hover:scale-[1.02]
          "
        >
          {/* Thumbnail */}
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-white/10 mb-4">
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <p className="text-sm font-medium">{c.title}</p>

          {/* Provider + Year */}
          <p className="text-xs text-white/60 mt-1">
            {c.provider} • {c.year}
          </p>

          {/* Link */}
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-[11px] uppercase tracking-widest text-white/70 hover:text-white"
          >
            View Certificate →
          </a>
        </div>
      ))}

      {CERTIFICATES.length > 6 && (
        <div className="col-span-full flex justify-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              px-8 py-3 rounded-full bg-white text-black text-xs sm:text-sm
              font-semibold uppercase tracking-[0.2em]
              shadow-[0_0_28px_rgba(255,255,255,0.4)]
              transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] hover:scale-[1.05]
            "
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}


function Skills() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 place-items-center">
        {SKILLS.map((s) => (
          <div
            key={s.name}
            className="
              h-16 w-16 rounded-xl bg-white/5 border border-white/10
              backdrop-blur-sm flex flex-col justify-center items-center gap-1
            "
          >
            <img src={s.logo} alt={s.name} className="h-8 w-8 object-contain" />
            <p className="text-[10px] text-white/70 uppercase tracking-wide">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

