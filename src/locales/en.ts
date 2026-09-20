import type { LocaleContent } from "./types";

export const en: LocaleContent = {
  documentTitle: "Lucas | AI & Software Engineer",
  profile: {
    title: "I'm Lucas",
    timeline: "Timeline",
  },
  bio: [
    [
      { kind: "text", content: "I'm an AI and software engineer, a graduate of " },
      { kind: "tech", name: "sptech", label: "SPTech" },
      { kind: "text", content: ", and I work at " },
      { kind: "tech", name: "itau", label: "Itaú Unibanco" },
      {
        kind: "text",
        content:
          ". Outside of work, I love taking an idea, putting AI at its core, and turning it into a product. I'm a founder in the making.",
      },
    ],
    [
      { kind: "text", content: "My foundation is " },
      { kind: "tech", name: "typescript", label: "TypeScript" },
      { kind: "text", content: ", with " },
      { kind: "tech", name: "react", label: "React" },
      { kind: "text", content: ", " },
      { kind: "tech", name: "nextjs", label: "Next.js" },
      { kind: "text", content: ", and " },
      { kind: "tech", name: "nodejs", label: "Node.js" },
      { kind: "text", content: ", backed by " },
      { kind: "tech", name: "postgresql", label: "PostgreSQL" },
      { kind: "text", content: ", " },
      { kind: "tech", name: "supabase", label: "Supabase" },
      { kind: "text", content: ", " },
      { kind: "tech", name: "n8n", label: "n8n" },
      { kind: "text", content: ", " },
      { kind: "tech", name: "tailwindcss", label: "Tailwind" },
      { kind: "text", content: ", and " },
      { kind: "tech", name: "docker", label: "Docker" },
      {
        kind: "text",
        content:
          ". These are the tools that take me from idea to live product with little friction.",
      },
    ],
    [
      {
        kind: "text",
        content:
          "AI is built into my entire development workflow, helping me explore, write, and iterate faster. In the products I build, it's not an add-on, it's a core part of the experience.",
      },
    ],
  ],
  experience: {
    title: "Where I've worked",
    items: [
      {
        company: "Itaú Unibanco",
        logo: "itau",
        location: "São Paulo, BR",
        roles: [
          {
            role: "AI & Platform Engineer",
            period: "Jul 2026 — Present",
            summary:
              "Building AI and platform engineering for the largest bank in Latin America.",
            current: true,
          },
        ],
      },
      {
        company: "LíderHub",
        logo: "liderhub",
        location: "Londrina, BR",
        roles: [
          {
            role: "AI Engineer",
            period: "Oct 2025 — Aug 2026",
            summary:
              "Built the multi-agent AI engine that generates client contracts, and the frontend of a CRM for law firms.",
          },
        ],
      },
      {
        company: "Tania Bulhões",
        logo: "taniaBulhoes",
        location: "São Paulo, BR",
        roles: [
          {
            role: "Junior Software Engineer",
            period: "Feb 2025 — Oct 2025",
            summary:
              "Rebuilt the back office SaaS (Next.js 13 → 15, React Query, shadcn) and automated every customer support flow with an n8n AI agent.",
          },
        ],
      },
      {
        company: "Indigo Hive",
        logo: "indigoHive",
        location: "São Paulo, BR",
        roles: [
          {
            role: "Junior Software Engineer",
            period: "Jun 2024 — Jan 2025",
            summary:
              "Led the AI side of Docta, shipped a medical copilot for WhatsApp, and cut Amplify deploy costs by ~55%.",
          },
          {
            role: "Software Engineering Intern",
            period: "Jul 2023 — Jun 2024",
            summary:
              "Took the company's first AI project from POC to production, plus web scraping, text-to-speech and content generation tools.",
          },
        ],
      },
    ],
  },
  actions: {
    scheduleCoffee: "Schedule a coffee",
    downloadResume: "Download my resume",
  },
  resume: {
    href: "/lucas-english-resume.pdf",
    filename: "lucas-english-resume.pdf",
  },
  setup: {
    toggleTheme: "Toggle theme",
    languageLabel: "Switch language",
  },
};
