import Image from "next/image";

export default async function FeaturedJobs() {
  return (
    <div className="featuredjobs-grid mb-6 lg:mb-0 overflow-x-auto lg:overflow-x-hidden">
      <div className="p-6 w-71.5 h-70.75 border border-[#D6DDEB]">
        <div className="flex items-center justify-between mb-4">
          <Image src={"/images/company-logo.png"} width={40} height={40} />
          <span className="border border-[#4640DE] py-1 px-3 text-[#4640DE] text-[16px]">
            Full Time
          </span>
        </div>
        <div className="flex flex-col mb-4">
          <p className="font-semibold text-[18px]">Email Marketing</p>
          <p className="text-[16px]">Revolut - Madrid, Spain</p>
        </div>
        <p className="text-[16px] mb-4">
          Revolut is looking for Email Marketing to help team ma ...
        </p>
        <div className="flex items-center gap-x-2">
          <div className="rounded-[100vw] font-semibold text-[14px] w-fit text-nowrap py-1 px-4 bg-[#EB85331A] text-[#FFB836]">
            Marketing
          </div>
        </div>
      </div>
    </div>
  );
}
