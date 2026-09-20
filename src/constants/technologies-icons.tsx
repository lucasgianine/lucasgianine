type Technology =
  | "react"
  | "nextjs"
  | "typescript"
  | "nodejs"
  | "docker"
  | "n8n"
  | "supabase"
  | "postgresql"
  | "mysql"
  | "tailwindcss"
  | "sptech"
  | "itau";

type TechnologyObject = {
  name: string;
  url: string;
  src: string;
};

interface TechnologyIconProps {
  name: Technology;
}

// ponytail: simpleicons CDN gives every logo the same square 24x24 viewBox,
// which is what keeps them on the text baseline. Only brands it doesn't carry
// (sptech, itau) get a local file.
const simpleIcon = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const TECHNOLOGIES: Record<Technology, TechnologyObject> = {
  react: {
    name: "React",
    url: "https://react.dev",
    src: simpleIcon("react"),
  },
  nextjs: {
    name: "Next.js",
    url: "https://nextjs.org",
    src: simpleIcon("nextdotjs/000000/ffffff"),
  },
  typescript: {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    src: simpleIcon("typescript"),
  },
  nodejs: {
    name: "Node.js",
    url: "https://nodejs.org",
    src: simpleIcon("nodedotjs"),
  },
  docker: {
    name: "Docker",
    url: "https://www.docker.com",
    src: simpleIcon("docker"),
  },
  n8n: {
    name: "n8n",
    url: "https://n8n.io",
    src: simpleIcon("n8n"),
  },
  supabase: {
    name: "Supabase",
    url: "https://supabase.com",
    src: simpleIcon("supabase"),
  },
  postgresql: {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
    src: simpleIcon("postgresql"),
  },
  mysql: {
    name: "MySQL",
    url: "https://www.mysql.com",
    src: simpleIcon("mysql"),
  },
  tailwindcss: {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    src: simpleIcon("tailwindcss"),
  },
  sptech: {
    name: "Sptech School",
    url: "https://sptech.school",
    src: "/technologies-icons/sptech-icon.png",
  },
  itau: {
    name: "Itaú Unibanco",
    url: "https://www.itau.com.br",
    src: "/technologies-icons/itau-icon.svg",
  },
};

export function TechnologyIcon({ name }: TechnologyIconProps) {
  const technology = TECHNOLOGIES[name];

  if (!technology) {
    return null;
  }

  return (
    <img
      src={technology.src}
      alt={`${technology.name} logo`}
      loading="lazy"
      className="inline-block h-[1.05em] w-[1.05em] shrink-0 object-contain align-[-0.18em]"
    />
  );
}
