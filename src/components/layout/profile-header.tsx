import { Lock } from "lucide-react";
import { ShinyText } from "../ui/shiny-text";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { useLocale } from "../locale-provider";

export function ProfileHeader() {
  const { content } = useLocale();

  return (
    <div className="flex items-center justify-between w-full gap-2">
      <div className="flex items-center w-full h-full gap-4">
        <a
          href="https://github.com/lucasgianine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.com/lucasgianine.png"
            alt="Lucas"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </a>
        <Typography variant="h4">{content.profile.title}</Typography>
      </div>
      <div className="flex items-center justify-end w-full h-full gap-2">
        <Button variant="ghost" disabled>
          <ShinyText
            text={
              <div className="flex items-center justify-center gap-1">
                <span>{content.profile.timeline}</span>
                <Lock className="w-3 h-3" />
              </div>
            }
            speed={3}
            disabled
            className="custom-class"
          />
        </Button>
      </div>
    </div>
  );
}
