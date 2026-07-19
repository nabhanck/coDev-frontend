import { useEffect, useState } from "react";
import { SprintColumn } from "./sprint-column";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { Search, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Task = {
  id: string;
  ticketId: string;
  title: string;
};

type Columns = {
  id: string;
  title: string;
  tasks: Task[];
};

const borderColors: Record<string, string> = {
  todo: "#3b82f6",
  inProgress: "#724AE0",
  inReview: "#f97316",
  done: "#22c55e",
};

export const ActiveSprintTab = () => {
  const [columns, setColumns] = useState([
    {
      id: "todo",
      title: "To Do",
      tasks: [
        {
          id: "1",
          title: "Implement OAuth2 token refresh flow",
          ticketId: "AUTH-198",
        },
        {
          id: "3",
          title: "Implement OAuth2 token refresh flow",
          ticketId: "AUTH-198",
        },
        {
          id: "4",
          title: "Implement OAuth2 token refresh flow",
          ticketId: "AUTH-198",
        },
        {
          id: "5",
          title: "Implement OAuth2 token refresh flow",
          ticketId: "AUTH-198",
        },
        {
          id: "6",
          title: "Implement OAuth2 token refresh flow",
          ticketId: "AUTH-198",
        },
        {
          id: "7",
          title: "Implement OAuth2 token refresh flow",
          ticketId: "AUTH-198",
        },
      ],
    },
    {
      id: "inProgress",
      title: "In Progress",
      tasks: [
        {
          id: "2",
          title: "2",
          ticketId: "AUTH-198",
        },
      ],
    },
    {
      id: "inReview",
      title: "In Review",
      tasks: [],
    },
    {
      id: "done",
      title: "Done",
      tasks: [],
    },
  ]);

  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const taskTarget = location.current.dropTargets.find(
          (target) => target.data.index !== undefined
        );

        const columnTarget = location.current.dropTargets.find(
          (target) =>
            target.data.columnId !== undefined &&
            target.data.index === undefined
        );

        const taskId = source?.data?.taskId as string;
        const sourceColumn = source?.data?.sourceColumn as string;

        // Destination column: prefer the task's column if dropped on a card,
        // otherwise fall back to the column container itself.
        const destinationColumn = (taskTarget?.data?.columnId ??
          columnTarget?.data?.columnId) as string;

        if (!destinationColumn) return;

        // Index to insert at. If dropped on a card, use its index.
        // If dropped on empty column space, insert at the end.
        let destinationIndex = taskTarget?.data?.index as number | undefined;

        setColumns((prev) => {
          const sourceCol = prev.find((c) => c.id === sourceColumn);
          if (!sourceCol) return prev;

          const task = sourceCol.tasks.find((t) => t.id === taskId);
          if (!task) return prev;

          // Build the new tasks list for the source column (task removed)
          const sourceTasksWithoutMoved = sourceCol.tasks.filter(
            (t) => t.id !== taskId
          );

          return prev.map((column) => {
            // Case 1: moving within the same column
            if (
              column.id === sourceColumn &&
              sourceColumn === destinationColumn
            ) {
              const reordered = [...sourceTasksWithoutMoved];
              const insertAt =
                destinationIndex !== undefined
                  ? destinationIndex
                  : reordered.length;

              reordered.splice(insertAt, 0, task);

              return { ...column, tasks: reordered };
            }

            // Case 2: removing from source column (different column)
            if (
              column.id === sourceColumn &&
              sourceColumn !== destinationColumn
            ) {
              return { ...column, tasks: sourceTasksWithoutMoved };
            }

            // Case 3: inserting into destination column (different column)
            if (
              column.id === destinationColumn &&
              sourceColumn !== destinationColumn
            ) {
              const insertAt =
                destinationIndex !== undefined
                  ? destinationIndex
                  : column.tasks.length;

              const newTasks = [...column.tasks];
              newTasks.splice(insertAt, 0, task);

              return { ...column, tasks: newTasks };
            }

            return column;
          });
        });
      },
    });
  }, []);

  return (
    <>
      <div>
        <div className="flex gap-6 mb-6 mt-2">
          <div className="relative w-full max-w-3xs">
            <Search className="text-gray-400 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              type="search"
              placeholder="Search..."
              className="bg-white pl-10 border-gray-300 placeholder:text-gray-300 focus:border-gray-400"
            />
          </div>
          <Select defaultValue="1">
            <SelectTrigger className="bg-white min-w-36 border-gray-200!">
              <SelectValue placeholder="Assign sprint" />
            </SelectTrigger>
            <SelectContent align="end" position="popper">
              <SelectItem value="1">
                <div className="flex items-baseline gap-2">
                  <Users />
                  <p>All</p>
                </div>
              </SelectItem>
              <SelectItem value="2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-400" />
                  <p>John Doe</p>
                </div>
              </SelectItem>
              <SelectItem value="3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-400" />
                  <p>John Doe</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-10 w-full overflow-x-auto overflow-y-hidden">
          {columns.map((column) => (
            <SprintColumn
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={column.tasks}
              topBorderColor={borderColors[column.id]}
            />
          ))}
        </div>
      </div>
    </>
  );
};
