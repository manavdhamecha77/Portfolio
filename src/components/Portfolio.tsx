"use client";

import { useRef, useState, memo, useMemo, useCallback } from "react";
import Image from "next/image";
import {
  PORTFOLIO_TABS,
  type PortfolioTab,
  SKILLS,
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
      <div className="mt-12 flex justify-center px-3">
        <div className="flex w-full max-w-2xl rounded-full border border-white/30 p-1 overflow-hidden bg-black/20">
          {PORTFOLIO_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-0 px-2 sm:px-6 py-2 sm:py-3 rounded-full text-[9px] sm:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] transition-colors duration-200 text-center ${activeTab === tab ? "bg-white text-black" : "text-white/70"}`}
            >
              <span className="block truncate">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-16">
        {activeTab === "projects" && <Projects />}
        {activeTab === "certificates" && <Certificates />}
        {activeTab === "skills" && <Skills />}
      </div>
    </section>
  );
}

const Projects = memo(function Projects() {
  const [showMore, setShowMore] = useState(false);
  const initialVisibleCount = 4;
  const hasMore = PROJECTS.length > 6;

  const visible = useMemo(
    () => (showMore ? PROJECTS : PROJECTS.slice(0, 6)),
    [showMore]
  );

  const handleToggle = useCallback(() => {
    setShowMore((prev) => !prev);
  }, []);

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
            onClick={handleToggle}
            className="px-8 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-transform duration-200 active:scale-95"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
});

const ProjectCard = memo(function ProjectCard({
  project: p,
  hidden,
}: {
  project: (typeof PROJECTS)[number];
  hidden: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-xl border border-white/10 bg-white/5 text-white/90 ${hidden ? "hidden sm:block" : ""}`}
    >
      <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-white/10">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2NjYyIvPjwvc3ZnPg=="
        />
      </div>

      <h3 className="text-lg font-medium">{p.title}</h3>
      <p className="mt-2 text-sm text-white/70 line-clamp-3">{p.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-[10px] rounded-full bg-white/10 border border-white/20 uppercase tracking-wider"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-[11px] uppercase tracking-widest text-white/60">
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Live →
        </a>
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
});

const Certificates = memo(function Certificates() {
  const [showMore, setShowMore] = useState(false);

  const visible = useMemo(
    () => (showMore ? CERTIFICATES : CERTIFICATES.slice(0, 6)),
    [showMore]
  );

  const handleToggle = useCallback(() => {
    setShowMore((prev) => !prev);
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((c) => (
        <CertificateCard key={c.title} certificate={c} />
      ))}

      {CERTIFICATES.length > 6 && (
        <div className="col-span-full flex justify-center mt-10">
          <button
            onClick={handleToggle}
            className="px-8 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-transform duration-200 active:scale-95"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
});

const CertificateCard = memo(function CertificateCard({
  certificate: c,
}: {
  certificate: (typeof CERTIFICATES)[number];
}) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-white/90 flex flex-col items-center text-center">
      <div className="relative w-24 h-24 mb-4 rounded-lg overflow-hidden bg-white/10">
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

      <p className="text-sm font-medium">{c.title}</p>
      <p className="text-xs text-white/60 mt-1">
        {c.provider} • {c.year}
      </p>

      <a
        href={c.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-colors"
      >
        View Certificate →
      </a>
    </div>
  );
});

const Skills = memo(function Skills() {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile after mount to avoid hydration issues
  useMemo(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
  }, []);

  const visible = useMemo(() => {
    if (!isMobile) return SKILLS;
    return showMore ? SKILLS : SKILLS.slice(0, 12);
  }, [isMobile, showMore]);

  const hasMore = SKILLS.length > 12;

  const handleToggle = useCallback(() => {
    setShowMore((prev) => !prev);
  }, []);

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 place-items-center">
          {visible.map((s) => (
            <SkillCard key={s.name} skill={s} />
          ))}
        </div>
      </div>

      {hasMore && isMobile && (
        <div className="flex justify-center mt-8 sm:hidden">
          <button
            onClick={handleToggle}
            className="px-8 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-[0.2em] transition-transform duration-200 active:scale-95"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
});

const SkillCard = memo(function SkillCard({
  skill: s,
}: {
  skill: (typeof SKILLS)[number];
}) {
  return (
    <div className="relative group h-16 w-16 rounded-xl bg-white/5 border border-white/10 flex justify-center items-center">
      <Image
        src={s.logo}
        alt={s.name}
        width={32}
        height={32}
        className="object-contain"
        loading="lazy"
        quality={75}
      />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 hidden sm:block text-[10px] uppercase tracking-wide text-white bg-black/80 border border-white/10 px-3 py-1 rounded-lg whitespace-nowrap pointer-events-none transition-opacity duration-200">
        {s.name}
      </span>
    </div>
  );
});