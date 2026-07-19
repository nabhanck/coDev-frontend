import { Header } from "./header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActiveSprintTab } from "./active-sprint";

export const Sprints = () => {
  const tabs = [
    {
      label: "Active Sprint",
      value: "activeSprint",
      content: <ActiveSprintTab />,
    },
    {
      label: "Backlogs",
      value: "backlog",
      content: <div></div>,
    },
  ];

  return (
    <>
      <div className="bg-[#FDFDFD] p-4">
        <Header />
        <Tabs defaultValue="activeSprint" className="flex flex-col gap-4 pb-10">
          <TabsList
            variant="line"
            className="relative border-b border-gray-200"
          >
            {tabs?.map((tab) => (
              <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};
