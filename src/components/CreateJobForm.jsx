"use client";

import { useState } from "react";

export default function CreateJobForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const payload = {
      title: form.get("title"),
      company: form.get("company"),
      location: form.get("location"),
      category: form.get("category"),
      description: form.get("description"),
    };

    console.log("Payload: ", payload);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) throw new Error("Failed");

      setMsg("Job created successfully");
      formEl.reset();
    } catch (err) {
      console.log("Error: ", err);
      setMsg("Failed to create job");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full rounded-xl border border-[#D6DDEB] bg-white p-4 shadow-sm sm:p-6">
      <h2 className="text-base font-semibold sm:text-lg">Create New Job</h2>
      <p className="mt-1 text-sm text-gray-500">
        Add a job listing to your platform.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            name="title"
            placeholder="Job title"
            required
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
          />
          <input
            name="company"
            placeholder="Company"
            required
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            name="location"
            placeholder="Location"
            required
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
          />
          <input
            name="category"
            placeholder="Category"
            required
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
          />
        </div>

        <textarea
          name="description"
          rows={5}
          placeholder="Job description"
          required
          className="w-full resize-y rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
        />

        <button
          disabled={loading}
          className="w-full rounded-lg bg-[#4640DE] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Job"}
        </button>

        {msg && (
          <p className="text-sm text-green-600 font-bold text-center">{msg}</p>
        )}
      </form>
    </div>
  );
}
