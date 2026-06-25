import { Bell, LogOut } from "lucide-react";
import { DailyFocus } from "./daily-focus";
import { AssignedTasks } from "./assigned-tasks";
import { UpcomingMeetings } from "./upcoming-meetings";

export const Dashboard = () => {
  return (
    <>
      <div className="bg-[#FDFDFD] flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <p className="text-base font-semibold tracking-tighter">
              Good morning, John 👋
            </p>
            <p className="text-xs font-normal text-gray-500">
              Thursday, June 10, 2026
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md">
              <Bell className="w-4 h-4 text-gray-400" />
            </div>
            <div className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-md">
              <LogOut className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-red-50 w-[40%] flex flex-col gap-4">
            <DailyFocus />
            <AssignedTasks />
            <UpcomingMeetings />
          </div>
          <div className="bg-green-300 w-[60%]">Right</div>
        </div>
      </div>
    </>
  );
};
