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
  | "sptech";

type TechnologyObject = {
  name: string;
  url: string;
  src: string;
};

interface TechnologyIconProps {
  name: Technology;
}

const TECHNOLOGIES: Record<Technology, TechnologyObject> = {
  react: {
    name: "React",
    url: "https://react.dev",
    src: "/technologies-icons/reactjs-icon.svg",
  },
  nextjs: {
    name: "Next.js",
    url: "https://nextjs.org",
    src: "/technologies-icons/nextjs-icon.svg",
  },
  typescript: {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    src: "/technologies-icons/typescript-icon.svg",
  },
  nodejs: {
    name: "Node.js",
    url: "https://nodejs.org",
    src: "/technologies-icons/nodejs-icon.svg",
  },
  docker: {
    name: "Docker",
    url: "https://www.docker.com",
    src: "/technologies-icons/docker-icon.svg",
  },
  n8n: {
    name: "n8n",
    url: "https://n8n.io",
    src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png",
  },
  supabase: {
    name: "Supabase",
    url: "https://supabase.com",
    src: "https://img.icons8.com/color/512/supabase.png",
  },
  postgresql: {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png",
  },
  mysql: {
    name: "MySQL",
    url: "https://www.mysql.com",
    src: "https://cdn.freebiesupply.com/logos/large/2x/mysql-6-logo-png-transparent.png",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    src: "/technologies-icons/tailwindcss-icon.svg",
  },
  sptech: {
    name: "Sptech School",
    url: "https://sptech.school",
    src: "/technologies-icons/sptech-icon.png",
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
      className="w-3 h-3 mt-0.5 rounded-xs inline-block"
    />
  );
}
