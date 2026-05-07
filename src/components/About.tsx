"use client";

import { useState } from "react";
import Image from "next/image";

import { ABOUT_TABS, type AboutTab, EDUCATION, EXPERIENCE } from "@/constants";

export default function About() {
  const [activeTab, setActiveTab] = useState<AboutTab>("Experience");

  return (
    <section
      id="about"
      className="px-6 sm:px-10 py-14"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-mono uppercase tracking-tighter text-white">
          About Me
        </h2>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed font-mono tracking-wide max-w-2xl mx-auto">
          My journey through experience and education that shaped who I am today.
        </p>
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

      <div className="mt-16 max-w-4xl mx-auto">
        {activeTab === "Experience" && (
          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative">

                <div className="p-6 rounded-xl border border-[#7cff67]/20 bg-black/40 backdrop-blur-sm text-white/90 hover:border-[#7cff67]/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-[#7cff67]/20 bg-white/5">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain p-1.5"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
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
                    </div>
                  </div>

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
          <div className="flex flex-col gap-6">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="relative">

                <div className="p-6 rounded-xl border border-[#7cff67]/20 bg-black/40 backdrop-blur-sm text-white/90 hover:border-[#7cff67]/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {edu.logo && (
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-[#7cff67]/20 bg-white/5">
                        <Image
                          src={edu.logo}
                          alt={edu.institute}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain p-1.5"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
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
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
