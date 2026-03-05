import Header from "@components/Header";
import CreateJobForm from "@components/CreateJobForm";
import AdminJobTable from "@components/AdminJobTable";
import AdminStats from "@components/AdminStats";

async function getJobs() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/jobs`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch jobs");

  return res.json();
}

export default async function AdminPage() {
  const { data: jobs } = await getJobs();

  return (
    <main>
      <Header />

      <section className="wrapper py-10 space-y-10">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Manage jobs and monitor applications</p>
        </div>

        {/* Stats */}
        <AdminStats jobs={jobs} />

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 min-w-0">
            <CreateJobForm />
          </div>

          <div className="lg:col-span-8 min-w-0">
            <AdminJobTable jobs={jobs} />
          </div>
        </div>
      </section>
    </main>
  );
}
