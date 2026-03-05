"use client";

import navData from "@data/Nav";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

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
              {navData.map((navItem, i) => (
                <li
                  key={i}
                  className={`${pathName === navItem.href && "text-[#4640DE] underline underline-offset-4"}`}
                >
                  <Link href={navItem.href}>{navItem.name}</Link>
                </li>
              ))}
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
