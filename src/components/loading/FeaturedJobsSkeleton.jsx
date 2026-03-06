export default function FeaturedJobsSkeleton() {
  return (
    <div className="featuredjobs-grid mb-6 lg:mb-0 overflow-x-auto lg:overflow-x-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="grid grid-rows-subgrid row-span-4 p-6 w-71.5 border border-[#D6DDEB]"
        >
          {/* header */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded bg-gray-200 animate-pulse"></div>
            <div className="w-20 h-6 rounded bg-gray-200 animate-pulse"></div>
          </div>

          {/* title + location */}
          <div className="flex flex-col mb-4 gap-2">
            <div className="h-5 w-40 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* description */}
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-4"></div>

          {/* category */}
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
