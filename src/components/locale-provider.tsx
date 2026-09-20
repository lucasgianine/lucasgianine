import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getLocaleContent, type Locale } from "@/locales";

type LocaleProviderProps = {
  children: ReactNode;
  defaultLocale?: Locale;
  storageKey?: string;
};

type LocaleProviderState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: ReturnType<typeof getLocaleContent>;
};

const initialState: LocaleProviderState = {
  locale: "en",
  setLocale: () => null,
  content: getLocaleContent("en"),
};

const LocaleProviderContext = createContext<LocaleProviderState>(initialState);

function readStoredLocale(
  storageKey: string,
  defaultLocale: Locale
): Locale {
  const stored = localStorage.getItem(storageKey);
  if (stored === "en" || stored === "pt") {
    return stored;
  }
  return defaultLocale;
}

export function LocaleProvider({
  children,
  defaultLocale = "en",
  storageKey = "portfolio-locale",
}: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    readStoredLocale(storageKey, defaultLocale)
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = getLocaleContent(locale).documentTitle;
  }, [locale]);

  const value: LocaleProviderState = {
    locale,
    content: getLocaleContent(locale),
    setLocale: (nextLocale: Locale) => {
      localStorage.setItem(storageKey, nextLocale);
      setLocaleState(nextLocale);
    },
  };

  return (
    <LocaleProviderContext.Provider value={value}>
      {children}
    </LocaleProviderContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleProviderContext);

  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}
