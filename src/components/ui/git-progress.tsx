export function GitProgress({
  data,
  textSize,
}: {
  data: any;
  textSize?: number;
}) {
  return (
    <div className="w-full">
      <div className="flex h-1 w-full overflow-hidden rounded-full bg-gray-200">
        {/* Added lines */}
        <div
          className="bg-green-400"
          style={{
            width: `${
              (data?.addedLines / (data?.addedLines + data?.removedLines)) * 100
            }%`,
          }}
        />

        {/* Removed lines */}
        <div
          className="bg-red-500"
          style={{
            width: `${
              (data?.removedLines / (data?.addedLines + data?.removedLines)) *
              100
            }%`,
          }}
        />
      </div>

      <div
        className="mt-1 flex justify-between"
        style={{ fontSize: textSize ? textSize : 10 }}
      >
        <span className="text-green-500">+{data?.addedLines}</span>
        <span className="text-red-500">-{data?.removedLines}</span>
      </div>
    </div>
  );
}
