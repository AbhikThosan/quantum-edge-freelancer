"use client";
import Link from "next/link";
import Image from "next/image";
import { BiCategory } from "react-icons/bi";
import NavDropdown from "./NavDropdown";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Hamburger icon

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-[22px]">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <Link href="/">
          <div style={{ position: "relative", width: "221px", height: "58px" }}>
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <button className="flex items-center gap-[5px] text-primary text-sm font-semibold rounded-full px-[22px] py-[9px] border border-primary">
          <BiCategory className="w-[18px] h-[18px] text-primary" />
          Categories
        </button>
      </div>
      <div className="relative">
        <button
          className="lg:hidden text-white text-2xl mb-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-center gap-[28px] md:gap-6 lg:gap-8`}
        >
          <NavDropdown />
          <button className="text-primary text-sm font-semibold uppercase mb-2 md:mb-0">
            Become a Seller
          </button>
          <Link href="/login" className="text-sm uppercase mb-2 md:mb-0">
            Login
          </Link>
          <Link
            href="/register"
            className="bg-primary font-semibold px-[21px] py-[10px] rounded-full text-sm mb-2 md:mb-0"
          >
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
}
