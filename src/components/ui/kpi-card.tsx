import SpotlightCard from "./spotlight-card";
import { Typography } from "./typography";
import type { LucideIcon } from "lucide-react";

interface KPICardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  className?: string;
}

export function KPICard({
  icon: Icon,
  title,
  value,
  className = "",
}: KPICardProps) {
  return (
    <SpotlightCard className={className}>
      <div className="flex flex-col gap-4">
        <Icon className="w-8 h-8 text-foreground" />
        <Typography variant="h3">{title}</Typography>
        <Typography variant="muted">{value}</Typography>
      </div>
    </SpotlightCard>
  );
}
