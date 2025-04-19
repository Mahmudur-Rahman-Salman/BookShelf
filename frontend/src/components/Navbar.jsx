import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart page", href: "/carts" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const currentUser = false;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="max-w-screen-2xl mx-auto px-6 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <LuSearch className="absolute inline-block left-3 inset-y-2" />

            <input
              type="text"
              placeholder="search here"
              className="bg-[#EAEAEA] w-full py-1 md:pl-10 pl-8 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img src={avatarImg} alt="" />
                </button>
                {/* show dropdowns */}
                {
                  isDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 z-40">
                      <ul className="py-2">
                        {
                          navigation.map((item) => (
                            <li key={item.name}
                            onClick={() => setIsDropdownOpen(false)} 
                            className="py-2 px-4 hover:bg-gray-200 text-sm block">
                              <Link to={item.href}>{item.name}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
              </>
            ) : (
              <Link to="/login">
                <FaRegUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-[#FFCE1A] p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
