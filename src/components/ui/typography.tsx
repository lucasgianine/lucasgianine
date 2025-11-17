import { cn } from "@/lib";
import { useTheme } from "../theme-provider";

interface TypographyProps {
  children: React.ReactNode;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "blockquote"
    | "inline-code"
    | "lead"
    | "large"
    | "small"
    | "muted";
}

function Typography({ children, variant }: TypographyProps) {
  const theme = useTheme();
  const textColor =
    theme.theme === "dark" ? "text-neutral-100" : "text-neutral-900";
  const mutedColor =
    theme.theme === "dark" ? "text-neutral-400" : "text-neutral-600";
  switch (variant) {
    case "h1":
      return (
        <h1
          className={cn(
            "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
            textColor
          )}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(
            "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
            textColor
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            textColor
          )}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={cn(
            "scroll-m-20 text-xl font-semibold tracking-tight",
            textColor
          )}
        >
          {children}
        </h4>
      );
    case "p":
      return (
        <p className={cn("leading-7 not-first:mt-6", textColor)}>{children}</p>
      );
    case "blockquote":
      return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", textColor)}>
          {children}
        </blockquote>
      );
    case "inline-code":
      return (
        <code
          className={cn(
            "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
            textColor
          )}
        >
          {children}
        </code>
      );
    case "lead":
      return <p className={cn("text-xl", mutedColor)}>{children}</p>;
    case "large":
      return (
        <div className={cn("text-lg font-semibold", textColor)}>{children}</div>
      );
    case "small":
      return (
        <small className={cn("text-sm leading-none font-medium", textColor)}>
          {children}
        </small>
      );
    case "muted":
      return <span className={cn("text-sm", mutedColor)}>{children}</span>;
    default:
      return (
        <p className={cn("leading-7 not-first:mt-1", textColor)}>{children}</p>
      );
  }
}

export { Typography };
