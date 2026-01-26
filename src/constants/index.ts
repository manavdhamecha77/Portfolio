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

  { name: "Woo Commerce", logo: "/skills/woocommerce.svg", category: "ui" },
  { name: "Notion", logo: "/skills/notion.svg", category: "ui" },
  { name: "Figma", logo: "/skills/figma.svg", category: "ui" },
  { name: "WordPress", logo: "/skills/wordpress.svg", category: "ui" },

  { name: "Python", logo: "/skills/python.svg", category: "ml" },
  { name: "Numpy", logo: "/skills/numpy.svg", category: "ml" },
  { name: "Pandas", logo: "/skills/pandas.svg", category: "ml" },
  { name: "Matplotlib", logo: "/skills/matplotlib.svg", category: "ml" },
  { name: "Tensorflow", logo: "/skills/tensorflow.svg", category: "ml" },
  { name: "Jupyter Notebooks", logo: "/skills/jupyter.svg", category: "ml" },

  { name: "Git", logo: "/skills/git.svg", category: "tools" },
  { name: "GitHub", logo: "/skills/github.svg", category: "tools" },
  { name: "VSCode", logo: "/skills/vscode.svg", category: "tools" },
  { name: "Postman", logo: "/skills/postman.svg", category: "tools" },
  { name: "Npm", logo: "/skills/npm.svg", category: "tools" },
  { name: "Linux", logo: "/skills/linux.svg", category: "tools" },
  { name: "Windows", logo: "/skills/windows.svg", category: "tools" },

  { name: "HTML", logo: "/skills/html.svg", category: "misc" },
  { name: "CSS", logo: "/skills/css.svg", category: "misc" },
  { name: "Bash", logo: "/skills/bash.svg", category: "misc" },
  { name: "Latex", logo: "/skills/latex.svg", category: "misc" },
  { name: "C", logo: "/skills/c.svg", category: "misc" },
  { name: "C++", logo: "/skills/cpp.svg", category: "misc" },
  { name: "PHP", logo: "/skills/php.svg", category: "misc" },
] as const;



export const CERTIFICATES = [
  {
    title: "Web Wonders 3.0 Winner",
    image: "/certificates/web-wonders.png",
    link: "https://certificate.givemycertificate.com/c/943fb066-852f-45d4-b302-f4860cea273a", 
    provider: "Nexus NIT Surat",
    year: 2025,
  },
  {
    title: "Python Essentials",
    image: "/certificates/python_essentials_1_50.png",
    link: "https://www.credly.com/badges/94ef0ac6-3d2e-4d67-a1d0-91c6ebe0820d",
    provider: "Cisco Networking Academy",
    year: 2025,
  },
  {
    title: "Introduction to Cybersecurity",
    image: "/certificates/introduction_to_cybersecurity_16.png",
    link: "https://www.credly.com/badges/c89f139a-dcdc-4b90-9083-08537cdb1c2c",
    provider: "Cisco Networking Academy",
    year: 2025,
  },
] as const;


export const PROJECTS = [
  {
    title: "Incognito Chat",
    desc: "Ephemeral private self-destructive chat rooms.",
    image: "/projects/incognito-chat.png",
    live: "https://incognito-chat-iota.vercel.app/",
    repo: "https://github.com/manavdhamecha77/Incognito-Chat",
    tech: ["NextJS", "React", "TypeScript", "Tailwind CSS", "Elysia.js", "Upstash Redis", "Upstash Realtime", "Zod"],
  },
  {
    title: "Market Microstructure",
    desc: "HFT crypto analytics with AI-based market surveillance.",
    image: "/projects/market-microstructure.png",
    live: "https://trading-hub.live/",
    repo: "https://github.com/Arshad-13/genesis2025",
    tech: ["Python", "FastAPI", "C++", "AWS", "timescaledb", "Docker", "DeepLOB CNN Model", "Postgresql", "gRPC"],
  },
  {
    title: "DayFlow-HRMS",
    desc: "An enterprise HRMS platform for modern teams.",
    image: "/projects/dayflow.png",
    live: "https://day-flow-hrms.vercel.app/",
    repo: "https://github.com/aayush-decoder/DayFlow-HRMS",
    tech: ["NextJS", "TypeScript", "Tailwind CSS", "Prisma ORM","Postgresql", "JWT", "Nodemailer", "PDFkit"],
  },
  {
    title: "Craft Connect",
    desc: "AI-powered marketplace platform.",
    image: "/projects/craft-connect.png",
    live: "https://craft-connect-ruby.vercel.app/",
    repo: "https://github.com/manavdhamecha77/Craft-Connect",
    tech: ["NextJS", "TypeScript", "Tailwind CSS", "Firebase Auth","Firestore", "Gemini 2.0 Flash API"],
  },
  {
    title: "Trendora",
    desc: "Fashion, reimagined for the internet.",
    image: "/projects/trendora.png",
    live: "https://namaste-dev.vercel.app/",
    repo: "https://github.com/GAURAVSVNIT/Namaste.dev",
    tech: ["NextJS", "JavaScript", "Firebase", "Leffa Model", "Razorpay API", "Readyplayerme API", "Gemini 2.0 Flash"],
  },
  {
    title: "DineEase",
    desc: "Hotel management system built with Django.",
    image: "/projects/dine-ease.png",
    live: "https://dineease-3ky2.onrender.com/",
    repo: "https://github.com/manavdhamecha77/Hotel-Management",
    tech: ["Python", "Django", "HTML", "Tailwind CSS", "SQLite", "Render"],
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
    tech: ["PHP", "WooCommerce Plugin Development", "REST APIs"], 
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
    degree: "HSC (Class 12) - PCM",
    institute: "L.P. Savani International School",
    location: "Surat, India",
    period: {
      start: "2023",
      end: "2024",
    },
    grade: "Percentage: 94.8% (CBSE)",
  },
  {
    degree: "SSC (Class 10)",
    institute: "L.P. Savani International School",
    location: "Surat, India",
    period: {
      start: "2021",
      end: "2022",
    },
    grade: "Percentage: 95% (CBSE)",
  },
] as const;
