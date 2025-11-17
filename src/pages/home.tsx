import { ProfileHeader, SetupHeader } from "../components/layout";
import { Separator } from "../components/ui/separator";
import { Typography } from "../components/ui/typography";
import { Button } from "../components/ui/button";
import {
  GithubOutlined,
  LinkedinFilled,
  XOutlined,
  DockerOutlined,
} from "@ant-design/icons";
import { Coffee, Download } from "lucide-react";
import { ShinyText } from "../components/ui/shiny-text";
import { TechnologyIcon } from "../constants";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib";

export function Home() {
  const theme = useTheme();
  const technologyStyle = cn(
    "font-normal inline-flex items-center gap-1",
    theme.theme === "dark" ? "text-neutral-100" : "text-neutral-900"
  );
  return (
    <div className="px-3 py-4 md:px-6 md:py-8 max-w-[600px] mx-auto h-auto">
      <div className="flex flex-col text-start items-start justify-start w-full gap-6">
        <SetupHeader />
        <ProfileHeader />
        <div className="flex flex-col text-start items-start justify-start gap-4">
          <Typography variant="muted">
            I'm a Software Engineer degree from{" "}
            <strong className={technologyStyle}>
              <TechnologyIcon name="sptech" />
              Sptech School
            </strong>{" "}
            in Systems Analysis and Software Engineering, now leveling up in
            Artificial Intelligence. I’m focused on building technology that
            empowers people to learn, create, and work smarter.
          </Typography>

          <Typography variant="muted">
            I work mainly with{" "}
            <strong className={technologyStyle}>
              <TechnologyIcon name="typescript" />
              Typescript
            </strong>
            ,{" "}
            <strong className={technologyStyle}>
              <TechnologyIcon name="react" />
              React
            </strong>
            ,{" "}
            <strong className={technologyStyle}>
              <TechnologyIcon name="nextjs" />
              Next.js
            </strong>
            ,{" "}
            <strong className={technologyStyle}>
              <TechnologyIcon name="nodejs" />
              Node.js
            </strong>
            ,{" "}
            <strong className={technologyStyle}>
              <TechnologyIcon name="postgresql" />
              PostgreSQL
            </strong>
            ,{" "}
            <strong className={technologyStyle}>
              <TechnologyIcon name="supabase" />
              Supabase
            </strong>
            ,{" "}
            <strong className={technologyStyle}>
              <TechnologyIcon name="n8n" />
              n8n
            </strong>
            ,{" "}
            <strong className={technologyStyle}>
              <TechnologyIcon name="tailwindcss" />
              Tailwind CSS
            </strong>
            ,{" "}
            <strong className={technologyStyle}>
              <DockerOutlined
                className="w-3 h-3 mt-0.5 rounded-xs inline-block"
                style={{ color: "#1D63ED" }}
              />{" "}
              Docker
            </strong>
            , and modern cloud environments. I enjoy shipping products that are
            fast, reliable, and built with an AI-first mindset.
          </Typography>

          <Typography variant="muted">
            I design and build AI-driven platforms and autonomous agents, from
            learning copilots to WhatsApp automation pipelines and RAG-based
            assistants. My goal is simple: make AI a real collaborator, not just
            another interface.
          </Typography>
        </div>

        <Separator className="w-full" />

        <div className="flex flex-row w-full items-center justify-between gap-2">
          <div className="flex flex-row items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() =>
                window.open("https://github.com/lucasgianine", "_blank")
              }
            >
              <GithubOutlined />
            </Button>
            <Separator orientation="vertical" className="h-4" />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/lucassilvasilva/",
                  "_blank"
                )
              }
            >
              <LinkedinFilled />
            </Button>
            <Separator orientation="vertical" className="h-4" />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => window.open("https://x.com/aidevlucas", "_blank")}
            >
              <XOutlined />
            </Button>
          </div>
          <div className="flex flex-row items-center justify-end gap-2">
            <Button
              variant="ghost"
              onClick={() =>
                window.open("mailto:lucas.esilva@sptech.school", "_blank")
              }
            >
              <Coffee />
              <ShinyText
                text="Schedule a coffee"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </Button>
            <Separator orientation="vertical" className="h-4" />
            {/* <Button
              variant="ghost"
              title="Get my page data"
              size="icon"
              onClick={() => navigate("/me")}
            >
              <ArrowUpRight />
            </Button> */}
            <Button
              variant="ghost"
              title="Download my resume"
              size="icon"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/lucas-english-resume.pdf";
                link.download = "lucas-english-resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
