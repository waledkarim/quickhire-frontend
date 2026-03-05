import Image from "next/image";
import generateCompanyImage from "utils/randomCompanyImage";

export default async function FeaturedJobs() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/jobs`, {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("Could not fetch Jobs");
  const { data: jobs } = await res.json();

  return (
    <div className="featuredjobs-grid mb-6 lg:mb-0 overflow-x-auto lg:overflow-x-hidden">
      {jobs.slice(0, 9).map((job, i) => (
        <div key={i} className="p-6 w-71.5 border border-[#D6DDEB]">
          <div className="flex items-center justify-between mb-4">
            <Image src={generateCompanyImage()} width={40} height={40} />
            <span className="border border-[#4640DE] py-1 px-3 text-[#4640DE] text-[16px]">
              Full Time
            </span>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-semibold text-[18px]">{job.title}</p>
            <p className="text-[16px]">{job.location}</p>
          </div>
          <p className="text-[16px] mb-4">{job.description}</p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-[100vw] font-semibold text-[14px] w-fit text-nowrap py-1 px-4 bg-[#EB85331A] text-[#FFB836]">
              {job.category}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
