import { Button } from "@/components/ui/button";
import { CalendarFold, Users, Video } from "lucide-react";

const sampleMeetings = [
  {
    id: 1,
    meetingName: "Daily Stand up",
    members: "Dave, Paul, Rick, John, +3",
    time: "09:30 AM",
    duration: "30m",
    isNow: true,
  },
  {
    id: 2,
    meetingName: "Sprint Planning",
    members: "Dave, Paul, Rick, John, +3",
    time: "11:00 AM",
    duration: "60m",
    isNow: false,
  },
  {
    id: 3,
    meetingName: "Frontend sync",
    members: "Dave, Paul, Rick, John, +3",
    time: "02:30 PM",
    duration: "1h 30m",
    isNow: false,
  },
  {
    id: 4,
    meetingName: "Release Readiness Review",
    members: "Dave, Paul, Rick, John, +3",
    time: "04:00 PM",
    duration: "30m",
    isNow: false,
  },
];

export const UpcomingMeetings = () => {
  return (
    <>
      <div className="bg-white min-h-60 flex flex-col gap-5 p-4 border border-gray-200 rounded-md">
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
          {sampleMeetings?.map((meeting, index) => {
            const isLast = index === sampleMeetings.length - 1;

            return (
              <div
                key={meeting.id ?? index}
                className="flex justify-between gap-4"
              >
                <div className="flex gap-3">
                  {/* Time */}
                  <div className="min-w-15">
                    <p className="text-sm font-normal tracking-tighter">
                      {meeting.time}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {meeting.duration}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`z-10 h-2 w-2 rounded-full ${
                        meeting.isNow ? "bg-[#724AE0]" : "bg-gray-200"
                      } `}
                    />

                    {!isLast && (
                      <div
                        className={`absolute top-2 left-1/2 h-full w-px -translate-x-1/2 ${
                          meeting.isNow ? "bg-[#724AE0]" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-6">
                    <p className="text-sm font-normal tracking-tighter line-clamp-1">
                      {meeting.meetingName}
                    </p>

                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-gray-500" />
                      <p className="text-xs text-gray-500">{meeting.members}</p>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="border-[#724AE0] bg-[#F9F7FE]"
                >
                  <Video className="text-[#724AE0]" />
                  <span className="text-sm font-light tracking-tighter text-[#724AE0]">
                    Join call
                  </span>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
