"use client";

import { useState } from "react";

export default function ApplyNow({ jobId }) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const payload = {
      job_id: jobId,
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      resume_link: String(form.get("resume_link") || ""),
      cover_note: String(form.get("cover_note") || ""),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/applications`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) throw new Error("Request failed");

      setMsg("Application submitted successfully!");
      e.currentTarget.reset();
    } catch (err) {
      setMsg("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            name="name"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">
          Resume (Google Drive / Dropbox / Portfolio link)
        </label>
        <input
          name="resume_link"
          type="url"
          required
          placeholder="https://..."
          className="mt-2 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Cover note</label>
        <textarea
          name="cover_note"
          required
          rows={5}
          placeholder="Write a short note..."
          className="mt-2 w-full resize-none rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#4640DE] px-4 py-3 text-sm font-bold text-white disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {msg && <p className="text-sm text-gray-700">{msg}</p>}
    </form>
  );
}
