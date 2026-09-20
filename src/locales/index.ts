import { en } from "./en";
import { pt } from "./pt";
import type { Locale, LocaleContent } from "./types";

export type { BioSegment, Locale, LocaleContent, TechnologyName } from "./types";

export const locales: Record<Locale, LocaleContent> = {
  en,
  pt,
};

export function getLocaleContent(locale: Locale): LocaleContent {
  return locales[locale];
}
