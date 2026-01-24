// /constants/index.ts

export const PORTFOLIO_TABS = ["projects", "certificates", "skills"] as const;
export type PortfolioTab = (typeof PORTFOLIO_TABS)[number];

export const ABOUT_TABS = ["Experience", "Education"] as const;
export type AboutTab = (typeof ABOUT_TABS)[number];

export const SKILLS = [
  { name: "TypeScript", logo: "/skills/typescript.svg", category: "core" },
  { name: "JavaScript", logo: "/skills/javascript.svg", category: "core" },
  { name: "React", logo: "/skills/react.svg", category: "core" },
  { name: "NextJS", logo: "/skills/nextjs.svg", category: "core" },
  { name: "Tailwind CSS", logo: "/skills/tailwind.svg", category: "core" },
  { name: "Prisma", logo: "/skills/prisma.svg", category: "core" },
  { name: "Supabase", logo: "/skills/supabase.svg", category: "core" },
  { name: "Firebase", logo: "/skills/firebase.svg", category: "core" },
  { name: "PostgreSQL", logo: "/skills/postgresql.svg", category: "core" },
  { name: "MySQL", logo: "/skills/mysql.svg", category: "core" },
  { name: "Redis", logo: "/skills/redis.svg", category: "core" },
  { name: "Tanstack Query", logo: "/skills/tanstack.svg", category: "core" },
  { name: "Docker", logo: "/skills/docker.svg", category: "core" },
  { name: "Vercel", logo: "/skills/vercel.svg", category: "core" },
  { name: "Elysia.js", logo: "/skills/elysia.svg", category: "core" },

  { name: "Shadcn UI", logo: "/skills/shadcn.svg", category: "ui" },
  { name: "GSAP", logo: "/skills/gsap.svg", category: "ui" },
  { name: "Figma", logo: "/skills/figma.svg", category: "ui" },
  { name: "WordPress", logo: "/skills/wordpress.svg", category: "ui" },

  { name: "Python", logo: "/skills/python.svg", category: "ml" },
  { name: "Numpy", logo: "/skills/numpy.svg", category: "ml" },
  { name: "Pandas", logo: "/skills/pandas.svg", category: "ml" },
  { name: "Matplotlib", logo: "/skills/matplotlib.svg", category: "ml" },
  { name: "Seaborn", logo: "/skills/seaborn.svg", category: "ml" },
  { name: "Jupyter Notebooks", logo: "/skills/jupyter.svg", category: "ml" },

  { name: "Git", logo: "/skills/git.svg", category: "tools" },
  { name: "GitHub", logo: "/skills/github.svg", category: "tools" },
  { name: "VSCode", logo: "/skills/vscode.svg", category: "tools" },
  { name: "Notion", logo: "/skills/notion.svg", category: "tools" },
  { name: "Neon db", logo: "/skills/neon.svg", category: "tools" },
  { name: "Linux", logo: "/skills/linux.svg", category: "tools" },
  { name: "Windows", logo: "/skills/windows.svg", category: "tools" },

  { name: "HTML", logo: "/skills/html.svg", category: "misc" },
  { name: "CSS", logo: "/skills/css.svg", category: "misc" },
  { name: "JWT", logo: "/skills/jwt.svg", category: "misc" },
  { name: "Latex", logo: "/skills/latex.svg", category: "misc" },
  { name: "C", logo: "/skills/c.svg", category: "misc" },
  { name: "C++", logo: "/skills/cpp.svg", category: "misc" },
  { name: "PHP", logo: "/skills/php.svg", category: "misc" },
] as const;



export const CERTIFICATES = [
  {
    title: "Web Wonders 3.0 Winner",
    image: "/certificates/web-wonders.png",
    link: "https://example.com", 
    provider: "Web Wonders Hackathon",
    year: 2024,
  },
  {
    title: "Python Essentials",
    image: "/certificates/python-essentials.png",
    link: "https://example.com",
    provider: "Cisco Networking Academy",
    year: 2023,
  },
  {
    title: "Introduction to Cybersecurity",
    image: "/certificates/intro-cybersecurity.png",
    link: "https://example.com",
    provider: "Cisco Networking Academy",
    year: 2023,
  },
  {
    title: "AI for Beginners",
    image: "/certificates/ai-beginners.png",
    link: "https://example.com",
    provider: "OpenAI / Coursera / Udemy (choose)",
    year: 2024,
  },
] as const;


