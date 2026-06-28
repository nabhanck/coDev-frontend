import { useEffect, useState } from "react";
import { SprintColumn } from "./sprint-column";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

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

export const Sprints = () => {
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
        console.log("source", source);
        const destination = location.current.dropTargets[0];

        const taskTarget = location.current.dropTargets.find(
          (target) => target.data.index !== undefined,
        );

        const columnTarget = location.current.dropTargets.find(
          (target) => target.data.columnId && target.data.index === undefined,
        );

        // if (!destination) return;
        if (!taskTarget || !columnTarget) return;

        const taskId = source?.data?.taskId as string;
        const sourceColumn = source?.data?.sourceColumn as keyof Columns;
        // const destinationColumn = destination?.data?.columnId as keyof Columns;
        const destinationColumn = columnTarget?.data?.columnId as keyof Columns;

        // if (sourceColumn === destinationColumn) return;

        if (sourceColumn === destinationColumn) {
          setColumns((prev) => {
            const source = prev.find((c) => c.id === sourceColumn);
            const destination = prev.find((c) => c.id === destinationColumn);

            if (!source || !destination) return prev;

            const task = source.tasks.find((t) => t.id === taskId);

            if (!task) return prev;

            return prev.map((column) => {
              if (column.id === sourceColumn) {
                return {
                  ...column,
                  tasks: column.tasks.filter((t) => t.id !== taskId),
                };
              }

              if (column.id === destinationColumn) {
                return {
                  ...column,
                  tasks: [...column.tasks, task],
                };
              }

              return column;
            });
          });
        }

        setColumns((prev) => {
          const source = prev.find((c) => c.id === sourceColumn);
          const destination = prev.find((c) => c.id === destinationColumn);

          if (!source || !destination) return prev;

          const task = source.tasks.find((t) => t.id === taskId);

          if (!task) return prev;

          return prev.map((column) => {
            if (column.id === sourceColumn) {
              return {
                ...column,
                tasks: column.tasks.filter((t) => t.id !== taskId),
              };
            }

            if (column.id === destinationColumn) {
              return {
                ...column,
                tasks: [...column.tasks, task],
                // tasks: [
                //   ...column.tasks.slice(0, destinationIndex),
                //   task,
                //   ...column.tasks.slice(destinationIndex),
                // ],
              };
            }

            return column;
          });
        });
      },
    });
  }, []);
  return (
    <>
      <div className="p-4">
        <div>Sprints</div>
        <div className="flex gap-10 w-full overflow-auto">
          {columns.map((column) => (
            <SprintColumn
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={column.tasks}
              topBorderColor={borderColors[column.id]}
            />
          ))}
          {/* <SprintColumn
            id="todo"
            title="To Do"
            tasks={columns?.id?.tasks}
            topBorderColor="#3b82f6"
          />
          <SprintColumn
            id="inProgress"
            title="In Progress"
            tasks={columns.tasks}
            topBorderColor="#724AE0"
          />
          <SprintColumn
            id="inReview"
            title="In Review"
            tasks={columns.tasks}
            topBorderColor="#f97316"
          />
          <SprintColumn
            id="done"
            title="Done"
            tasks={columns.tasks}
            topBorderColor="#22c55e"
          /> */}
        </div>
      </div>
    </>
  );
};
