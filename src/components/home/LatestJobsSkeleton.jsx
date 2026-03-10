export default function LatestJobsSkeleton() {
  return (
    <div className="latestjobs-grid mb-10 lg:mb-15">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="p-4 bg-white flex flex-col gap-6 lg:flex-row animate-pulse"
        >
          {/* Company Logo */}
          <div className="w-12 h-12 bg-gray-200 rounded"></div>

          {/* Job Info */}
          <div className="flex flex-col gap-y-2 flex-1">
            {/* Title */}
            <div className="h-5 w-48 bg-gray-200 rounded"></div>

            {/* Location */}
            <div className="h-4 w-32 bg-gray-200 rounded"></div>

            {/* Category Badge */}
            <div className="flex">
              <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
