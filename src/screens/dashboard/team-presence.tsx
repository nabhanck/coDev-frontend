import { Badge } from "@/components/ui/badge";
import { UsersIcon } from "@heroicons/react/16/solid";
import { CodeXml } from "lucide-react";

const sampleTeamStatus = [
  {
    memberName: "Lauren Kim",
    time: "09:41 AM",
    location: "San Francisco",
    status: "Online",
    work: "editing index.js",
  },
  {
    memberName: "Wei Chen",
    time: "09:41 AM",
    location: "Singapore",
    status: "In Flow State",
    work: "working on AUTH-142",
  },
  {
    memberName: "Maria Gonzales",
    time: "09:41 AM",
    location: "Madrid",
    status: "Online",
    work: "reviewing PR #873",
  },
  {
    memberName: "Eddie Jr",
    time: "09:41 AM",
    location: "London",
    status: "Busy",
    work: "in a meeting",
  },
  {
    memberName: "Trey Parker",
    time: "09:41 AM",
    location: "New York",
    status: "Away",
    work: "away",
  },
];

export const TeamPresence = () => {
  return (
    <>
      <div className="bg-white min-h-60 flex flex-col gap-5 p-4 border border-gray-200 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-5 h-5 text-[#724AE0]" />
            <p className="text-base tracking-tight text-gray-800">
              Team Presence & Flow Status
            </p>
          </div>
          <p className="text-xs text-[#724AE0]">view team</p>
        </div>
        {/* List */}
        <div className="flex flex-col gap-6">
          {/* card */}
          {sampleTeamStatus?.map((team, index) => {
            const isLast = index === sampleTeamStatus?.length - 1;
            return (
              <div
                className={`w-full h-10 flex ${
                  !isLast ? "border-b border-gray-100" : ""
                } pb-3 `}
              >
                <div className="bg-red- w-[40%] h-full flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="flex flex-col">
                    <p className="text-sm">{team.memberName}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs tracking-tighter font-light text-gray-500">
                        {team.time}
                      </p>
                      <div className="w-1 h-1 bg-gray-500 rounded-full" />
                      <p className="text-xs tracking-tight font-light text-gray-500">
                        {team.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green- w-[30%] h-full flex items-center justify-center">
                  <Badge className="bg-red-50">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <p className="text-xs font-normal text-red-500">
                      {team.status}
                    </p>
                  </Badge>
                </div>
                <div className="bg-blue- w-[30%] h-full flex gap-1 items-center justify-center">
                  <CodeXml className="w-3 h-3" />
                  <p className="text-xs font-normal">{team.work}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
