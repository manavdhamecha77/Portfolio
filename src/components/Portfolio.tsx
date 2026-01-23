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
      }
    );
  }, [activeTab]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen px-6 md:px-10 py-32"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-neutral-100">
          Portfolio Showcase
        </h2>
        <p className="mt-4 text-neutral-400">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-12 flex justify-center">
        <div className="flex w-full max-w-3xl rounded-full border border-neutral-800 overflow-hidden">
          {PORTFOLIO_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-xs uppercase tracking-widest transition ${
                activeTab === tab ? "text-neutral-100" : "text-neutral-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`mt-16 grid gap-6 ${
          activeTab === "skills"
            ? "grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {activeTab === "projects" && <Projects />}
        {activeTab === "certificates" && <Certificates />}
        {activeTab === "skills" && <Skills />}
      </div>
    </section>
  );
}

function Projects() {
  const [showMore, setShowMore] = useState(false);

  const visible = showMore ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <>
      {visible.map((p) => (
        <div
          key={p.title}
          className="p-5 rounded-xl border border-neutral-800 text-neutral-200"
        >
          <div className="h-40 rounded-lg bg-neutral-900 mb-4" />
          <h3 className="font-medium">{p.title}</h3>
          <p className="mt-2 text-sm text-neutral-500">{p.desc}</p>
          <div className="mt-4 flex justify-between text-xs text-neutral-400">
            <span>Live Demo</span>
            <span>Details →</span>
          </div>
        </div>
      ))}

      <div className="col-span-full flex justify-center mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-sm text-neutral-400 hover:text-neutral-200 transition"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}


function Certificates() {
  const [showMore, setShowMore] = useState(false);

  const visible = showMore ? CERTIFICATES : CERTIFICATES.slice(0, 3);

  return (
    <>
      {visible.map((c) => (
        <div
          key={c}
          className="p-6 rounded-xl border border-neutral-800 text-neutral-200"
        >
          <div className="h-24 w-24 rounded-full bg-neutral-900 mb-4 mx-auto" />
          <p className="text-center text-sm">{c}</p>
        </div>
      ))}

      {CERTIFICATES.length > 3 && (
        <div className="col-span-full flex justify-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-neutral-400 hover:text-neutral-200 transition"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
}

function Skills() {
  return SKILLS.map((skill) => (
    <div key={skill} className="flex items-center justify-center">
      <div className="h-14 w-14 bg-neutral-800 rounded-sm" />
    </div>
  ));
}

