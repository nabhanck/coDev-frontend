import { Explorer } from "@/components/ui/explorer";
import type { TreeNode } from "@/types/tree-node";
import { useState } from "react";

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
      <div>Git Activity</div>
      <div className="w-70">
        <Explorer
          tree={tree}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>
    </>
  );
};
