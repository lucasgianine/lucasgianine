import { cn } from "@/lib";
import { useTheme } from "../theme-provider";

interface ShinyTextProps {
  text: string | React.ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: Readonly<ShinyTextProps>) {
  const theme = useTheme();
  const textColor =
    theme.theme === "dark" ? "text-[#b5b5b5a4]" : "text-[#525252]";
  const animationDuration = `${speed}s`;

  return (
    <>
      <style>
        {`@keyframes shiny-text-shine {
            0% { background-position: 100%; }
            100% { background-position: -100%; }
          }`}
      </style>
      <div
        className={cn("bg-clip-text inline-block", textColor, className)}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          animationName: disabled ? "none" : "shiny-text-shine",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    </>
  );
}

export { ShinyText };
