import { Badge } from "@/components/ui/badge";
import { GitProgress } from "@/components/ui/git-progress";
import { Progress } from "@/components/ui/progress";
import { RocketLaunchIcon } from "@heroicons/react/16/solid";
import {
  ArrowUp,
  Award,
  BadgeCheck,
  GitCommitHorizontal,
  GitFork,
  GitPullRequest,
  ListChecks,
  Star,
  TriangleAlert,
} from "lucide-react";

const gitInsights = [
  {
    icon: GitCommitHorizontal,
    name: "Total  Commits",
    value: 42,
    valueChange: "18% vs last days",
  },
  {
    icon: GitFork,
    name: "Total Merges",
    value: 18,
    valueChange: "18% vs last days",
  },
  {
    icon: TriangleAlert,
    name: "Conflicts Resolved",
    value: 3,
    valueChange: "18% vs last days",
  },
  {
    icon: BadgeCheck,
    name: "CI/CD Status",
    value: "Passing",
    valueChange: "Last build 4m 12s · 12 jobs",
  },
];

const topContributors = [
  {
    userName: "Tobias Kramer Tobias Kramer Tobias Kramer",
    addedLines: 1240,
    removedLines: 380,
    totalCommits: 48,
    role: "Backend Engineer",
  },
  {
    userName: "John Marston",
    addedLines: 546,
    removedLines: 239,
    totalCommits: 24,
    role: "Backend Engineer",
  },
  {
    userName: "Jane Doe",
    addedLines: 987,
    removedLines: 543,
    totalCommits: 65,
    role: "Frontend Engineer",
  },
  {
    userName: "Sarah Joe",
    addedLines: 800,
    removedLines: 445,
    totalCommits: 87,
    role: "DevOps Engineer",
  },
  {
    userName: "Devin brooke",
    addedLines: 500,
    removedLines: 241,
    totalCommits: 12,
    role: "Cloud Engineer",
  },
];

const tasksInsight = [
  {
    name: "To Do",
    value: 8,
    color: "#3b82f6",
  },
  {
    name: "In Progress",
    value: 4,
    color: "#724AE0",
  },
  {
    name: "In Review",
    value: 6,
    color: "#f97316",
  },
  {
    name: "Done",
    value: 16,
    color: "#22c55e",
  },
  {
    name: "Blocked",
    value: 5,
    color: "#ef4444",
  },
];

const PRSamples = [
  {
    id: "PR-87",
    name: "feat: refresh token rotation",
    addedValue: 145,
    removedValue: 200,
  },
  {
    id: "PR-86",
    name: "fix: JWT expiry edge case",
    addedValue: 145,
    removedValue: 200,
  },
  {
    id: "PR-85",
    name: "refactor: extract validation refactor: extract validation",
    addedValue: 145,
    removedValue: 200,
  },
  {
    id: "PR-84",
    name: "chore: dep updates Q2",
    addedValue: 145,
    removedValue: 200,
  },
  {
    id: "PR-87",
    name: "feat: refresh token rotation",
    addedValue: 145,
    removedValue: 200,
  },
  {
    id: "PR-86",
    name: "fix: JWT expiry edge case",
    addedValue: 145,
    removedValue: 200,
  },
  {
    id: "PR-85",
    name: "refactor: extract validation",
    addedValue: 145,
    removedValue: 200,
  },
];

const activeTasks = [
  {
    id: "Auth-198",
    name: "Patch JWT expiry edge case in auth flow",
    status: "In Progress",
  },
  {
    id: "Auth-131",
    name: "Patch JWT expiry edge case in auth flow",
    status: "In Progress",
  },
  {
    id: "Auth-213",
    name: "Patch JWT expiry edge case in auth flow",
    status: "In Progress",
  },
];

const recentCommitFeed = [
  {
    sprintId: "Auth-198",
    name: "fix: patch JWT expiry edge case",
    userName: "Alex Rivera",
    timeago: "2 min ago",
    commitId: "a3f9c21",
    addedValue: 145,
    removedValue: 22,
  },
  {
    sprintId: "Auth-198",
    name: "fix: patch JWT expiry edge case",
    userName: "Alex Rivera",
    timeago: "2 min ago",
    commitId: "a3f9c21",
    addedValue: 145,
    removedValue: 22,
  },
  {
    sprintId: "Auth-198",
    name: "fix: patch JWT expiry edge case",
    userName: "Alex Rivera",
    timeago: "2 min ago",
    commitId: "a3f9c21",
    addedValue: 145,
    removedValue: 22,
  },
];

