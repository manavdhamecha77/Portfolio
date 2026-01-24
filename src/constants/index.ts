// /constants/index.ts

export const PORTFOLIO_TABS = ["projects", "certificates", "skills"] as const;
export type PortfolioTab = (typeof PORTFOLIO_TABS)[number];

export const ABOUT_TABS = ["Experience", "Education"] as const;
export type AboutTab = (typeof ABOUT_TABS)[number];



export const SKILLS = [
  // ⭐ Core Web + Full-Stack
  "TypeScript",
  "JavaScript",
  "React",
  "NextJS",
  "Tailwind CSS",
  "Prisma",
  "Supabase",
  "Firebase",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Tanstack Query",
  "Docker",
  "Vercel",
  "Elysia.js",

  // ⭐ UI / Product / Animation
  "Shadcn UI",
  "GSAP",
  "Figma",
  "WordPress",

  // ⭐ Data + ML Foundations
  "Python",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Jupyter Notebooks",

  // ⭐ Developer Tools + Platforms
  "Git",
  "GitHub",
  "VSCode",
  "Notion",
  "Neon db",
  "Linux",
  "Windows",

  // ⭐ Languages + Low-Signal
  "HTML",
  "CSS",
  "JWT",
  "Latex",
  "C",
  "C++",
  "PHP"
] as const;


export const CERTIFICATES = [
  "Web Wonders 3.0 Winner",
  "Python Essentials",
  "Introduction to Cybersecurity",
  "AI for Beginners",
] as const;

export const PROJECTS = [
  { title: "Incognito Chat", desc: "Ephemeral private    self-destructive chat rooms." },
  { title: "Market Microstructure", desc: "HFT crypto analytics with AI and market surveillance." },
  { title: "One Flow", desc: "Enterprise HRMS platform" },
  { title: "Craft Connect", desc: "AI-powered marketplace platform"}
  { title: "Expense Tracker", desc:"Smart, scalable expense management for growing teams."}
  { title: "Trendora", desc: "Fashion, reimagined for the internet." },
  { title: "DineEase", desc: "A comprehensive hotel management system built with Django." },
  { title: "GeoMeasurePro", desc: "AI-powered Land Measurement App" },
] as const;


export const EXPERIENCE = [
 {
  role: "Software Engineer Intern",
  company: "Fastrac",
  period: "May 2025 – July 2025",
  description: 
    "> Developed a production-ready WooCommerce shipping plugin with multi-delivery support and real-time rate calculations.
    > Automated shipment creation, tracking, and cancellations via integration with 3+ external APIs, eliminating manual operational steps.
    > Improved operational efficiency through bulk actions, rate comparison, and caching, reducing checkout latency and admin handling time."
},
] as const;

export const EDUCATION = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institution: "Sardar Vallabhbhai National Institute of Technology, Surat",
    period: "2024 - 2028",
    description: "CGPA: 8.57"
  },
  {
    degree: "Higher Secondary Education (CBSE)",
    institution: "L.P. Savani International School, Pal",
    period: "2022 - 2024",
    description: "Marks: 94.8% (XII Boards)"
  },
{
    degree: "Secondary Education (CBSE)",
    institution: "L.P. Savani International School, Pal",
    period: "2020 - 2022",
    description: "Marks: 95% (X Boards)"
  },
] as const;