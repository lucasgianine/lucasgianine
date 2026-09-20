import { Button } from "../ui/button";
import { useLocale } from "../locale-provider";
import type { Locale } from "@/locales";

const localeOptions: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "pt", label: "PT" },
];

export function LanguageToggle() {
  const { locale, setLocale, content } = useLocale();

  return (
    <div
      className="inline-flex items-center rounded-full border bg-background p-0.5"
      role="group"
      aria-label={content.setup.languageLabel}
    >
      {localeOptions.map((option) => (
        <Button
          key={option.value}
          type="button"
          variant={locale === option.value ? "secondary" : "ghost"}
          size="sm"
          className="h-7 rounded-full px-2.5 text-xs font-medium"
          aria-pressed={locale === option.value}
          onClick={() => setLocale(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
