import type { LocaleContent } from "./types";

export const pt: LocaleContent = {
  documentTitle: "Lucas | Engenheiro de IA e Software",
  profile: {
    title: "Eu sou o Lucas",
    timeline: "Linha do tempo",
  },
  bio: [
    [
      { kind: "text", content: "Sou engenheiro de IA e de software, formado pela " },
      { kind: "tech", name: "sptech", label: "SPTech" },
      { kind: "text", content: ", e trabalho no " },
      { kind: "tech", name: "itau", label: "Itaú Unibanco" },
      {
        kind: "text",
        content:
          ". Fora do expediente, gosto de pegar uma ideia, colocar a IA no centro e transformá-la em produto. Sou um fundador em construção.",
      },
    ],
    [
      { kind: "text", content: "Minha base é " },
      { kind: "tech", name: "typescript", label: "TypeScript" },
      { kind: "text", content: ", com " },
      { kind: "tech", name: "react", label: "React" },
      { kind: "text", content: ", " },
      { kind: "tech", name: "nextjs", label: "Next.js" },
      { kind: "text", content: " e " },
      { kind: "tech", name: "nodejs", label: "Node.js" },
      { kind: "text", content: ", apoiada por " },
      { kind: "tech", name: "postgresql", label: "PostgreSQL" },
      { kind: "text", content: ", " },
      { kind: "tech", name: "supabase", label: "Supabase" },
      { kind: "text", content: ", " },
      { kind: "tech", name: "n8n", label: "n8n" },
      { kind: "text", content: ", " },
      { kind: "tech", name: "tailwindcss", label: "Tailwind" },
      { kind: "text", content: " e " },
      { kind: "tech", name: "docker", label: "Docker" },
      {
        kind: "text",
        content:
          ". É com essas ferramentas que vou da ideia ao produto no ar, sem fricção.",
      },
    ],
    [
      {
        kind: "text",
        content:
          "A IA está em todo o meu fluxo de desenvolvimento: me ajuda a explorar, escrever e iterar mais rápido. Nos produtos que crio, ela não é um extra, é parte central da experiência.",
      },
    ],
  ],
  experience: {
    title: "Onde eu trabalhei",
    items: [
      {
        company: "Itaú Unibanco",
        logo: "itau",
        location: "São Paulo, BR",
        roles: [
          {
            role: "AI & Platform Engineer",
            period: "Jul 2026 — Atual",
            summary:
              "Engenharia de IA e de plataforma no maior banco da América Latina.",
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
            period: "Out 2025 — Ago 2026",
            summary:
              "Construí a engine de multi-agentes de IA que gera os contratos dos clientes e o frontend de um CRM para escritórios de advocacia.",
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
            period: "Fev 2025 — Out 2025",
            summary:
              "Recriei o SaaS de back office (Next.js 13 → 15, React Query, shadcn) e automatizei os fluxos de suporte com um agente de IA em n8n.",
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
              "Liderei tecnicamente o uso de IA no produto Docta, criei um copiloto médico para WhatsApp e reduzi ~55% dos custos de deploy no Amplify.",
          },
          {
            role: "Software Engineering Intern",
            period: "Jul 2023 — Jun 2024",
            summary:
              "Levei o primeiro projeto de IA da empresa da POC à produção, além de ferramentas de web scraping, text-to-speech e geração de conteúdo.",
          },
        ],
      },
    ],
  },
  actions: {
    scheduleCoffee: "Marcar um café",
    downloadResume: "Baixar meu currículo",
  },
  resume: {
    href: "/lucas-english-resume.pdf",
    filename: "lucas-english-resume.pdf",
  },
  setup: {
    toggleTheme: "Alternar tema",
    languageLabel: "Alternar idioma",
  },
};
