import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, Clock, CodeXml } from "lucide-react";

const sampleNewTasks = [
  {
    taskId: "AUTH-142",
    taskName: "Implement user session timeout",
    moduleName: "auth-service",
    status: "High",
    timeAgo: "2h ago",
  },
  {
    taskId: "PAY-138",
    taskName: "Add unit tests for payment retry logic",
    moduleName: "payment-service",
    status: "Medium",
    timeAgo: "5h ago",
  },
  {
    taskId: "UI-267",
    taskName: "Refactor data table component",
    moduleName: "frontend-web",
    status: "Medium",
    timeAgo: "6h ago",
  },
  {
    taskId: "DEVX-91",
    taskName: "Fix flaky test in CI pipeline",
    moduleName: "dev-experience",
    status: "Low",
    timeAgo: "8h ago",
  },
];

export const AssignedTasks = () => {
  return (
    <>
      <div className="bg-white min-h-60 flex flex-col gap-5 p-4 border border-gray-200 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-[#724AE0]" />
            <p className="text-base tracking-tight text-gray-800">
              Current Tasks
            </p>
          </div>
          <p className="text-xs text-[#724AE0]">view all</p>
        </div>
        {/* List */}
        <div className="flex flex-col gap-6">
          {/* card */}
          {sampleNewTasks?.map((task) => {
            return (
              // <div className="flex gap-3 border-b pb-2 border-gray-200">
              <div className="flex gap-3">
                <div className="w-fit h-fit bg-red-100 p-3 border-red-500 rounded-lg">
                  <CodeXml className="w-4 h-4 text-red-500" />
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex flex-col justify-between">
                    <p className="text-sm font-light line-clamp-1">
                      {task?.taskName}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-gray-600">{task?.taskId}</p>
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      <p className="text-xs text-gray-600">
                        {task?.moduleName}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {/* <div className="flex gap-1 items-center">
                      <Clock className="w-3 h-3 text-gray-600" />
                      <p className="text-xs text-gray-600 font-light">
                        {task?.timeAgo}
                      </p>
                    </div> */}
                    <Badge className="text-xs text-red-500 font-light bg-red-200">
                      {task?.status}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
