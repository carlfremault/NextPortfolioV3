"use client";

import Link from "next/link";
import React, { use, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="w-full border-b border-b-orange-300 p-5 text-orange-300">
      <div className="flex items-center justify-between">
        <h1 className="text-lg">Carl Fremault, web developer</h1>
        <button onClick={toggleMobileMenu} className="block md:hidden">
          <RxHamburgerMenu size={25} />
        </button>
        <ul className="row hidden space-x-10 md:flex">
          <Link href="#">home</Link>
          <Link href="#">work</Link>
          <Link href="#">stack</Link>
          <Link href="#">about</Link>
        </ul>
      </div>
      <ul
        className={`${
          mobileMenuOpen ? "my-20 max-h-96 opacity-100" : "max-h-0 opacity-0"
        } space-y-20 overflow-hidden text-center transition-all duration-500 ease-in-out md:flex`}
      >
        <Link className="block" href="#">
          home
        </Link>
        <Link className="block" href="#">
          work
        </Link>
        <Link className="block" href="#">
          stack
        </Link>
        <Link className="block" href="#">
          about
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
