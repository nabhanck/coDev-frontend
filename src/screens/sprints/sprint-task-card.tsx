import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GitBranch } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { SprintDetailsDialog } from "./sprint-details-dialog";

type Task = {
  id: string;
  ticketId: string;
  title: string;
};

type props = {
  task: Task;
  columnId: string;
  index: number;
};

export const SprintTaskCard = ({ task, columnId, index }: props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [openDialog, setOpenDialog] = useState(true);

  const handleOpenSprintDetailsDialog = () => {
    setOpenDialog(true);
  };

  useEffect(() => {
    if (!cardRef.current) return;

    return combine(
      draggable({
        element: cardRef.current,

        getInitialData() {
          return {
            taskId: task.id,
            sourceColumn: columnId,
            sourceIndex: index,
          };
        },
      }),

      dropTargetForElements({
        element: cardRef.current,

        getData() {
          return {
            columnId,
            index,
          };
        },
      })
    );
  }, [task, columnId, index]);

  return (
    <>
      <div
        ref={cardRef}
        className="flex flex-col gap-2 border border-gray-200 mb-5 p-3 rounded-lg cursor-pointer"
        onDoubleClick={handleOpenSprintDetailsDialog}
      >
        <div className="flex justify-between">
          <div className="w-[80%] flex-col gap-1">
            <p className="text-blue-500 text-xs cursor-pointer hover:underline">
              {task?.ticketId}
            </p>
            <p className="text-sm font-medium line-clamp-2">{task?.title}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
        </div>
        <div className="flex gap-1">
          <Badge className="text-xs bg-[#724AE0]/10 border-[#724AE0] text-[#724AE0] rounded-md">
            auth-service
          </Badge>
          <Badge className="text-xs bg-red-100 text-red-500 border-red-500">
            High
          </Badge>
        </div>
        <Separator className="w-full h-1 bg-gray-200 my-1" />
        <div className="flex items-center gap-2">
          <GitBranch className="w-3.5 h-3.5 text-gray-500" />
          <p className="text-xs text-gray-500">feat/oauth-refresh</p>
        </div>
      </div>

      <SprintDetailsDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        taskDetails={task}
      />
    </>
  );
};
