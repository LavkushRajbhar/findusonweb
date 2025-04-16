/** @format */

// components/header/UserMenu.jsx
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const UserMenu = ({
  menuItemsLength,
  openMenu,
  expandedSubmenu,
  isMobile,
  isTablet,
  toggleSubmenu,
  listItems,
}) => {
  return (
    <li
      className="relative group w-full sm:w-auto"
      onMouseEnter={() => (isMobile ? null : toggleSubmenu(menuItemsLength))}
      onMouseLeave={() => (isMobile ? null : toggleSubmenu(null))}>
      <div className="flex items-center w-full justify-between">
        <Link
          href="#"
          className={`flex ${
            isTablet ? "text-[10px]" : "text-[16px] sm:text-[15px]"
          } items-center font-bold tracking-wider py-2 sm:py-1 uppercase hover:text-[#00aeef] transition-colors duration-200 flex-grow pl-2 ${
            isTablet ? "pl-1" : "sm:pl-0"
          }`}>
          Hello Find Us On Web
        </Link>

        {/* Submenu toggle button */}
        <button
          className={`block ${isTablet ? "p-0" : "p-1 sm:p-2"} text-white`}
          onClick={() => toggleSubmenu(menuItemsLength)}>
          <FaChevronDown
            size={isTablet ? 12 : 16}
            className={`transition-transform duration-200 ${
              expandedSubmenu === menuItemsLength ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Submenu for "Hello Find Us On Web" */}
      <div
        className={`${
          isMobile
            ? "block w-full" // Mobile View
            : "absolute right-0 sm:left-auto top-full w-[250px]" // Tablet and Desktop View
        } z-50 bg-white shadow-lg rounded p-2 transition-all duration-300 ease-in-out 
        ${
          (!isMobile && openMenu === menuItemsLength) ||
          (isMobile && expandedSubmenu === menuItemsLength)
            ? "opacity-100 max-h-[500px]"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}>
        <div className="bg-white shadow-lg rounded w-full py-2">
          <img
            src="/profile-placeholder.png"
            alt="User Profile"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border border-gray-300"
          />
          <h2
            className={`${
              isTablet ? "text-[15px]" : "text-[16px] sm:text-[19px]"
            } font-semibold text-gray-700 mt-2 text-center`}>
            Find Us On Web Admin
          </h2>
          <p
            className={`${
              isTablet ? "text-[12px]" : "text-[13px] sm:text-[15px]"
            } text-gray-500 text-center`}>
            (support@findusonweb.com)
          </p>
          <p
            className={`${
              isTablet ? "text-[11px]" : "text-[12px] sm:text-[13px]"
            } font-semibold text-green-600 mt-1 text-center`}>
            Balance Shopping Credit - ₹54.00
          </p>

          <ul
            className={`mt-3 sm:mt-4 text-blue-900 ${
              isTablet ? "text-[12px]" : "text-[13px] sm:text-[14px]"
            } font-bold`}>
            {listItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-blue-950 py-1 hover:text-white text-blue-950 bg-white uppercase text-center transform transition-all duration-200 ease-in-out hover:translate-x-1 sm:hover:translate-x-0">
                <Link href={item.href} className="block px-3 sm:px-4 py-1">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default UserMenu;
