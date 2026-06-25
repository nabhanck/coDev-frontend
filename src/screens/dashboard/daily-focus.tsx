import { Goal } from "lucide-react";

export const DailyFocus = () => {
  return (
    <>
      <div className="border border-gray-200 p-4 rounded-md">
        <div className="flex gap-2 items-center mb-4">
          <Goal className="w-5 h-5 text-[#724AE0]" />
          <p className="text-sm tracking-tight text-gray-800">My Daily Focus</p>
        </div>
        <textarea className="h-19.5 w-full border border-gray-300 rounded-lg resize-none"/>
        <div className="flex justify-between mt-2">
            <p className="tracking-tighter text-[10px] text-gray-500 font-light">Stay focused. Ship impact.</p>
            <p className="tracking-tighter text-xs text-gray-500 font-light">0 /140</p>
        </div>
      </div>
    </>
  );
};
