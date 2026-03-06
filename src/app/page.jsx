import CategoryCards from "@components/CategoryCards";
import FeaturedJobs from "@components/FeaturedJobs";
import Header from "@components/Header";
import RightArrow from "@components/icons/RightArrow";
import LatestJobs from "@components/LatestJobs";
import FeaturedJobsSkeleton from "@components/loading/FeaturedJobsSkeleton";
import LatestJobsSkeleton from "@components/loading/LatestJobsSkeleton";
import SearchBar from "@components/Search";
import categories from "@data/Categories";
import companies from "@data/Companies";
import socials from "@data/Socials";
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
            href={"/jobs"}
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
          href={"/jobs"}
          className="lg:hidden flex items-center gap-x-3 text-[16px] text-[#4640DE] font-semibold"
        >
          <span>Show all jobs</span>
          <RightArrow />
        </Link>
      </section>

      <section className="bg-white bleed-wrapper lg:py-18">
        <div className="bleed-wrapper-even-columns bevel h-160 lg:h-103.5 bg-[#4640DE] col-span-full lg:col-start-2 lg:col-end-3">
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

      <section className="wrapper py-10 lg:py-0 lg:pb-18">
        <div className="flex justify-between items-center mb-6 lg:mb-12">
          <h2>
            Featured <span className="text-[#26A4FF]">jobs</span>{" "}
          </h2>
          <Link
            href={"/jobs"}
            className="hidden lg:flex items-center gap-x-3 text-[16px] text-[#4640DE] font-semibold"
          >
            <span>Show all jobs</span>
            <RightArrow />
          </Link>
        </div>
        <Suspense fallback={<FeaturedJobsSkeleton />}>
          <FeaturedJobs />
        </Suspense>
        <Link
          href={"/jobs"}
          className="lg:hidden flex items-center gap-x-3 text-[16px] text-[#4640DE] font-semibold"
        >
          <span>Show all jobs</span>
          <RightArrow />
        </Link>
      </section>

      <section className="flow-root one-cut-corner bg-[#F8F8FD] pt-18 lg:pt-24">
        <div className="wrapper">
          <div className="flex justify-between items-center mb-6 lg:mb-12">
            <h2>
              Latest <span className="text-[#26A4FF]">jobs open</span>{" "}
            </h2>
            <Link
              href={"/jobs"}
              className="hidden lg:flex items-center gap-x-3 text-[16px] text-[#4640DE] font-semibold"
            >
              <span>Show all jobs</span>
              <RightArrow />
            </Link>
          </div>
          <Suspense fallback={<LatestJobsSkeleton />}>
            <LatestJobs />
          </Suspense>
        </div>
      </section>

      <footer className="bg-[#202430]">
        <div className="wrapper grid lg:grid-flow-col gap-6 lg:gap-22 pt-10 lg:pt-16 mb-6 lg:mb-20">
          <div className="flex flex-col gap-y-8">
            <Link className="flex items-center gap-x-2" href={"/"}>
              <Image
                width={32}
                height={32}
                src="/images/logo.png"
                alt="Company Logo"
              />
              <span className="font-logo font-bold text-white">QuickHire</span>
            </Link>
            <p className="text-[#D6DDEB] text-[16px]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div className="grid grid-flow-col gap-2">
            <div className="flex flex-col gap-y-4.5">
              <span className="font-semibold text-[18px] text-white">
                About
              </span>
              <ul className="flex flex-col gap-y-4 text-[16px] text-[#D6DDEB]">
                <li>
                  <Link href={"/"}>Companies</Link>
                </li>
                <li>
                  <Link href={"/"}>Pricing</Link>
                </li>
                <li>
                  <Link href={"/"}>Teaming</Link>
                </li>
                <li>
                  <Link href={"/"}>Advice</Link>
                </li>
                <li>
                  <Link href={"/"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4.5">
              <span className="font-semibold text-[18px] text-white">
                Resources
              </span>
              <ul className="flex flex-col gap-y-4 text-[16px] text-[#D6DDEB]">
                <li>
                  <Link href={"/"}>Help Docs</Link>
                </li>
                <li>
                  <Link href={"/"}>Guide</Link>
                </li>
                <li>
                  <Link href={"/"}>Update</Link>
                </li>
                <li>
                  <Link href={"/"}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-y-4.5">
            <span className="font-semibold text-[18px] text-white">
              Get Job Notifications
            </span>
            <p className="text-[16px] text-[#D6DDEB]">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-wrap gap-2">
              <input
                className="py-3 px-4 bg-white placeholder:text-[#A8ADB7] placeholder:text-[16px]"
                type="email"
                placeholder="Enter email"
              />
              <button className="bg-[#4640DE] text-[16px] text-white py-3 px-6 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t wrapper flex flex-col gap-6 justify-center lg:flex-row lg:justify-between py-6">
          <p className="text-center text-[16px]">
            2021 @ QuickHire. All rights reserved.
          </p>
          <div className="flex justify-around gap-x-3 items-center">
            {socials.map((social, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex justify-center items-center"
              >
                <Image width={32} height={32} src={social.src} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
