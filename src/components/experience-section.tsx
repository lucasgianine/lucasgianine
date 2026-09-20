import { COMPANY_LOGOS } from "@/constants";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib";

export function ExperienceSection() {
  const { content } = useLocale();
  const isDark = useTheme().theme === "dark";

  const strongText = isDark ? "text-neutral-100" : "text-neutral-900";
  const mutedText = isDark ? "text-neutral-400" : "text-neutral-600";
  const faintText = isDark ? "text-neutral-500" : "text-neutral-500";
  const line = isDark ? "bg-neutral-800" : "bg-neutral-200";
  const border = isDark ? "border-neutral-800" : "border-neutral-200";

  return (
    <section className="flex w-full flex-col gap-5">
      <h2 className={cn("text-sm font-semibold tracking-tight", strongText)}>
        {content.experience.title}
      </h2>

      <ol className="flex flex-col">
        {content.experience.items.map((item, index) => {
          const isLast = index === content.experience.items.length - 1;

          return (
            <li key={item.company} className="flex gap-4">
              {/* ponytail: the logo IS the timeline node — the rail is a flex
                  column so the connector just grows to fill the row. */}
              <div className="flex flex-col items-center">
                <img
                  src={COMPANY_LOGOS[item.logo]}
                  alt={`${item.company} logo`}
                  loading="lazy"
                  className={cn(
                    "h-9 w-9 shrink-0 rounded-lg border object-cover",
                    border
                  )}
                />
                {!isLast && <span className={cn("my-2 w-px flex-1", line)} />}
              </div>

              <div className={cn("flex-1", isLast ? "pb-0" : "pb-7")}>
                <div className="flex flex-wrap items-center gap-x-2">
                  <strong className={cn("text-sm font-medium", strongText)}>
                    {item.company}
                  </strong>
                  <span className={cn("text-xs", faintText)}>
                    {item.location}
                  </span>
                </div>

                <div className="mt-2 flex flex-col gap-3">
                  {item.roles.map((role) => (
                    <div key={role.period}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 text-sm",
                            mutedText
                          )}
                        >
                          {role.current && (
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                          )}
                          {role.role}
                        </span>
                        <span
                          className={cn("text-xs tabular-nums", faintText)}
                        >
                          {role.period}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "mt-1 text-sm leading-relaxed text-pretty",
                          faintText
                        )}
                      >
                        {role.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
