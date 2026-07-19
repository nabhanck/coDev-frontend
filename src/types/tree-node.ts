export type TreeNode = {
    id: string;
    name: string;
    type: "folder" | "page";
    children?: TreeNode[];
    content?: React.ReactNode;
  };