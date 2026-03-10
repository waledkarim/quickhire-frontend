"use client";

import { useState } from "react";

export default function CreateJobForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm(form) {
    const newErrors = {};

    const title = form.get("title")?.toString().trim();
    const company = form.get("company")?.toString().trim();
    const location = form.get("location")?.toString().trim();
    const category = form.get("category")?.toString().trim();
    const description = form.get("description")?.toString().trim();

    if (!title) newErrors.title = "Job title is required.";
    if (!company) newErrors.company = "Company name is required.";
    if (!location) newErrors.location = "Location is required.";
    if (!category) newErrors.category = "Category is required.";

    if (!description) {
      newErrors.description = "Job description is required.";
    } else if (description.length < 20) {
      newErrors.description = "Job description must be at least 20 characters.";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    setStatus("");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    const payload = {
      title: form.get("title").toString().trim(),
      company: form.get("company").toString().trim(),
      location: form.get("location").toString().trim(),
      category: form.get("category").toString().trim(),
      description: form.get("description").toString().trim(),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to create job");
      }

      setStatus("success");
      setMsg("Job created successfully");
      setErrors({});
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setMsg(err.message || "Failed to create job");
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
          <div>
            <input
              name="title"
              placeholder="Job title"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div>
            <input
              name="company"
              placeholder="Company"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">{errors.company}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <input
              name="location"
              placeholder="Location"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location}</p>
            )}
          </div>

          <div>
            <input
              name="category"
              placeholder="Category"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
            />
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category}</p>
            )}
          </div>
        </div>

        <div>
          <textarea
            name="description"
            rows={5}
            placeholder="Job description"
            className="w-full resize-y rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        <button
          disabled={loading}
          className="w-full rounded-lg bg-[#4640DE] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Job"}
        </button>

        {msg && (
          <p
            className={`text-sm font-bold text-center ${
              status === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}
      </form>
    </div>
  );
}
