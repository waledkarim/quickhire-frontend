import Header from "@components/Header";
import SearchBar from "@components/Search";
import companies from "data/Companies";
import Image from "next/image";

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
      <section className="py-10 px-4 lg:py-12 lg:px-30.5">
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
    </main>
  );
}
