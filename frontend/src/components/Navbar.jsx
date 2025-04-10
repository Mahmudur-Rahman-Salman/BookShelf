import React from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div>
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <LuSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* right side */}
        <div>Nav items</div>
      </nav>
    </header>
  );
};

export default Navbar;
