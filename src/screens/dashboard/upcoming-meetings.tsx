import { Button } from "@/components/ui/button";
import { CalendarFold, Users, Video } from "lucide-react";

const sampleMeetings = [
  {
    meetingName: "Daily Stand up",
    members: "Dave, Paul, Rick, John, +3",
    time: "09:30 AM",
    duration: "30m",
  },
  {
    meetingName: "Sprint Planning",
    members: "Dave, Paul, Rick, John, +3",
    time: "11:00 AM",
    duration: "60m",
  },
  {
    meetingName: "Frontend sync",
    members: "Dave, Paul, Rick, John, +3",
    time: "02:30 PM",
    duration: "1h 30m",
  },
  {
    meetingName: "Release Readiness Review",
    members: "Dave, Paul, Rick, John, +3",
    time: "04:00 PM",
    duration: "30m",
  },
];

export const UpcomingMeetings = () => {
  return (
    <>
      <div className="min-h-60 flex flex-col gap-5 p-4 border border-gray-200 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarFold className="w-5 h-5 text-[#724AE0]" />
            <p className="text-base tracking-tight text-gray-800">
              Upcoming Meetings
            </p>
          </div>
          <p className="text-xs text-[#724AE0]">View calendar</p>
        </div>
        {/* List */}
        <div className="flex flex-col gap-8">
          {/* card */}
          {sampleMeetings?.map((meeting) => {
            return (
              <div className="flex justify-between">
                {/* <div> */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-normal tracking-tighter text-nowrap">
                      {meeting.time}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {meeting.duration}
                    </p>
                  </div>

                  <div className="flex h-full mt-3">
                    <div className="w-2 h-2 rounded-full bg-[#724AE0]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-normal tracking-tighter line-clamp-1">
                      {meeting.meetingName}
                    </p>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-gray-500" />
                      <p className="text-xs text-gray-500">{meeting.members}</p>
                    </div>
                  </div>
                </div>
                {/* </div> */}
                {/* <div className="w-full flex justify-between"> */}
                <Button className="bg-[#F9F7FE] border border-[#724AE0]">
                  <Video className="text-[#724AE0]" />
                  <p className="text-sm text-[#724AE0] tracking-tighter font-light">
                    Join call
                  </p>
                </Button>
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