export const PROJECTS = [
  {
    title: "Incognito Chat",
    desc: "Ephemeral private self-destructive chat rooms.",
    image: "/projects/incognito-chat.png",
    live: "https://your-live-link.com",
    repo: "https://github.com/youruser/incognito-chat",
    tech: ["NextJS", "Supabase", "Tailwind CSS", "JWT"],
  },
  {
    title: "Market Microstructure",
    desc: "HFT crypto analytics with AI-based market surveillance.",
    image: "/projects/market-microstructure.png",
    live: "https://your-live-link.com",
    repo: "https://github.com/youruser/market-microstructure",
    tech: ["Python", "Pandas", "Seaborn", "Plotly"],
  },
  {
    title: "One Flow",
    desc: "An enterprise HRMS platform for modern teams.",
    image: "/projects/oneflow.png",
    live: "https://your-live-link.com",
    repo: "https://github.com/youruser/oneflow",
    tech: ["NextJS", "Supabase", "Tailwind CSS", "Prisma"],
  },
  {
    title: "Craft Connect",
    desc: "AI-powered marketplace platform.",
    image: "/projects/craft-connect.png",
    live: "https://your-live-link.com",
    repo: "https://github.com/youruser/craft-connect",
    tech: ["NextJS", "Supabase", "Prisma"],
  },
  {
    title: "Expense Tracker",
    desc: "Smart, scalable expense management for growing teams.",
    image: "/projects/expense-tracker.png",
    live: "https://your-live-link.com",
    repo: "https://github.com/youruser/expense-tracker",
    tech: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Trendora",
    desc: "Fashion, reimagined for the internet.",
    image: "/projects/trendora.png",
    live: "https://your-live-link.com",
    repo: "https://github.com/youruser/trendora",
    tech: ["NextJS", "Supabase", "Tailwind CSS"],
  },
  {
    title: "DineEase",
    desc: "Hotel management system built with Django.",
    image: "/projects/dineease.png",
    live: "https://your-live-link.com",
    repo: "https://github.com/youruser/dineease",
    tech: ["Python", "Django", "SQLite"],
  },
  {
    title: "GeoMeasurePro",
    desc: "AI-powered land measurement mobile application.",
    image: "/projects/geo-measure-pro.png",
    live: "https://your-live-link.com",
    repo: "https://github.com/youruser/geo-measure-pro",
    tech: ["Python", "OpenCV", "Android"],
  },
] as const;

export const EXPERIENCE = [
  {
    title: "Software Engineer Intern",
    company: "Fastrac",
    type: "Internship",
    location: "Remote / India",
    period: {
      start: "May 2025",
      end: "July 2025",
    },
    bullets: [
      "Built a production-grade WooCommerce shipping plugin supporting multi-delivery workflows and real-time rate computation.",
      "Automated shipment creation, tracking, and cancellation through integration with 3+ external APIs, removing manual operational dependency.",
      "Reduced checkout latency and admin handling time via bulk actions, rate comparison, and caching optimizations."
    ],
    tech: ["PHP", "WooCommerce", "REST APIs"], 
  },
] as const;

export const EDUCATION = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institute: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat",
    location: "Surat, India",
    period: {
      start: "2024",
      end: "2028",
    },
    grade: "CGPA: 8.57",
  },
  {
    degree: "Higher Secondary Education (CBSE)",
    institute: "L.P. Savani International School",
    location: "Surat, India",
    period: {
      start: "2022",
      end: "2024",
    },
    grade: "94.8% (XII)",
  },
  {
    degree: "Secondary Education (CBSE)",
    institute: "L.P. Savani International School",
    location: "Surat, India",
    period: {
      start: "2020",
      end: "2022",
    },
    grade: "95% (X)",
  },
] as const;
