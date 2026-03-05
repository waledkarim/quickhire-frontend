import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-15 sticky z-50 top-0 inset-x-0 flex items-center bg-[#F8F8FD] shadow-[0_-1px_0_0_#D6DDEB]">
      <div className="wrapper flex justify-between items-center">
        <div className="flex items-center gap-x-12">
          <Link className="flex items-center gap-x-2" href={"/"}>
            <Image
              width={32}
              height={32}
              src="/images/logo.png"
              alt="Company Logo"
            />
            <span className="font-logo font-bold text-heading">QuickHire</span>
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-4 text-[16px] text-[#515B6F] font-medium">
              <li>
                <Link href={"/jobs"}>Find jobs</Link>
              </li>
              <li>
                <Link href={"/"}>Browse Companies</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="lg:hidden w-9 h-9 rounded-full bg-[#FFFFFF] flex justify-center items-center border border-[#D6DDEB]">
          <Image src="/images/hamburger.png" width={20} height={20} />
        </button>
        <div className="hidden lg:flex items-center gap-x-8">
          <button className="bg-white text-[#4640DE] text-[16px] font-bold py-3 px-6">
            Login
          </button>
          <button className="bg-[#4640DE] text-white text-[16px] font-bold py-3 px-6">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
