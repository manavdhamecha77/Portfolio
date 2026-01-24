// /constants/index.ts

export const PORTFOLIO_TABS = ["projects", "certificates", "skills"] as const;
export type PortfolioTab = (typeof PORTFOLIO_TABS)[number];

export const ABOUT_TABS = ["Experience", "Education"] as const;
export type AboutTab = (typeof ABOUT_TABS)[number];



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


export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Building scalable web applications with React and Node.js"
  },
  {
    role: "Software Engineer Intern",
    company: "StartupXYZ",
    period: "2022 - 2023",
    description: "Developed features for mobile-first e-commerce platform"
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2021 - 2022",
    description: "Created custom web solutions for local businesses"
  },
] as const;

export const EDUCATION = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institution: "University Name",
    period: "2020 - 2024",
    description: "Specialized in Machine Learning and Deep Learning"
  },
  {
    degree: "Higher Secondary Education",
    institution: "School Name",
    period: "2018 - 2020",
    description: "Science stream with focus on Mathematics and Computer Science"
  },
] as const;