import Link from "next/link";
import RightArrow from "../icons/RightArrow";

export default function CategoryCards(props) {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-8 p-4 lg:flex-col lg:items-start border border-[#D6DDEB]  group hover:bg-[#4640DE] hover:text-white"
    >
      <props.icon />
      <div className="flex flex-col gap-y-0.5 lg:gap-y-3">
        <h5
          className="text-[20px] font-semibold text-current
        "
        >
          {props.title}
        </h5>
        <p className="text-[16px] flex items-center gap-x-4">
          <span>{props.total} jobs available</span>
          <RightArrow />
        </p>
      </div>
    </Link>
  );
}
