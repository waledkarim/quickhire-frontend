export default function AdminStats({ jobs }) {
  const totalJobs = jobs.length;

  const totalApplications = jobs.reduce(
    (sum, job) => sum + (job.applicationCount || 0),
    0,
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="border border-[#D6DDEB] rounded-xl p-6 bg-white shadow-sm">
        <p className="text-sm text-gray-500">Total Jobs</p>
        <h2 className="text-3xl font-bold mt-2">{totalJobs}</h2>
      </div>

      <div className="border border-[#D6DDEB] rounded-xl p-6 bg-white shadow-sm">
        <p className="text-sm text-gray-500">Total Applications</p>
        <h2 className="text-3xl font-bold mt-2">{totalApplications}</h2>
      </div>

      <div className="border border-[#D6DDEB] rounded-xl p-6 bg-white shadow-sm">
        <p className="text-sm text-gray-500">Most Popular Job</p>
        <h2 className="text-lg font-semibold mt-2">
          {jobs.sort(
            (a, b) => (b.applicationCount || 0) - (a.applicationCount || 0),
          )[0]?.title || "N/A"}
        </h2>
      </div>
    </div>
  );
}
