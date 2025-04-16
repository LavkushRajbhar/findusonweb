/** @format */

// components/header/MenuItem.jsx
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const MenuItem = ({
  item,
  index,
  totalItems,
  openMenu,
  expandedSubmenu,
  isMobile,
  isTablet,
  isDesktop,
  setOpenMenu,
  toggleSubmenu,
}) => {
  return (
    <li
      className="relative group w-full sm:w-auto"
      onMouseEnter={() => (isMobile ? null : setOpenMenu(index))}
      onMouseLeave={() => (isMobile ? null : setOpenMenu(null))}>
      <div className="flex items-center w-full justify-between">
        <Link
          href={"#"}
          className={`flex items-center gap-1 tracking-wider hover:text-[#00aeef] font-semibold uppercase ${
            isTablet ? "text-xs" : isDesktop ? "text-[16px]" : "text-sm"
          } ${isTablet ? "pl-1" : "pl-2 sm:pl-3"} py-2 sm:py-1 md:py-0 flex-grow
            ${
              index > 0 && index <= totalItems - 1 && !isMobile
                ? `sm:border-l-2 md:border-l-3 sm:border-[#00aeef] ${
                    isTablet ? "px-1" : "px-2"
                  }`
                : ""
            } transition-colors duration-200`}>
          {item.name}
        </Link>

        {/* Submenu toggle button */}
        {item.subMenu && (
          <button
            className={`block ${isTablet ? "p-0" : "p-1 sm:p-2"} text-white`}
            onClick={() => toggleSubmenu(index)}>
            <FaChevronDown
              size={isTablet ? 12 : 16}
              className={`transition-transform duration-200 ${
                expandedSubmenu === index ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {/* Submenu rendering */}
      {item.subMenu && (
        <div
          className={`${
            !isMobile ? "sm:absolute sm:left-0 sm:top-full" : ""
          } z-20 w-full sm:w-auto overflow-hidden transition-all duration-300 ease-in-out ${
            (expandedSubmenu === index && isMobile) ||
            (!isMobile && openMenu === index)
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}>
          <ul
            className={`
              bg-white text-blue-950 shadow-lg rounded min-w-max
              uppercase sm:pl-0 mt-1 sm:mt-0 transform transition-transform duration-300 ease-in-out
              ${
                expandedSubmenu === index
                  ? "translate-y-0"
                  : "translate-y-2 sm:translate-y-0"
              }
            `}>
            {item.subMenu.map((sub, subIndex) => (
              <li
                key={subIndex}
                className="transform transition-all duration-200 ease-in-out hover:translate-x-1 sm:hover:translate-x-0">
                <Link
                  href={sub.href}
                  className={`block ${
                    isTablet
                      ? "text-[10px] px-2 py-1"
                      : "text-[13px] sm:text-[14px] px-3 sm:px-4 py-1"
                  } leading-tight font-bold tracking-wide text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-200`}>
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