export const FolderDetailScreen = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Badge className="bg-green-100 text-xs text-green-500 border-2 border-green-500 rounded-sm px-0.75 py-0.5">
          JS
        </Badge>
        <div>
          <p className="text-xs">src / api / auth.js</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {/* Insight cards */}
        <div className="flex justify-between">
          {gitInsights?.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex w-fit flex-col gap-1 rounded-sm border border-gray-200 pl-5 pr-8 py-3"
              >
                <div className="flex items-center gap-1.5">
                  <Icon size={16} color="#724AE0" />
                  <p className="text-xs text-gray-600">{item.name}</p>
                </div>

                <p className="text-2xl font-medium leading-tight mt-2">
                  {item.value}
                </p>

                <div className="flex items-center gap-1">
                  <ArrowUp width={14} height={14} />
                  <p className="text-xs">{item.valueChange}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3">
          {/* Top Contributors Card */}
          <div className="w-[30%] flex flex-col gap-4 p-3 border border-gray-200 rounded-md">
            <div className="flex justify-between">
              <p className="text-sm text-gray-700">Top Contributors</p>
              <Award className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex flex-col gap-4">
              {topContributors?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1/6 relative">
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500 absolute -top-0.5 left-7" />
                    </div>
                    <div className="w-5/6 flex flex-col gap-1">
                      <div className="flex justify-between">
                        <p className="text-sm line-clamp-1">{item.userName}</p>
                        <div className="flex items-center gap-1">
                          <GitCommitHorizontal className="w-5 h-5 text-gray-400" />
                          <p className="text-xs text-gray-400 font-medium">
                            {item.totalCommits}
                          </p>
                        </div>
                      </div>
                      <GitProgress data={item} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Tasks Card */}
          <div className="w-[25%] flex flex-col gap-4 p-3 border border-gray-200 rounded-md">
            <div className="flex justify-between">
              <p className="text-sm text-gray-700">Tasks</p>
              <ListChecks className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-0.5">
                <p className="text-xl font-medium">56</p>
                <p className="text-sm font-normal">/80</p>
              </div>
              <div className="flex flex-col gap-1">
                <Progress
                  value={40}
                  className="w-full h-3 [&>div]:bg-green-400"
                />
                <div className="text-xs text-gray-500">
                  <p>
                    Current sprint:{" "}
                    <span className="text-gray-800">13 remaining</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-4">
                {tasksInsight?.map((item, index) => {
                  return (
                    <div key={index} className="flex justify-between">
                      <p className="text-sm text-gray-700 font-medium">
                        {item.name}
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: item.color }}
                      >
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* PR Card */}
          <div className="w-[45%] flex flex-col gap-4 p-3 border border-gray-200 rounded-md">
            <div className="flex justify-between">
              <p className="text-sm text-gray-700">Open PR Pipeline</p>
              <GitPullRequest className="w-5 h-5 text-gray-700" />
            </div>
            <p className="text-xl font-medium">5 Open</p>
            <div className="flex flex-col gap-4.5">
              {PRSamples?.map((item, index) => {
                return (
                  <div key={index} className="flex justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <p className="text-xs text-gray-500 text-nowrap">
                        {item.id}:
                      </p>
                      <p className="text-sm font-medium text-gray-800 line-clamp-1">
                        {item.name}
                      </p>
                    </div>

                    <div className="flex gap-1">
                      <p className="text-[10px] text-green-500">
                        +{item.addedValue}
                      </p>
                      <p className="text-[10px] text-red-500">
                        -{item.removedValue}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          {/* Active Sprint Tasks */}
          <div className="w-1/2 flex flex-col gap-4 p-3 border border-gray-200 rounded-md">
            <div className="flex justify-between">
              <p className="text-sm text-gray-700">Active Sprint Tasks</p>
              <RocketLaunchIcon className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex flex-col gap-5">
              {activeTasks?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-2 last:pb-0 last:border-0 border-b border-gray-200"
                  >
                    <div className="w-[85%] flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-blue-500">{item.id}</p>
                        <Badge className="border-gray-300 rounded-sm">
                          <div className="flex items-center gap-1">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "#724AE0" }}
                            />
                            <p className="text-xs text-gray-500 font-normal">
                              {item.status}
                            </p>
                          </div>
                        </Badge>
                      </div>
                      <p className="text-sm font-normal line-clamp-1">
                        {item.name}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Recent Commit Feed */}
          <div className="w-1/2 flex flex-col gap-4 p-3 border border-gray-200 rounded-md">
            <div className="flex justify-between">
              <p className="text-sm text-gray-700">Recent Commit Feed</p>
              <GitCommitHorizontal className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex flex-col gap-5">
              {recentCommitFeed?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 justify-between items-center pb-2 last:pb-0 last:border-0 border-b border-gray-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div className="w-[90%] flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-normal line-clamp-1">
                          {item.name}
                        </p>
                        <Badge className="border-gray-300 text-xs text-blue-500">
                          {item.sprintId}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <p>{item.userName}</p>
                          <div className="w-1 h-1 rounded-full bg-gray-300" />
                          <p>{item.timeago}</p>
                          <div className="w-1 h-1 rounded-full bg-gray-300" />
                          <p>{item.commitId}</p>
                        </div>
                        <div className="flex gap-1">
                          <p className="text-[10px] text-green-500">
                            +{item.addedValue}
                          </p>
                          <p className="text-[10px] text-red-500">
                            -{item.removedValue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
