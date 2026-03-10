import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-semibold mb-3">Page not found</h1>
      <p className="text-gray-500 mb-6">
        The page you are looking for does not exist yet.
      </p>

      <Link href="/" className="px-4 py-2 rounded bg-indigo-600 text-white">
        Back to Home
      </Link>
    </div>
  );
}
