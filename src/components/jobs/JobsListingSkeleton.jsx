export default function JobsListingSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-xl border bg-white p-5">
          <div className="h-5 w-2/3 animate-pulse rounded bg-gray-200" />
          <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-4 w-1/3 animate-pulse rounded bg-gray-200" />
          <div className="mt-6 h-4 w-1/4 animate-pulse rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
