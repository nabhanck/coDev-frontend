import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Flag, X } from "lucide-react";

export const SprintDetailsDialog = ({
  openDialog,
  setOpenDialog,
  taskDetails,
}) => {
  console.log("taskDetails", taskDetails);
  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent
          className="min-w-[90%]! max-h-175 bg-white"
          onPointerDownOutside={(e) => e.preventDefault()}
          showCloseButton={false}
        >
          <DialogHeader>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-light text-blue-500">
                {taskDetails?.ticketId}
              </p>
              <X
                className="w-5 h-5 text-gray-400 hover:text-gray-600"
                onClick={() => setOpenDialog(false)}
              />
            </div>
            <div className="flex items-start justify-between">
              <DialogTitle className="w-[55%] text-lg">
                {taskDetails?.title}
              </DialogTitle>
              <div className="flex items-center gap-3">
                {/* task status select */}
                <Select defaultValue="1">
                  <SelectTrigger className="w-40 border-gray-200!">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">
                      <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                      To Do
                    </SelectItem>
                    <SelectItem value="2">
                      <div className="w-2 h-2 bg-[#724AE0] rounded-full" /> In
                      Progress
                    </SelectItem>
                    <SelectItem value="3">
                      <div className="w-2 h-2 bg-[#f97316] rounded-full" /> In
                      Review
                    </SelectItem>
                    <SelectItem value="4">
                      <div className="w-2 h-2 bg-[#22c55e] rounded-full" /> Done
                    </SelectItem>
                  </SelectContent>
                </Select>

                {/* sprint select */}
                <Select defaultValue="1">
                  <SelectTrigger className="w-36 border-gray-200!">
                    <SelectValue placeholder="Assign sprint" />
                  </SelectTrigger>
                  <SelectContent align="end" position="popper">
                    <SelectItem value="1">Sprint 14</SelectItem>
                    <SelectItem value="2">Sprint 15</SelectItem>
                    <SelectItem value="3">Sprint 16</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  type="button"
                  className="bg-red-100 text-red-400 border-red-400 hover:bg-red-500 hover:text-white p-2 rounded-sm"
                >
                  <Flag /> Flag as blocked
                </Button>
              </div>
            </div>
          </DialogHeader>
          <Separator orientation="horizontal" className="bg-gray-200" />
          <div className="flex">
            <div className="bg-red-100 w-[60%] h-52">
              {/* description */}
              <div>
                <p>Description</p>
                The current checkout API gateway has accumulated several layers
                of ad-hoc middleware that introduce latency spikes under load
                and make debugging difficult. This task replaces that stack with
                a clean, composable middleware chain backed by async JWT
                validation and a Redis-powered distributed rate limiter. Goals:
                ·Reduce p99 latency by ≥ 30% under sustained 2k req/s load
                ·Eliminate the synchronous `jwt.verify` blocking the event loop
                ·Introduce idempotency keys for all `POST /checkout` mutations
                ·Consolidate error-response shapes across all gateway endpoints
              </div>
            </div>
            <Separator orientation="vertical" className="bg-gray-200 mx-10" />
            <div className="bg-green-100 w-[40%] h-52"></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
