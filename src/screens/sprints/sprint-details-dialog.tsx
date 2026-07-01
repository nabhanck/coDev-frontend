import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUp,
  ChartNoAxesColumn,
  Flag,
  ListChecks,
  Plus,
  X,
} from "lucide-react";
import { CommentsTab } from "./tabs/comments-tab";
import { TimeLogTab } from "./tabs/time-log-tab";

const sampleSubTasks = [
  {
    taskId: "AUTH-319",
    taskName: "Implement OAuth2 token refresh flow",
    priority: "High",
    assignee: "Tobias kramer",
    taskStatus: "In Progress",
  },
  {
    taskId: "AUTH-234",
    taskName: "Implement checkout API gateway token refresh flow",
    priority: "Medium",
    assignee: "Mathew",
    taskStatus: "To Do",
  },
  {
    taskId: "AUTH-412",
    taskName: "Integrate UI",
    priority: "Low",
    assignee: "John doe",
    taskStatus: "Done",
  },
];

const tabs = [
  {
    label: "Comments",
    value: "comments",
    content: <CommentsTab />,
  },
  {
    label: "Time Logs",
    value: "timeLogs",
    content: <TimeLogTab />,
  },
];

export const SprintDetailsDialog = ({
  openDialog,
  setOpenDialog,
  taskDetails,
}) => {
  console.log("taskDetails", taskDetails);
  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent
          className="min-w-[90%]! h-[50vw] bg-white overflow-auto"
          onPointerDownOutside={(e) => e.preventDefault()}
          showCloseButton={false}
        >
          <DialogHeader>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-light text-blue-500">
                {taskDetails?.ticketId}
              </p>
              <X
                className="w-5 h-5 text-gray-400 hover:text-gray-600"
                onClick={() => setOpenDialog(false)}
              />
            </div>
            <div className="flex items-start justify-between">
              <DialogTitle className="w-[55%] text-lg">
                {taskDetails?.title}
              </DialogTitle>
              <div className="flex items-center gap-3">
                {/* task status select */}
                <Select defaultValue="1">
                  <SelectTrigger className="w-40 border-gray-200!">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">
                      <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                      To Do
                    </SelectItem>
                    <SelectItem value="2">
                      <div className="w-2 h-2 bg-[#724AE0] rounded-full" /> In
                      Progress
                    </SelectItem>
                    <SelectItem value="3">
                      <div className="w-2 h-2 bg-[#f97316] rounded-full" /> In
                      Review
                    </SelectItem>
                    <SelectItem value="4">
                      <div className="w-2 h-2 bg-[#22c55e] rounded-full" /> Done
                    </SelectItem>
                  </SelectContent>
                </Select>

                {/* sprint select */}
                <Select defaultValue="1">
                  <SelectTrigger className="w-36 border-gray-200!">
                    <SelectValue placeholder="Assign sprint" />
                  </SelectTrigger>
                  <SelectContent align="end" position="popper">
                    <SelectItem value="1">Sprint 14</SelectItem>
                    <SelectItem value="2">Sprint 15</SelectItem>
                    <SelectItem value="3">Sprint 16</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  type="button"
                  className="bg-red-100 text-red-400 border-red-400 hover:bg-red-500 hover:text-white p-2 rounded-sm"
                >
                  <Flag /> Flag as blocked
                </Button>
              </div>
            </div>
          </DialogHeader>
          <Separator orientation="horizontal" className="bg-gray-200 my-5" />
          <div className="flex">
            <div className=" w-[60%] bg-red-100">
              {/* description */}
              <div className="flex-col p-3 border border-gray-200 rounded-md">
                <div className="flex items-center gap-1">
                  <ChartNoAxesColumn className="w-4 h-4 rotate-90 text-gray-500" />
                  <p className="text-sm font-medium text-gray-500">
                    Description
                  </p>
                </div>
                <p className="mt-3 text-gray-700">
                  The current checkout API gateway has accumulated several
                  layers of ad-hoc middleware that introduce latency spikes
                  under load and make debugging difficult. This task replaces
                  that stack with a clean, composable middleware chain backed by
                  async JWT validation and a Redis-powered distributed rate
                  limiter. Goals: ·Reduce p99 latency by ≥ 30% under sustained
                  2k req/s load ·Eliminate the synchronous `jwt.verify` blocking
                  the event loop ·Introduce idempotency keys for all `POST
                  /checkout` mutations ·Consolidate error-response shapes across
                  all gateway endpoints
                </p>
              </div>

              {/* Sub tasks */}
              <div className="w-full p-3 border border-gray-200 rounded-md mt-4">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <ListChecks className="w-4 h-4 text-gray-500" />
                      <p className="text-sm font-medium text-gray-500">
                        Sub-tasks
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-xs text-gray-500">
                        <span className="font-semibold text-black">2</span>/5
                      </p>
                      <Button
                        size="sm"
                        className="text-[#724AE0] cursor-pointer p-0!"
                      >
                        <Plus /> Add
                      </Button>
                    </div>
                  </div>
                  <Progress value={40} className="w-full h-2" color="#000" />
                </div>
                <div className="bg-fuchsia-200 w-full">
                  {sampleSubTasks?.map((task, index) => {
                    const isLast = index === sampleSubTasks?.length - 1;
                    return (
                      <div
                        className={`flex ${
                          !isLast && "border-b border-gray-200 mb-2"
                        }`}
                      >
                        <div className="w-[10%] h-10 flex items-center justify-center">
                          <p className="text-[10px] text-blue-500">
                            {task.taskId}
                          </p>
                        </div>
                        <div className="w-[45%] h-10 flex items-center justify-start pl-2">
                          <p className="text-sm line-clamp-1">
                            {task.taskName}
                          </p>
                        </div>
                        <div className="w-[10%] h-10 flex gap-1 items-center justify-start pl-1">
                          <ArrowUp className="w-3 h-3" />
                          <p className="text-xs">{task.priority}</p>
                        </div>
                        <div className="w-[20%] h-10 flex gap-2 items-center justify-start pl-2">
                          <div className="w-5 h-5 bg-gray-500 rounded-full" />
                          <p className="text-xs text-wrap">{task.assignee}</p>
                        </div>
                        <div className="w-[15%] h-10 flex gap-1 items-center justify-start">
                          <div className="w-2 h-2 bg-[#724AE0] rounded-full" />
                          <p className="text-xs">{task.taskStatus}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Tabs defaultValue="comments" className="flex flex-col gap-4 mt-8">
                <TabsList variant="line">
                  {tabs?.map((tab) => (
                    <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
                  ))}
                </TabsList>

                {tabs.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value}>
                    {tab.content}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            <Separator orientation="vertical" className="bg-gray-200 mx-10" />
            <div className="bg-green-100 w-[40%]"></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
