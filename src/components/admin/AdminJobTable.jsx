"use client";

import { useRouter } from "next/navigation";

export default function AdminJobTable({ jobs }) {
  const router = useRouter();

  async function deleteJob(id) {
    if (!confirm("Delete this job?")) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  }

  return (
    <div className="w-full rounded-xl border border-[#D6DDEB] bg-white shadow-sm p-2">
      <div className="flex items-start justify-between gap-3 border-b p-4 sm:p-6">
        <div>
          <h2 className="text-base font-semibold sm:text-lg">All Jobs</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage job listings and monitor application counts.
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
          {jobs.length} jobs
        </span>
      </div>

      <div className="divide-y sm:hidden">
        {jobs.map((job) => (
          <div key={job._id} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-semibold">{job.title}</p>
                <p className="mt-1 truncate text-sm text-gray-600">
                  {job.company} • {job.location}
                </p>
              </div>

              <button
                onClick={() => deleteJob(job._id)}
                className="shrink-0 rounded-lg border px-3 py-1.5 text-sm text-red-600"
              >
                Delete
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-gray-100 px-2 py-1">
                {job.category}
              </span>
              <span className="rounded-full bg-gray-100 px-2 py-1">
                {job.applicationCount || 0} applications
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden sm:block">
        <div className="w-full overflow-x-auto">
          <table className="min-w-180 w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-600">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Company</th>
                <th className="p-3">Location</th>
                <th className="p-3">Category</th>
                <th className="p-3">Applications</th>
                <th className="p-3"></th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job) => (
                <tr key={job._id} className="border-t">
                  <td className="p-3">
                    <p className="max-w-65 truncate font-medium">{job.title}</p>
                  </td>
                  <td className="p-3">
                    <p className="max-w-45 truncate">{job.company}</p>
                  </td>
                  <td className="p-3">
                    <p className="max-w-45 truncate">{job.location}</p>
                  </td>
                  <td className="p-3">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                      {job.category}
                    </span>
                  </td>
                  <td className="p-3">{job.applicationCount || 0}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => deleteJob(job._id)}
                      className="rounded-lg border px-3 py-1.5 text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {!jobs.length && (
                <tr>
                  <td className="p-6 text-gray-600" colSpan={6}>
                    No jobs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
