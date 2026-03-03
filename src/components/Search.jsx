import Image from "next/image";

export default function SearchBar() {
  return (
    <form className="p-4 bg-white flex items-center flex-wrap gap-3 w-fit mb-4">
      <label className="flex items-center gap-1">
        <Image src={"/images/search.png"} width={20} height={20} />
        <input
          placeholder="Job title or keyword"
          className="w-75 h-14.25 border-b placeholder:text-[16px]"
          type="text"
        />
      </label>
      <label className="flex items-center gap-1">
        <Image src={"/images/location.png"} width={20} height={20} />
        <select
          name="location"
          id="location"
          className="w-75 h-14.25 border-b text-[16px]"
        >
          <option value="florence">Florence, Italy</option>
          <option value="dhaka">Dhaka, Bangladesh</option>
        </select>
      </label>
      <button className="bg-[#4640DE] text-white font-bold py-3.5 px-6.75">
        Search my Job
      </button>
    </form>
  );
}
