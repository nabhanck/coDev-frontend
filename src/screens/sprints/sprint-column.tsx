import { useEffect, useRef } from "react";
import { SprintTaskCard } from "./sprint-task-card";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

type Task = {
  id: string;
  ticketId: string;
  title: string;
};

type props = {
  id: string;
  title: string;
  tasks: Task[];
  topBorderColor: string;
};

export const SprintColumn = ({ id, title, tasks, topBorderColor }: props) => {
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!columnRef.current) return;

    return dropTargetForElements({
      element: columnRef.current, 

      getData() {
        return {
          columnId: id,
        };
      },
    });
  }, [id]);

  return (
    <>
      <div
        className="w-68 flex-col p-3 border border-t-3 border-gray-200 rounded-lg select-none"
        style={{ borderTopColor: topBorderColor }}
      >
        <div className="flex items-center gap-2">
          <p className="text-base font-medium">{title}</p>
          <div className="w-fit h-fit p-1.5 flex items-center justify-center bg-gray-100 rounded-full">
            <p className="text-xs">22</p>
          </div>
        </div>
        <div ref={columnRef} className="flex-col mt-3 h-[95%] bg-red-200">
          {tasks?.map((task, index) => {
            return <SprintTaskCard task={task} columnId={id} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};
