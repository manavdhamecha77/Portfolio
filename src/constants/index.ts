// /constants/index.ts

export const PORTFOLIO_TABS = ["projects", "certificates", "skills"] as const;
export type PortfolioTab = (typeof PORTFOLIO_TABS)[number];

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "Express JS",
  "Node JS",
  "React",
  "MongoDB",
  "JWT",
  "PostgreSQL",
  "TypeScript",
  "Docker",
] as const;

export const CERTIFICATES = [
  "Full Stack Dev",
  "Cloud Basics",
  "AI Foundations"
] as const;

export const PROJECTS = [
  { title: "IntervueAI", desc: "Real-time mock interviews with AI." },
  { title: "Blendy", desc: "A social app for real-time connection." },
  { title: "WATCHit", desc: "Personalized video streaming platform." },
  { title: "Incognito Chat", desc: "Ephemeral private chat rooms." },
  { title: "DevTrack", desc: "Developer productivity tracker." },
  { title: "AI Resume Analyzer", desc: "AI-powered resume insights." },
] as const;
