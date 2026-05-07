"use client";

import { useRef, useState, memo, useMemo } from "react";
import Image from "next/image";
import {
  PORTFOLIO_TABS,
  type PortfolioTab,
  CERTIFICATES,
  PROJECTS,
} from "@/constants";

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState<PortfolioTab>("projects");

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="px-6 sm:px-10 py-14"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-mono uppercase tracking-tighter text-white">
          Portfolio Showcase
        </h2>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed font-mono tracking-wide">
          Explore my journey through projects and certifications.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-12 flex justify-center px-3">
        <div className="flex w-full max-w-2xl rounded-full border border-[#7cff67]/30 backdrop-blur-sm p-1 overflow-hidden">
          {PORTFOLIO_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-0 px-2 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-bold font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 text-center ${activeTab === tab
                ? "bg-[#7cff67] text-black shadow-[0_0_24px_rgba(124,255,103,0.4)]"
                : "text-white/70 hover:text-white"
                }`}
            >
              <span className="block truncate">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content - Remove key prop and animation */}
      <div className="mt-16">
        {activeTab === "projects" && <Projects />}
        {activeTab === "certificates" && <Certificates />}
      </div>
    </section>
  );
}

const Projects = memo(function Projects() {
  const [showMore, setShowMore] = useState(false);
  const initialVisibleCount = 3;
  const hasMore = PROJECTS.length > initialVisibleCount;

  // Memoize visible projects
  const visible = useMemo(
    () => (showMore ? PROJECTS : PROJECTS.slice(0, 6)),
    [showMore]
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((p, i) => (
        <ProjectCard
          key={p.title}
          project={p}
          hidden={!showMore && i >= initialVisibleCount}
        />
      ))}

      {hasMore && (
        <div className="col-span-full flex justify-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 rounded-full bg-[#7cff67] text-black text-xs sm:text-sm font-bold font-mono uppercase tracking-[0.2em] shadow-[0_0_28px_rgba(124,255,103,0.4)] transition-all hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(124,255,103,0.6)]"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
});

// Separate ProjectCard component for better performance
const ProjectCard = memo(function ProjectCard({
  project: p,
  hidden,
}: {
  project: (typeof PROJECTS)[number];
  hidden: boolean;
}) {
  return (
    <div
      className={`group p-6 rounded-xl border border-[#7cff67]/20 bg-black/40 backdrop-blur-sm text-white/90 transition-all duration-300 hover:border-[#7cff67]/50 hover:scale-[1.02] ${hidden ? "hidden sm:block" : ""
        }`}
    >
      <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-white/5 border border-[#7cff67]/10">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          quality={75}
        />
      </div>

      <h3 className="text-lg sm:text-xl font-bold font-mono uppercase tracking-tight text-white">
        {p.title}
      </h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-[9px] sm:text-[10px] rounded-full bg-[#7cff67]/10 border border-[#7cff67]/30 uppercase tracking-wider font-mono text-[#7cff67]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-[11px] uppercase tracking-widest text-white/60 font-mono font-bold">
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#7cff67] transition-colors"
        >
          Live →
        </a>
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#7cff67] transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
});

const Certificates = memo(function Certificates() {
  const [showMore, setShowMore] = useState(false);

  // Memoize visible certificates
  const visible = useMemo(
    () => (showMore ? CERTIFICATES : CERTIFICATES.slice(0, 6)),
    [showMore]
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((c) => (
        <CertificateCard key={c.title} certificate={c} />
      ))}

      {CERTIFICATES.length > 6 && (
        <div className="col-span-full flex justify-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 rounded-full bg-[#7cff67] text-black text-xs sm:text-sm font-bold font-mono uppercase tracking-[0.2em] shadow-[0_0_28px_rgba(124,255,103,0.4)] transition-all hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(124,255,103,0.6)]"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
});

// Separate CertificateCard component
const CertificateCard = memo(function CertificateCard({
  certificate: c,
}: {
  certificate: (typeof CERTIFICATES)[number];
}) {
  return (
    <div className="group p-6 rounded-xl border border-[#7cff67]/20 bg-black/40 backdrop-blur-sm text-white/90 flex flex-col items-center text-center transition-all hover:border-[#7cff67]/50 hover:scale-[1.02]">
      <div className="relative w-24 h-24 mb-4 rounded-lg overflow-hidden bg-white/5 border border-[#7cff67]/10">
        <Image
          src={c.image}
          alt={c.title}
          fill
          sizes="96px"
          className="object-cover"
          loading="lazy"
          quality={75}
        />
      </div>

      <p className="text-sm sm:text-base font-bold font-mono uppercase tracking-tight text-white">
        {c.title}
      </p>
      <p className="text-xs text-white/60 mt-2 font-mono">
        {c.provider} • {c.year}
      </p>

      <a
        href={c.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-[11px] uppercase tracking-widest text-[#7cff67] hover:text-white font-mono font-bold transition-colors"
      >
        View Certificate →
      </a>
    </div>
  );
});
