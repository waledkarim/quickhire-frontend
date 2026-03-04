import CategoryCards from "@components/CategoryCards";
import Header from "@components/Header";
import RightArrow from "@components/icons/RightArrow";
import SearchBar from "@components/Search";
import categories from "@data/Categories";
import companies from "@data/Companies";
import Image from "next/image";
import Link from "next/link";

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
      <section className="wrapper lg:pt-18">
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
        <div className="card-grid">
          {categories.map((category, i) => (
            <CategoryCards
              key={i}
              title={category.title}
              icon={category.icon}
              total={category.total}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
