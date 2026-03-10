import Header from "@components/ui/Header";
import JobListing from "@components/jobs/JobListing";
import JobsListingSkeleton from "@components/jobs/JobsListingSkeleton";
import SearchBar from "@components/ui/Search";
import { Suspense } from "react";

export default async function JobListingPage({ searchParams }) {
  const params = await searchParams;

  const q = params?.q || "";
  const location = params?.location || "";

  console.log("Q: ", q, "Location: ", location);

  return (
    <main>
      <Header />
      <SearchBar
        initialQ={q}
        initialLocation={location}
        wrapper={true}
        styles="mx-auto border rounded-md mt-2"
      />
      <section className="wrapper">
        <Suspense key={`${q}-${location}`} fallback={<JobsListingSkeleton />}>
          <JobListing q={q} location={location} />
        </Suspense>
      </section>
    </main>
  );
}
