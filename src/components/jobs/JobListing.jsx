import Link from "next/link";
import RightArrow from "@components/icons/RightArrow";

async function getJobs({ q, location }) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (location) params.set("location", location);

  const url = `${process.env.API_BASE_URL}/api/jobs?${params.toString()}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
}

export default async function JobsListing({ q, location }) {
  const { data: jobs, count } = await getJobs({ q, location });

  return (
    <>
      {count === 0 ? (
        <div className="rounded-xl border bg-white p-6 text-center">
          <p className="text-lg font-semibold">No jobs found</p>
          <p className="mt-2 text-sm text-gray-600">
            Try a different keyword or location.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {jobs.map((job) => (
            <article
              key={job._id}
              className="rounded-xl border border-[#D6DDEB] bg-white p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold">{job.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{job.company}</p>
                </div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  {job.category}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="rounded-md bg-gray-50 px-2 py-1">
                  {job.location}
                </span>
              </div>

              <Link
                href={`/jobs/${job._id}`}
                className="mt-4 text-sm font-semibold text-[#4640DE] flex gap-x-2"
              >
                View details <RightArrow />
              </Link>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
