import { Badge } from "@/components/ui/badge";
import { Explorer } from "@/components/ui/explorer";
import { GitProgress } from "@/components/ui/git-progress";
import { Progress } from "@/components/ui/progress";
import type { TreeNode } from "@/types/tree-node";
import { RocketLaunchIcon } from "@heroicons/react/16/solid";
import {
  ArrowUp,
  Award,
  BadgeCheck,
  GitCommitHorizontal,
  GitCommitVertical,
  GitFork,
  GitPullRequest,
  ListChecks,
  Star,
  TriangleAlert,
} from "lucide-react";
import { useState } from "react";
import { FolderDetailScreen } from "./folder-detail-screen";

export const tree: TreeNode[] = [
  {
    id: "guides",
    name: "Guides",
    type: "folder",
    children: [
      {
        id: "intro",
        name: "Introduction",
        type: "page",
        content: <div></div>,
      },
      {
        id: "install",
        name: "Installation",
        type: "page",
        content: <div></div>,
      },
    ],
  },
  {
    id: "api",
    name: "api",
    type: "folder",
    children: [
      {
        id: "auth",
        name: "auth.js",
        type: "page",
        content: <div></div>,
      },
      {
        id: "users",
        name: "users.js",
        type: "page",
        content: <div></div>,
      },
    ],
  },
];



export const GitActivity = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      {/* <div className="p-4"> */}
      <div className="h-screen flex flex-col overflow-hidden">
        <div className="shrink-0 border-b border-gray-200 p-4">
          Git Activity
        </div>
        <div className="flex flex-1 min-h-0">
          <div className="w-1/5 border-r border-gray-200 overflow-y-auto">
            <Explorer
              tree={tree}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </div>
          <div className="w-4/5 flex flex-col gap-3 p-3 overflow-y-auto">
            <FolderDetailScreen />
          </div>
        </div>
      </div>
    </>
  );
};
