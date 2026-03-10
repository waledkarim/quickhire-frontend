import Header from "@components/ui/Header";
import ApplyNowForm from "@components/jobs/ApplyNowForm";

async function getJob(jobID) {
  const res = await fetch(`${process.env.API_BASE_URL}/api/jobs/${jobID}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch job");
  return res.json();
}

export default async function JobDetailsPage({ params }) {
  const { jobID } = await params;

  const { data: job } = await getJob(jobID);

  return (
    <main>
      <Header />

      <section className="wrapper mt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Job details */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border bg-white p-5 shadow-sm lg:p-6">
              <div className="border-b pb-6">
                <h1 className="text-2xl font-semibold lg:text-3xl">
                  {job.title}
                </h1>

                <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-700">
                  <span className="rounded-full bg-gray-100 px-3 py-1">
                    {job.company}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1">
                    {job.location}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1">
                    {job.category}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">Job Description</h2>
                <p className="mt-3 whitespace-pre-line text-gray-700">
                  {job.description}
                </p>
              </div>
            </div>
          </div>

          {/* Apply section */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-6">
              <div className="rounded-2xl border bg-white p-5 shadow-sm lg:p-6">
                <h2 className="text-lg font-semibold">Apply Now</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Submit your application for this role.
                </p>

                <div className="mt-5">
                  <ApplyNowForm jobId={job._id} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
