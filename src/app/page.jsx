import CategoryCards from "@components/CategoryCards";
import FeaturedJobs from "@components/FeaturedJobs";
import Header from "@components/Header";
import RightArrow from "@components/icons/RightArrow";
import SearchBar from "@components/Search";
import categories from "@data/Categories";
import companies from "@data/Companies";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="bg-[#F8F8FD] flow-root">
        <div className="wrapper mt-4 lg:mt-20.5 mb-4 lg:mb-25.75">
          <h1 className="mb-5.75">
            Discover <br /> more than <br />
            <span className="text-[#26A4FF]">5000+ Jobs</span>
          </h1>
          <p className="mb-5.75 max-w-lg">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
          <SearchBar />
          <p className="text-[16px] font-medium">
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
      </section>

      <section className="wrapper py-10 lg:py-12">
        <p className="mb-8">Companies we helped to grow:</p>
        <div className="flex flex-wrap items-center gap-5 justify-between">
          {companies.map((company, i) => (
            <Image
              key={i}
              width={company.width}
              height={company.height}
              src={company.src}
            />
          ))}
        </div>
      </section>

      <section className="wrapper pb-10 lg:pt-18">
        <div className="flex justify-between items-center mb-6 lg:mb-12">
          <h2>
            Explore by <span className="text-[#26A4FF]">category</span>{" "}
          </h2>
          <Link
            href={"/"}
            className="hidden lg:flex items-center gap-x-3 text-[16px] text-[#4640DE] font-semibold"
          >
            <span>Show all jobs</span>
            <RightArrow />
          </Link>
        </div>
        <div className="category-grid mb-6 lg:mb-0">
          {categories.map((category, i) => (
            <CategoryCards
              key={i}
              title={category.title}
              icon={category.icon}
              total={category.total}
            />
          ))}
        </div>
        <Link
          href={"/"}
          className="lg:hidden flex items-center gap-x-3 text-[16px] text-[#4640DE] font-semibold"
        >
          <span>Show all jobs</span>
          <RightArrow />
        </Link>
      </section>

      <section className="bg-white bleed-wrapper">
        <div className="even-columns bevel h-160 lg:h-103.5 bg-[#4640DE] col-span-full lg:col-start-2 lg:col-end-3">
          <div className="text-center place-self-center max-w-90.5 col-start-2 col-span-1 lg:col-start-1 lg:col-span-1">
            <h2 className="text-white mb-4 lg:mb-6">
              Start posting jobs today
            </h2>
            <p className="font-medium text-[16px] text-white mb-4 lg:mb-6">
              Start posting jobs for only $10.
            </p>
            <button className="w-full py-3 px-6 text-[#4640DE] bg-white text-[16px] font-bold mb-4 lg:mb-6">
              Sign Up For Free
            </button>
          </div>
          <div className="relative self-start lg:self-end col-start-2 col-span-2 lg:col-start-2 lg:col-span-1">
            <Image
              className="lg:hidden"
              src={"/images/dashboard-company.png"}
              width={404}
              height={246}
            />
            <Image
              className="hidden lg:block"
              src={"/images/dashboard-company-lg.png"}
              width={564}
              height={346}
            />
          </div>
        </div>
      </section>

      <section className="wrapper py-10 lg:py-0 lg:pt-18">
        <div className="flex justify-between items-center mb-6 lg:mb-12">
          <h2>
            Featured <span className="text-[#26A4FF]">jobs</span>{" "}
          </h2>
          <Link
            href={"/"}
            className="hidden lg:flex items-center gap-x-3 text-[16px] text-[#4640DE] font-semibold"
          >
            <span>Show all jobs</span>
            <RightArrow />
          </Link>
        </div>
        <FeaturedJobs />
        <Link
          href={"/"}
          className="lg:hidden flex items-center gap-x-3 text-[16px] text-[#4640DE] font-semibold"
        >
          <span>Show all jobs</span>
          <RightArrow />
        </Link>
      </section>
    </main>
  );
}
