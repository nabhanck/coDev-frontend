import type { TreeNode as TreeNodeType } from "@/types/tree-node";
import { useState } from "react";
import { Button } from "./button";
import {
  ChevronRight,
  FileCode,
  FileText,
  Folder,
  FolderOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TreeNodeProps = {
  node: TreeNodeType;
  level?: number;
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function TreeNode({
  node,
  level = 0,
  selectedId,
  onSelect,
}: TreeNodeProps) {
  console.log("selectedId", selectedId);
  console.log("selectedId", node);
  const isFolder = node.type === "folder";

  const [open, setOpen] = useState(true);

  if (isFolder) {
    return (
      <div>
        <Button
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-start gap-2 rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-purple-50"
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          <ChevronRight
            className={cn("h-4 w-4 transition-transform", open && "rotate-90")}
          />
          {open ? (
            <FolderOpen className="h-4 w-4 text-blue-500" />
          ) : (
            <Folder className="h-4 w-4 text-blue-500" />
          )}

          <span>{node.name}</span>
        </Button>

        {open &&
          node?.children?.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))}
      </div>
    );
  }

  return (
    <Button
      onClick={() => onSelect(node.id)}
      className={cn(
        "flex w-full items-center justify-start gap-2 rounded-md px-2 py-1 text-sm text-gray-600",
        selectedId === node.id
          ? "bg-purple-100 text-[#724AE0]"
          : "hover:bg-purple-50"
      )}
      style={{
        paddingLeft: `${level * 16 + 40}px`,
        // backgroundColor: selectedId === node.id ? "#faf5ff" : "white", // purple-100
        // color: selectedId === node.id ? "#724AE0" : "#6B7280", // purple & gray-500
      }}
    >
      <FileCode className="h-4 w-4 text-muted-foreground" />

      <p style={{}}>{node.name}</p>
    </Button>
  );
}
