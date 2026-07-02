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
  AlertTriangle,
  ArrowUp,
  BadgeCheck,
  ChartNoAxesColumn,
  CodeXml,
  Flag,
  FolderOpen,
  GitBranch,
  Globe,
  ListChecks,
  MessageCircle,
  Plus,
  Split,
  Timer,
  UsersRound,
  X,
} from "lucide-react";
import { CommentsTab } from "./tabs/comments-tab";
import { TimeLogTab } from "./tabs/time-log-tab";
import { Badge } from "@/components/ui/badge";

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

const sampleModulesAndFiles = [
  {
    name: "checkout-gateway",
    icon: FolderOpen,
    bgClass: "bg-blue-50",
    textClass: "text-blue-400",
    borderClass: "border-blue-200",
  },
  {
    name: "auth-service",
    icon: FolderOpen,
    bgClass: "bg-cyan-50",
    textClass: "text-cyan-400",
    borderClass: "border-cyan-200",
  },
  {
    name: "auth.ts",
    icon: CodeXml,
    bgClass: "bg-pink-50",
    textClass: "text-pink-400",
    borderClass: "border-pink-200",
  },
  {
    name: "auth.ts",
    icon: CodeXml,
    bgClass: "bg-purple-50",
    textClass: "text-purple-400",
    borderClass: "border-purple-200",
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
        {/* <DialogContent
          className="min-w-[90%]! h-[50vw] bg-white"
          onPointerDownOutside={(e) => e.preventDefault()}
          showCloseButton={false}
        > */}
        <DialogContent
          onPointerDownOutside={(e) => e.preventDefault()}
          showCloseButton={false}
          className="bg-white min-w-[90%] h-[80vh] flex flex-col p-0 gap-0"
        >
          <div className="px-6 py-4 shrink-0 border-b border-gray-200">
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
                        <div className="w-2 h-2 bg-[#22c55e] rounded-full" />{" "}
                        Done
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
          </div>

          <div className="bg-[#FDFDFD] flex overflow-y-auto p-6 gap-10">
            <div className="w-[60%] flex flex-col gap-10">
              {/* description */}
              <div className="bg-white flex-col py-4 px-3 border border-gray-200 rounded-sm">
                <div className="flex items-center gap-1">
                  <ChartNoAxesColumn
                    strokeWidth={2.5}
                    className="w-4 h-4 rotate-90 text-gray-500"
                  />
                  <p className="text-sm font-medium text-gray-500">
                    Description
                  </p>
                </div>
                <p className="mt-3 text-gray-500 min-h-70">
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
              <div className="bg-white w-full flex flex-col gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <ListChecks
                        strokeWidth={2.5}
                        className="w-4 h-4 text-gray-500"
                      />
                      <p className="text-sm font-medium text-gray-500">
                        Sub-tasks
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* <p className="text-xs text-gray-500">
                        <span className="font-semibold text-black">2</span>/5
                      </p> */}
                      <Button
                        size="sm"
                        className="text-[#724AE0] cursor-pointer p-0!"
                      >
                        <Plus /> Add
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <Progress
                      value={40}
                      className="w-full h-2"
                      color="#3b82f6"
                    />{" "}
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-black">2</span>/5
                    </p>
                  </div>
                </div>
                <div className="w-full">
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

              <Tabs
                defaultValue="comments"
                className="flex flex-col gap-4 pb-10"
              >
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

            <div className="w-[40%] h-fit flex flex-col gap-4 pl-10 border-l border-gray-100">
              {/* Assignmnet */}
              <div className="bg-white flex flex-col gap-2 py-4 px-5 border border-gray-200 rounded-lg">
                <div className="flex gap-1">
                  <UsersRound
                    strokeWidth={2.5}
                    className="w-4 h-4 text-gray-500"
                  />
                  <p className="text-sm font-medium text-gray-500">
                    Assignment
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-500 font-normal tracking-tight">Assignee</p>
                  <div className="flex gap-2 items-center">
                    <div className="w-12 h-12 rounded-sm bg-gray-400" />
                    <div className="flex flex-col">
                      <p className="text-xs font-medium">Tobias Kramer</p>
                      <p className="text-[10px] text-gray-500">
                        Senior Backend Engineer
                      </p>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <Globe className="w-3 h-3 text-gray-500" />
                          <p className="text-[10px] text-gray-500">Berlin</p>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <p className="text-[10px] text-gray-500">UTC+2</p>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <p className="text-[10px] text-gray-500">16:42</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator
                  orientation="horizontal"
                  className="bg-gray-200 my-2"
                />

                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-500 font-normal tracking-tight">Assignor</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <div className="w-12 h-12 rounded-sm bg-gray-400" />
                      <div className="flex flex-col">
                        <p className="text-xs font-medium">Tobias Kramer</p>
                        <p className="text-[10px] text-gray-500">
                          Senior Backend Engineer
                        </p>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-1">
                            <Globe className="w-3 h-3 text-gray-500" />
                            <p className="text-[10px] text-gray-500">Berlin</p>
                          </div>
                          <div className="w-1 h-1 bg-gray-300 rounded-full" />
                          <p className="text-[10px] text-gray-500">UTC+2</p>
                          <div className="w-1 h-1 bg-gray-300 rounded-full" />
                          <p className="text-[10px] text-gray-500">16:42</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="bg-[#724ae0ce] hover:bg-[#724ae0] p-2 rounded-[10px]">
                      <MessageCircle strokeWidth={2.5} className="w-5 h-5 text-white" />
                    </div> */}
                    <Button
                      variant="outline"
                      className="rounded-md border-[#724ae0] text-[#724ae0] hover:bg-[#724ae0] hover:border-[#724ae0] hover:text-white cursor-pointer"
                    >
                      <MessageCircle strokeWidth={2} className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Pipeline and branch */}
              <div className="bg-white flex flex-col gap-5 py-4 px-5 border border-gray-200 rounded-lg">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Split
                        strokeWidth={2.5}
                        className="w-4 h-4 text-gray-500"
                      />
                      <p className="text-sm font-medium text-gray-500">
                        Pipeline & Branch
                      </p>
                    </div>
                    {/* <Badge className="bg-green-100 border-green-500 text-xs text-green-500 px-2 py-3">
                      <BadgeCheck className="w-4 h-4" />
                      CI/CD Passed
                    </Badge> */}
                  </div>
                  <div className="bg-purple-50 flex items-center gap-2 p-2.5 border border-[#724AE0]/20 rounded-lg">
                    <GitBranch className="w-4 h-4 text-[#724AE0]" />
                    <p className="text-xs text-[#724AE0] font-normal">
                      feat/oauth-refresh
                    </p>
                  </div>
                  {/* <div className="bg-gray-50 flex items-center gap-2 p-2.5 border border-gray-200 rounded-lg">
                    <GitBranch className="w-4 h-4 text-gray-500" />
                    <p className="text-xs text-gray-500 font-normal">
                      feat/oauth-refresh
                    </p>
                  </div> */}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <FolderOpen
                      strokeWidth={2.5}
                      className="w-4 h-4 text-gray-500 font-bold"
                    />
                    <p className="text-sm font-medium text-gray-500">
                      Modules & Files
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sampleModulesAndFiles?.map((item) => {
                      return (
                        <Badge
                          className={`${item.bgClass} border ${item.borderClass}`}
                        >
                          <item.icon className={`w-3 h-3 ${item.textClass}`} />
                          <p className={`${item.textClass} font-normal`}>
                            {item.name}
                          </p>
                        </Badge>
                      );
                    })}
                  </div>

                  <div className="bg-amber-50 flex items-start gap-2 p-3 mt-2 border-2 border-amber-100 rounded-lg">
                    <div>
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-amber-500 font-medium">
                        Merge Conflict Detected
                      </p>
                      <p className="text-xs font-light text-red-500">
                        Conflict in{" "}
                        <span className="font-medium text-amber-500">
                          src/middleware/rateLimit.ts
                        </span>{" "}
                        with{" "}
                        <span className="font-medium text-amber-500">
                          main.
                        </span>{" "}
                        Resolve before merging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agile properties */}
              <div className="bg-white flex flex-col gap-5 py-4 px-5 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-1">
                  <ChartNoAxesColumn
                    strokeWidth={2.5}
                    className="w-4 h-4 text-gray-500"
                  />
                  <p className="text-sm font-medium text-gray-500">
                    Agile Properties
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="px-3 py-1 border border-gray-200 rounded-lg">
                    <p className="text-gray-500">Priority</p>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-full max-w-48 p-0! border-none!">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="1">Low</SelectItem>
                        <SelectItem value="2">Medium</SelectItem>
                        <SelectItem value="3">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="px-3 py-1 border border-gray-200 rounded-lg">
                    <p className="text-gray-500">Sprint</p>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-full max-w-48 p-0! border-none!">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="1">Low</SelectItem>
                        <SelectItem value="2">Medium</SelectItem>
                        <SelectItem value="3">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="px-3 py-1 border border-gray-200 rounded-lg">
                    <p className="text-gray-500">Velocity Points</p>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-full max-w-48 p-0! border-none!">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="1">Low</SelectItem>
                        <SelectItem value="2">Medium</SelectItem>
                        <SelectItem value="3">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="px-3 py-1 border border-gray-200 rounded-lg">
                    <p className="text-gray-500">Story Points</p>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-full max-w-48 p-0! border-none!">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="1">Low</SelectItem>
                        <SelectItem value="2">Medium</SelectItem>
                        <SelectItem value="3">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="px-3 py-1 border border-gray-200 rounded-lg">
                    <p className="text-gray-500">Due Date</p>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-full max-w-48 p-0! border-none!">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="1">Low</SelectItem>
                        <SelectItem value="2">Medium</SelectItem>
                        <SelectItem value="3">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="px-3 py-1 border border-gray-200 rounded-lg">
                    <p className="text-gray-500">Type</p>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-full max-w-48 p-0! border-none!">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="1">Low</SelectItem>
                        <SelectItem value="2">Medium</SelectItem>
                        <SelectItem value="3">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Time summary */}
              <div className="bg-white flex flex-col gap-5 py-4 px-5 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-1">
                  <Timer strokeWidth={2.5} className="w-4 h-4 text-gray-500" />
                  <p className="text-sm font-medium text-gray-500">
                    Time Summary
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <p className="text-xs text-gray-500">Estimated time</p>
                    <p className="text-xs font-medium text-gray-800">8h 00m</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs text-gray-500">Log time</p>
                    <p className="text-xs font-medium text-gray-800">3h 20m</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs text-gray-500">Remaining</p>
                    <p className="text-xs font-medium text-gray-800">4h 40m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
