import { TechnologyIcon } from "@/constants";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib";

export function BioContent() {
  const { content } = useLocale();
  const theme = useTheme();
  const isDark = theme.theme === "dark";

  return (
    <div className="flex flex-col items-start justify-start gap-4 text-start">
      {content.bio.map((paragraph, index) => (
        <p
          key={index}
          className={cn(
            "text-sm leading-relaxed text-pretty",
            isDark ? "text-neutral-400" : "text-neutral-600"
          )}
        >
          {paragraph.map((segment, segmentIndex) => {
            if (segment.kind === "text") {
              return <span key={segmentIndex}>{segment.content}</span>;
            }

            return (
              <strong
                key={segmentIndex}
                // ponytail: whitespace-nowrap keeps the logo glued to its label;
                // inline (not inline-flex) is what lets the line wrap normally.
                className={cn(
                  "inline whitespace-nowrap font-medium",
                  isDark ? "text-neutral-100" : "text-neutral-900"
                )}
              >
                <TechnologyIcon name={segment.name} />
                &nbsp;{segment.label}
              </strong>
            );
          })}
        </p>
      ))}
    </div>
  );
}
