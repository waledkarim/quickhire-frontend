import Header from "@components/Header";
import JobListing from "@components/JobListing";
import SearchBar from "@components/Search";

export default async function JobListingPage() {
  return (
    <main>
      <Header />
      <SearchBar wrapper={true} styles="mx-auto border rounded-md mt-2" />
      <JobListing />
    </main>
  );
}
