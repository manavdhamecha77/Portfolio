"use client";

import { memo, useMemo, useState } from "react";
import Image from "next/image";
import { SKILLS } from "@/constants";

type SkillGroupId = "frontend" | "backend" | "databases" | "devops" | "ai-ml";
type Skill = (typeof SKILLS)[number];
type SkillName = Skill["name"];

const SKILL_GROUPS: {
  id: SkillGroupId;
  label: string;
  skills: readonly SkillName[];
}[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "React",
      "NextJS",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Elysia.js",
      "Prisma",
      "Supabase",
      "Firebase",
      "WordPress",
      "Woo Commerce",
      "PHP",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "SQLite"],
  },
  {
    id: "devops",
    label: "DevOps",
    skills: ["Docker", "Vercel", "Git", "GitHub", "Linux", "Windows", "Bash"],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    skills: ["Python", "Numpy", "Pandas", "Matplotlib", "Tensorflow", "Jupyter Notebooks"],
  },
];

const skillMap = new Map(SKILLS.map((skill) => [skill.name, skill]));

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<SkillGroupId>("frontend");
  const activeIndex = SKILL_GROUPS.findIndex((group) => group.id === activeGroup);

  const visibleSkills = useMemo(() => {
    const group = SKILL_GROUPS.find((item) => item.id === activeGroup);
    if (!group) return [];
    return group.skills
      .map((name) => skillMap.get(name))
      .filter((skill): skill is Skill => Boolean(skill));
  }, [activeGroup]);

  const goToPrevGroup = () => {
    const nextIndex = (activeIndex - 1 + SKILL_GROUPS.length) % SKILL_GROUPS.length;
    setActiveGroup(SKILL_GROUPS[nextIndex].id);
  };

  const goToNextGroup = () => {
    const nextIndex = (activeIndex + 1) % SKILL_GROUPS.length;
    setActiveGroup(SKILL_GROUPS[nextIndex].id);
  };

  return (
    <section id="skills" className="px-6 sm:px-10 py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-mono uppercase tracking-tighter text-white">
            Skills
          </h2>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed font-mono tracking-wide">
            Technologies I use to design, build, and ship products.
          </p>
        </div>

        <div className="mt-12 hidden sm:flex justify-center px-3">
          <div className="flex w-full max-w-4xl rounded-full border border-[#00bfff]/30 backdrop-blur-sm p-1 overflow-hidden">
            {SKILL_GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                className={`flex-1 min-w-0 px-2 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-bold font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 text-center ${
                  activeGroup === group.id
                    ? "bg-[#00bfff] text-black shadow-[0_0_24px_rgba(0,191,255,0.4)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span className="block truncate">{group.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex sm:hidden items-center justify-center gap-3">
          <button
            onClick={goToPrevGroup}
            aria-label="Previous skill group"
            className="h-11 w-11 rounded-full border border-[#00bfff]/30 text-[#00bfff] bg-black/40 flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="min-w-[180px] px-5 py-2.5 rounded-full border border-[#00bfff]/30 bg-[#00bfff] text-black text-xs font-bold font-mono uppercase tracking-[0.2em] text-center"
          >
            {SKILL_GROUPS[activeIndex]?.label ?? "Frontend"}
          </button>
          <button
            onClick={goToNextGroup}
            aria-label="Next skill group"
            className="h-11 w-11 rounded-full border border-[#00bfff]/30 text-[#00bfff] bg-black/40 flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {visibleSkills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SkillCard = memo(function SkillCard({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) {
  return (
    <div className="rounded-xl border border-[#00bfff]/20 bg-black/40 p-5 text-center transition-all duration-300 hover:border-[#00bfff]/50 hover:scale-[1.03]">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-black/50">
        <Image src={logo} alt={name} width={30} height={30} className="object-contain" />
      </div>
      <p className="mt-3 text-xs sm:text-sm text-white/80 font-mono">{name}</p>
    </div>
  );
});
