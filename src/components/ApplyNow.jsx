"use client";

import { useState } from "react";

export default function ApplyNow({ jobId }) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(""); // "success" | "error"
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    const fullName = formData.get("full_name")?.trim();
    const email = formData.get("email")?.trim();
    const coverLetter = formData.get("cover_letter")?.trim();
    const resumeLink = formData.get("resume_link")?.trim();

    if (!fullName) {
      newErrors.full_name = "Full name is required.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!coverLetter) {
      newErrors.cover_letter = "Cover letter is required.";
    }

    if (!resumeLink) {
      newErrors.resume_link = "Resume link is required.";
    } else {
      try {
        new URL(resumeLink);
      } catch {
        newErrors.resume_link = "Enter a valid URL.";
      }
    }

    return newErrors;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    setStatus("");

    const formData = new FormData(e.currentTarget);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const payload = {
      full_name: formData.get("full_name").trim(),
      email: formData.get("email").trim(),
      cover_letter: formData.get("cover_letter").trim(),
      resume_link: formData.get("resume_link").trim(),
      job_id: jobId,
    };

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/applications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Application submission failed.");
      }

      setStatus("success");
      setMsg("Application submitted successfully.");
      setErrors({});
      e.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMsg(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 text-sm">
      <div>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          className="w-full border border-gray-300 px-4 py-3 rounded"
        />
        {errors.full_name && (
          <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 px-4 py-3 rounded"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          name="cover_letter"
          placeholder="Cover Letter"
          rows={5}
          className="w-full border border-gray-300 px-4 py-3 rounded"
        />
        {errors.cover_letter && (
          <p className="mt-1 text-sm text-red-600">{errors.cover_letter}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="resume_link"
          placeholder="Resume Link"
          className="w-full border border-gray-300 px-4 py-3 rounded"
        />
        {errors.resume_link && (
          <p className="mt-1 text-sm text-red-600">{errors.resume_link}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#4640DE] text-white font-semibold py-3 px-6 rounded disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {msg && (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {msg}
        </p>
      )}
    </form>
  );
}
