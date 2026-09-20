import type { CompanyLogo } from "@/constants";

export type Locale = "en" | "pt";

export type TechnologyName =
  | "react"
  | "nextjs"
  | "typescript"
  | "nodejs"
  | "docker"
  | "n8n"
  | "supabase"
  | "postgresql"
  | "tailwindcss"
  | "sptech"
  | "itau";

export type BioSegment =
  | { kind: "text"; content: string }
  | { kind: "tech"; name: TechnologyName; label: string };

export type ExperienceRole = {
  role: string;
  period: string;
  summary: string;
  current?: boolean;
};

export type ExperienceItem = {
  company: string;
  logo: CompanyLogo;
  location: string;
  roles: ExperienceRole[];
};

export type LocaleContent = {
  documentTitle: string;
  profile: {
    title: string;
    timeline: string;
  };
  bio: BioSegment[][];
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  actions: {
    scheduleCoffee: string;
    downloadResume: string;
  };
  resume: {
    href: string;
    filename: string;
  };
  setup: {
    toggleTheme: string;
    languageLabel: string;
  };
};
