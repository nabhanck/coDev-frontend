import { TreeNode } from "./tree-node";
import type { TreeNode as TreeNodeType } from "@/types/tree-node";

type ExplorerProps = {
  tree: TreeNodeType[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function Explorer({ tree, selectedId, onSelect }: ExplorerProps) {
  return (
    <aside className="w-full overflow-y-auto">
      <div className="p-2">
        {tree.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </aside>
  );
}
