"use client";

import useWindowWidth from "@/app/_hooks/useWindowWidth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
  const pathName = usePathname();
  const width = useWindowWidth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  }, [pathName, width]);

  return (
    <nav className="w-full border-b border-b-orange-300 p-5 text-orange-300">
      <div className="flex items-center justify-between">
        <h1 className="text-lg">Carl Fremault, web developer</h1>
        <button onClick={toggleMobileMenu} className="block md:hidden">
          <RxHamburgerMenu size={25} />
        </button>
        <ul className="row hidden space-x-10 md:flex">
          <NavigationLinks />
        </ul>
      </div>
      <ul
        className={`${
          mobileMenuOpen ? "my-20 max-h-96 opacity-100" : "max-h-0 opacity-0"
        } space-y-20 overflow-hidden text-center transition-all duration-500 ease-in-out`}
      >
        <NavigationLinks />
      </ul>
    </nav>
  );
};

export default Navbar;
