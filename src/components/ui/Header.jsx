"use client";

import navData from "@data/Nav";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative bg-[#F8F8FD] shadow-[0_-1px_0_0_#D6DDEB]">
      <div className="h-15 flex items-center">
        <div className="wrapper flex justify-between items-center">
          <div className="flex items-center gap-x-12">
            <Link
              className="flex items-center gap-x-2"
              href="/"
              onClick={handleCloseMenu}
            >
              <Image
                width={32}
                height={32}
                src="/images/logo.png"
                alt="Company Logo"
              />
              <span className="font-logo font-bold text-heading">
                QuickHire
              </span>
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-x-4 text-[16px] text-[#515B6F] font-medium">
                {navData.map((navItem, i) => (
                  <li
                    key={i}
                    className={
                      pathName === navItem.href
                        ? "text-[#4640DE] underline underline-offset-4"
                        : ""
                    }
                  >
                    <Link href={navItem.href}>{navItem.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={handleToggleMenu}
            className="lg:hidden w-9 h-9 rounded-full bg-white flex justify-center items-center border border-[#D6DDEB]"
          >
            <Image
              src="/images/hamburger.png"
              width={20}
              height={20}
              alt="Menu"
            />
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
      </div>

      {isOpen && (
        <MobileMenu handleCloseMenu={handleCloseMenu} pathName={pathName} />
      )}
    </header>
  );
}

export function MobileMenu({ handleCloseMenu, pathName }) {
  return (
    <div className="lg:hidden border-t border-[#D6DDEB] bg-[#F8F8FD] absolute top-full inset-x-0 z-50 ">
      <div className="wrapper py-4">
        <nav>
          <ul className="flex flex-col gap-y-4 text-[16px] text-[#515B6F] font-medium">
            {navData.map((navItem, i) => (
              <li key={i}>
                <Link
                  href={navItem.href}
                  onClick={handleCloseMenu}
                  className={`block ${
                    pathName === navItem.href
                      ? "text-[#4640DE] underline underline-offset-4"
                      : ""
                  }`}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex flex-col gap-y-3">
          <Link
            href={"/login"}
            className="w-full bg-white text-[#4640DE] text-[16px] font-bold py-3 px-6 border border-[#D6DDEB]"
          >
            Login
          </Link>
          <Link
            href={"/sign-up"}
            className="w-full bg-[#4640DE] text-white text-[16px] font-bold py-3 px-6"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
