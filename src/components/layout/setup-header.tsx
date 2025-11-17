import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useTheme } from "../theme-provider";
import { Moon, Sun } from "lucide-react";

export function SetupHeader() {
  const [currentTime, setCurrentTime] = useState(() =>
    new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        setSystemTheme(e.matches ? "dark" : "light");
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const getCurrentTheme = () => {
    if (theme === "system") {
      return systemTheme;
    }
    return theme;
  };

  const toggleTheme = () => {
    const current = getCurrentTheme();
    setTheme(current === "light" ? "dark" : "light");
  };

  const currentTheme = getCurrentTheme();

  return (
    <div className="flex items-center justify-between w-full gap-2">
      <span className="flex items-center justify-center gap-1 text-sm text-muted-foreground tabular-nums">
        {currentTime}
      </span>

      <div className="flex items-center justify-center gap-1">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {currentTheme === "light" ? <Moon /> : <Sun />}
        </Button>
      </div>
    </div>
  );
}
