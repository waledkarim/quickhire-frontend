"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar({
  wrapper = false,
  styles = "",
  initialQ = "",
  initialLocation = "",
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [q, setQ] = useState(initialQ);
  const [location, setLocation] = useState(initialLocation);

  // If the URL changes (back/forward), keep inputs in sync
  useEffect(() => {
    setQ(initialQ);
    setLocation(initialLocation);
  }, [initialQ, initialLocation]);

  function handleSubmit(e) {
    e.preventDefault();

    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (location) params.set("location", location);

    const target = `/jobs?${params.toString()}`;

    // Always go to /jobs from anywhere, and also update params on /jobs
    if (pathname !== "/jobs") router.push(target);
    else router.push(target); // same route, new params
  }

  return (
    <div className={`${wrapper ? "wrapper" : ""}`}>
      <form
        onSubmit={handleSubmit}
        className={`p-4 bg-white flex items-center flex-wrap gap-3 w-fit mb-4 ${styles}`}
      >
        <label className="flex items-center gap-1">
          <Image src={"/images/search.png"} width={20} height={20} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            name="q"
            placeholder="Job title or category"
            className="w-75 h-14.25 border-b text-[16px] placeholder:text-[16px] pl-2"
            type="text"
          />
        </label>
        <label className="flex items-center gap-1">
          <Image src={"/images/location.png"} width={20} height={20} />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
            id="location"
            className="w-75 h-14.25 border-b text-[16px] pl-2"
          >
            <option value="" disabled>
              Select a location
            </option>
            <option value="dhaka">Dhaka, Bangladesh</option>
            <option value="florence">Florence, Italy</option>
          </select>
        </label>
        <button className="bg-[#4640DE] text-white font-bold py-3.5 px-6.75 grow text-[16px]">
          Search my Job
        </button>
      </form>
    </div>
  );
}
