import { Megaphone } from "lucide-react";
import Announcement from "../../assets/announcement.png";
import { Badge } from "@/components/ui/badge";

export const AnnouncementsAndAlerts = () => {
  return (
    <>
      <div className="bg-[#FAF3FE] flex flex-col gap-3 border border-[#724AE0]/40 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-[#724AE0]" />
            <p className="text-sm tracking-tight text-gray-800">
              Announcements & Alerts
            </p>
          </div>
          <p className="text-xs text-[#724AE0]">view all</p>
        </div>
        <div className="flex justify-between">
          <div className="max-h-19.5 w-[80%] bg-[#FAF4FF] flex flex-col gap-2 px-4 py-3 border border-[#724AE0]/40 rounded-lg">
            <div className="flex gap-2">
              <Badge className="bg-[#F0E7FE] px-2 text-[#724AE0] text-xs tracking-tighter font-medium border-[#e7d8ff] rounded-sm">
                Announcement
              </Badge>
              <p className="text-sm font-medium tracking-tighter">
                Q2 All-Hands on June 20, 2026 at 10:00 AM IST
              </p>
            </div>
            <p className="text-gray-500 text-xs">
              Join to hear product updates, enginerering highlights, and
              roadmap.
            </p>
          </div>
          <img src={Announcement} />
        </div>
      </div>
    </>
  );
};
