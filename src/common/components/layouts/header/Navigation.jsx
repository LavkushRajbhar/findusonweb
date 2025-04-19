/** @format */

import { listitems, menuItems } from "@/common/data/data";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Navigation = () => {
  return (
    <div>
      <nav className="w-[80%] mx-auto  text-white flex mb-2 items-center justify-evenly">
        <ul className="flex px-2 sm:px-0 gap-1 sm:gap-0 items-start justify-evenly w-full">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group w-full sm:w-auto">
              <div className="flex items-center w-full justify-between">
                <Link
                  href={item.href || "#"}
                  className="flex items-center gap-1 tracking-wider hover:text-[#00aeef] font-semibold uppercase text-xs text-[16px] py-2 sm:py-1 md:py-0 flex-grow transition-colors duration-200">
                  {item.name}
                </Link>

                {/* Submenu toggle button */}
                {item.subMenu && (
                  <button
                    className="block 
                      p-0 sm:p-2 text-white">
                    <FaChevronDown
                      size="12"
                      className="transition-transform duration-200"
                    />
                  </button>
                )}
              </div>

              {/* Submenu rendering */}
              {item.subMenu && (
                <div className="absolute hidden group-hover:block z-20 w-full sm:w-auto overflow-hidden transition-all duration-300 ease-in-out max-h-96 ">
                  <ul className="bg-white text-blue-950 shadow-lg rounded min-w-max uppercase sm:pl-0 mt-1 sm:mt-0 transform transition-transform duration-300 ease-in-out p-3">
                    {item.subMenu.map((sub, subIndex) => (
                      <li
                        key={subIndex}
                        className="transform transition-all duration-200 ease-in-out hover:translate-x-1 sm:hover:translate-x-0">
                        <Link
                          href={sub.href}
                          className="text-[10px] px-2 py-1  sm:text-[14px] sm:px-4 leading-tight font-bold tracking-wide text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-200">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}

          {/* "Hello Find Us On Web" section */}
          <li className="relative group">
            <div className="flex items-center w-full justify-between">
              <Link
                href="#"
                className="flex text-[10px] sm:text-[15px] items-center font-bold tracking-wider py-2 sm:py-1 uppercase hover:text-[#00aeef] transition-colors duration-200 flex-grow pl-2 ">
                Hello Find Us On Web
              </Link>

              {/* Submenu toggle button */}
              <button className="block sm:p-2">
                <FaChevronDown
                  size={16}
                  className="transition-transform duration-200
                  "
                />
              </button>
            </div>

            {/* Submenu for "Hello Find Us On Web" */}
            <div className="absolute hidden group-hover:block  z-20 w-full sm:w-auto overflow-hidden transition-all duration-300 ease-in-out max-h-[800px] ">
              <div className="bg-white shadow-lg rounded w-72 py-3 ">
                <img
                  src="/profile-placeholder.png"
                  alt="User Profile"
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border border-gray-300"
                />
                <h2 className="text-[15px] sm:text-[19px] font-semibold text-gray-700 mt-2 text-center ">
                  Find Us On Web Admin
                </h2>
                <p className="text-[12px]  sm:text-[15px] text-gray-500 text-center">
                  (support@findusonweb.com)
                </p>
                <p className="text-[11px] sm:text-[13px] font-semibold text-green-600 mt-1 text-center">
                  Balance Shopping Credit - ₹54.00
                </p>

                <ul className="mt-3 sm:mt-4 text-blue-900 text-[12px] sm:text-[14px] font-bold">
                  {listitems?.map((key, items) => (
                    <li
                      key={items}
                      className="cursor-pointer hover:bg-blue-950 py-1 hover:text-white text-blue-950 bg-white uppercase text-center transform transition-all duration-200 ease-in-out hover:translate-x-1 sm:hover:translate-x-0">
                      <Link href={key.href} className="block px-3 sm:px-4 py-1">
                        {key.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {/* Hamburger menu for desktop and tablet */}
          <li className="flex items-center">
            <button
              className="text-slate-400"
              aria-label="Toggle navigation menu">
              <FiX size={18} />
              <AiOutlineMenu size={22} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
