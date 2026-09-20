import { ProfileHeader, SetupHeader } from "../components/layout";
import { BioContent } from "../components/bio-content";
import { ExperienceSection } from "../components/experience-section";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import { Coffee, Download } from "lucide-react";
import { ShinyText } from "../components/ui/shiny-text";
import { useLocale } from "@/components/locale-provider";

export function Home() {
  const { content } = useLocale();

  return (
    <div className="px-3 py-4 md:px-6 md:py-8 max-w-[600px] mx-auto h-auto">
      <div className="flex flex-col text-start items-start justify-start w-full gap-6">
        <SetupHeader />
        <ProfileHeader />
        <BioContent />

        <Separator className="w-full" />

        <ExperienceSection />

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
                  "_blank",
                )
              }
            >
              <LinkedinFilled />
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
                text={content.actions.scheduleCoffee}
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </Button>
            <Separator orientation="vertical" className="h-4" />
            <Button
              variant="ghost"
              title={content.actions.downloadResume}
              size="icon"
              onClick={() => {
                const link = document.createElement("a");
                link.href = content.resume.href;
                link.download = content.resume.filename;
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
