import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, ClockAlert, Rocket } from "lucide-react";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between my-3">
        {/* sprint select */}
        <div className="flex items-center gap-6">
          <Select defaultValue="1">
            <SelectTrigger className="bg-white w-36 text-lg justify-normal font-medium p-0! border-none!">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent align="end" position="popper">
              <SelectItem value="1">Sprint 14</SelectItem>
              <SelectItem value="2">Sprint 15</SelectItem>
              <SelectItem value="3">Sprint 16</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-1">
            <Calendar className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-500">June 15 - July 10</p>
          </div>
          <Badge className="bg-amber-100 border-amber-500 text-amber-500 py-3! rounded-sm">
            <div className="flex gap-2">
              <ClockAlert className="w-3.5 h-3.5" strokeWidth={3} />
              <p className="text-xs font-normal">4 days left</p>
            </div>
          </Badge>
        </div>
        <div>
          <Button
            variant="outline"
            className="bg-white border-[#724AE0] rounded-md cursor-pointer"
          >
            <Rocket className="w-4 h-4 text-[#724AE0]" />
            <p className="text-sm font-normal text-[#724AE0]">
              Complete Sprint Early
            </p>
          </Button>
        </div>
      </div>
    </>
  );
};
