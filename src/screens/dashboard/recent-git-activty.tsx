import { Badge } from "@/components/ui/badge";
import {
  ClipboardCheck,
  Clock,
  CodeXml,
  GitBranch,
  GitMerge,
} from "lucide-react";

const sampleGitActivity = [
  {
    gitCode: "a1b2c3d",
    gitName: "fix(auth): handle null session in refresh token",
    userName: "Dave",
    moduleName: "auth-service",
    timeAgo: "2h ago",
  },
  {
    gitCode: "PR #873",
    gitName: "fix(auth): handle null session in refresh token",
    userName: "Wei Chen",
    moduleName: "payment-service",
    timeAgo: "5h ago",
  },
  {
    gitCode: "PR #873",
    gitName: "fix(auth): handle null session in refresh token",
    userName: "Wei Chen",
    moduleName: "frontend-web",
    timeAgo: "6h ago",
  },
  {
    gitCode: "PR #873",
    gitName: "fix(auth): handle null session in refresh token",
    userName: "Wei Chen",
    moduleName: "dev-experience",
    timeAgo: "8h ago",
  },
];

export const RecentGitActivity = () => {
  return (
    <>
      <div className="bg-white min-h-60 flex flex-col gap-5 p-4 border border-gray-200 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-[#724AE0]" />
            <p className="text-base tracking-tight text-gray-800">
              Recent Git Activity
            </p>
          </div>
          <p className="text-xs text-[#724AE0] cursor-pointer">view all</p>
        </div>
        {/* List */}
        <div className="flex flex-col gap-10">
          {/* card */}
          {sampleGitActivity?.map((git) => {
            return (
              <div className="flex gap-3">
                <div className="bg-red-100 flex items-center justify-center px-2 py-3 border-red-500 rounded-lg">
                  <GitMerge className="w-4 h-4 text-red-500" />
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <p className="text-xs font-medium text-blue-500 hover:underline cursor-pointer line-clamp-1">
                        {git.gitCode}
                      </p>
                      <p className="text-sm font-medium line-clamp-1">
                        {git.gitName}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-gray-600">{git.userName}</p>
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      <p className="text-xs text-gray-600">{git.moduleName}</p>
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      <p className="text-xs text-green-500 font-medium">
                        +145 <span className="text-red-500">-22</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{git.timeAgo}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
