import { ProfileHeader, SetupHeader } from "../components/layout";
import { Typography } from "../components/ui/typography";
import { Separator } from "../components/ui/separator";
import { KPICard } from "../components/ui/kpi-card";
import {
  Calendar,
  Clock,
  Globe,
  Monitor,
  Palette,
  Languages,
  TrendingUp,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const mockData = {
  firstVisit: "15 de Janeiro, 2024",
  lastVisit: "Hoje, 14:30",
  totalTimeOnSite: "47 horas",
  currentSessionTime: "12 minutos",
  browserAndOS: "Chrome 120 • Windows 11",
  device: "Desktop",
  theme: "Dark",
  language: "pt-BR",
  timezone: "America/Sao_Paulo",
  totalVisits: 42,
};

export function GetMyPageData() {
  return (
    <div className="px-3 py-4 md:px-6 md:py-8 max-w-[600px] mx-auto h-auto">
      <div className="flex flex-col text-start items-start justify-start w-full gap-6">
        <SetupHeader />
        <ProfileHeader />

        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between w-full">
              <Typography variant="h3">Main statistics</Typography>
              <Button
                variant="ghost"
                size="icon"
                title="Copy to clipboard"
                onClick={() => {
                  toast.success("Data copied to clipboard");
                }}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <Typography variant="muted">
              Here are some of the main statistics about your visit to my page.
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <KPICard
              icon={Calendar}
              title="First visit"
              value={mockData.firstVisit ?? "N/A"}
            />
            <KPICard
              icon={TrendingUp}
              title="Total time on site"
              value={mockData.totalTimeOnSite ?? "N/A"}
            />
            <KPICard
              icon={Clock}
              title="Current session time"
              value={mockData.currentSessionTime ?? "N/A"}
            />
          </div>
        </div>

        <Separator className="w-full" />

        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between w-full">
              <Typography variant="h3">Technical information</Typography>
              <Button
                variant="ghost"
                size="icon"
                title="Copy to clipboard"
                onClick={() => {
                  toast.success("Data copied to clipboard");
                }}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <Typography variant="muted">
              Here are some of the technical information about your visit to my
              page.
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <KPICard
              icon={Globe}
              title="Browser + OS"
              value={mockData.browserAndOS ?? "N/A"}
            />
            <KPICard
              icon={Monitor}
              title="Device"
              value={mockData.device ?? "N/A"}
            />
            <KPICard
              icon={Palette}
              title="Tema"
              value={mockData.theme ?? "N/A"}
            />
            <KPICard
              icon={Languages}
              title="Language"
              value={mockData.language ?? "N/A"}
            />
            <KPICard
              icon={Clock}
              title="Timezone"
              value={mockData.timezone ?? "N/A"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
