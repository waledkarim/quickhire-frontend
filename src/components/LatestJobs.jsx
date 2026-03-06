import Image from "next/image";
import generateCompanyImage from "utils/randomCompanyImage";

export default async function LatestJobs() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/jobs`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Could not Fetch Jobs");
    const { data: jobs } = await res.json();

    return (
      <div className="latestjobs-grid mb-10 lg:mb-15">
        {jobs.slice(0, 9).map((job, i) => (
          <div key={i} className="p-4 bg-white flex flex-col gap-6 lg:flex-row">
            <div>
              <Image width={48} height={48} src={generateCompanyImage()} />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-[20px] font-semibold">{job.title}</p>
              <p className="text-[14px]">{job.location}</p>
              <div className="flex">
                <div className="py-1.5 px-2.5 rounded-[100vw] font-semibold text-[14px] border border-[#FFB836] text-[#FFB836]">
                  {job.category}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center mb-3">
        <h3 className="text-lg font-semibold text-red-700 mb-2">
          Failed to load latest jobs
        </h3>
        <p className="text-sm text-red-600">Please try again later.</p>
      </div>
    );
  }
}
