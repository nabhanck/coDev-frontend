import { MessageSquareQuote, ThumbsDown, ThumbsUp } from "lucide-react";

const sampleComments = [
  {
    name: "Maya Jones",
    timeAgo: "2h ago",
    comment:
      "Confirmed the rate-limiter config needs updating before we merge. Added Redis key prefixes to avoid collision.",
  },
  {
    name: "John Doe",
    timeAgo: "3h ago",
    comment:
      "Confirmed the rate-limiter config needs updating before we merge. Added Redis key prefixes to avoid collision.",
  },
  {
    name: "Tobias Kramer",
    timeAgo: "2h ago",
    comment:
      "Confirmed the rate-limiter config needs updating before we merge. Added Redis key prefixes to avoid collision.",
  },
  {
    name: "Jane Mcgill",
    timeAgo: "5h ago",
    comment:
      "Confirmed the rate-limiter config needs updating before we merge. Added Redis key prefixes to avoid collision.",
  },
];

export const CommentsTab = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        {sampleComments?.map((comment) => {
          return (
            <div className="flex gap-2 p-2 ">
              <div>
                <div className="w-10 h-10 rounded-full bg-gray-400" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs text-gray-500 font-medium">
                    {comment.name}
                  </p>
                  <p className="text-[10px] font-normal text-gray-400">
                    {comment.timeAgo}
                  </p>
                </div>
                <p className="text-xs text-gray-900">{comment.comment}</p>

                <div className="flex gap-6 mt-2">
                  <ThumbsUp className="w-4 h-4 text-gray-400" />
                  <ThumbsDown className="w-4 h-4 text-gray-400" />
                  <MessageSquareQuote className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
