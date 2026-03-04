import Image from "next/image";

export default function LatestJobs() {
  return (
    <div className="latestjobs-grid">
      <div className="p-4 bg-white flex flex-col gap-6 lg:flex-row">
        <div>
          <Image width={48} height={48} src={"/images/company-logo-jobs.png"} />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-[20px] font-semibold">Social Media Assistant</p>
          <p className="text-[14px]">Nomad - Paris, France</p>
          <div className="flex">
            <div className="py-1.5 px-2.5 rounded-[100vw] font-semibold text-[14px] border border-[#FFB836] text-[#FFB836]">
              Marketing
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white flex flex-col gap-6 lg:flex-row">
        <div>
          <Image width={48} height={48} src={"/images/company-logo-jobs.png"} />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-[20px] font-semibold">Social Media Assistant</p>
          <p className="text-[14px]">Nomad - Paris, France</p>
          <div className="flex">
            <div className="py-1.5 px-2.5 rounded-[100vw] font-semibold text-[14px] border border-[#FFB836] text-[#FFB836]">
              Marketing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
