/** @format */
"use client";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Link from "next/link";
import { useState } from "react";
import { menuItems } from "./sidebarData";

// Define types for menu items

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Define the type for openSubmenus state
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSidebar = () => setIsOpen(!isOpen);


  const toggleSubmenu = (key: string) => {
    setOpenSubmenus((prev) => {
      const isAlreadyOpen = prev[key];
      // If already open, close all
      if (isAlreadyOpen) {
        return {};
      }
      // Else, open this one and close others
      return { [key]: true };
    });
  };

  return (
    <div
      className={`h-screen fixed ${
        isOpen ? "w-[275px]" : "w-[80px]"
      } bg-[#01064a] text-white transition-all duration-300 overflow-y-auto`}>
      {/* Toggle Button */}
      <div className="p-2 flex flex-col items-center">
        <button
          onClick={toggleSidebar}
          className="mb-4 flex items-center text-[12px] font-semibold py-[10px] tracking-tight fl px-4 uppercase bg-white rounded text-[#01064a]">
          {isOpen ? "Collapse Menu <<" : ">>"}
        </button>

        {/* Menu Items */}
        <ul className="w-full">
          {menuItems.map(({ key, label, icon: Icon, submenus }) => (
            <li key={key} className="relative group">
              <div className="flex items-center justify-between py-3 px-3 text-[15px] font-bold w-full hover:bg-[#00aeef]">
                <button className="flex items-center flex-grow">
                  <Icon
                    className={`transition-all ${
                      isOpen ? "w-[20px] h-[20px]" : "w-[35px] h-[35px]"
                    }`}
                  />
                  {isOpen && <span className="ml-2">{label}</span>}
                </button>

                {/* Arrow icon that appears only when sidebar is open */}
                {isOpen && (
                  <button
                    onClick={() => toggleSubmenu(key)}
                    className="text-white focus:outline-none">
                    {openSubmenus[key] ? (
                      <FaChevronUp className="w-[14px] h-[14px]" />
                    ) : (
                      <FaChevronDown className="w-[14px] h-[14px]" />
                    )}
                  </button>
                )}
              </div>

              {/* Submenus for expanded sidebar - Show when toggle is active */}
              {isOpen && openSubmenus[key] && (
                <ul className="bg-[#01064a] pl-8 border-l border-[#00aeef] ml-6">
                  {submenus.map((submenu, index) => {
                    const SubIcon = submenu.icon;
                    return (
                      <li key={index}>
                        <Link href={`/${key}/sub${index + 1}`}>
                          <span className="flex items-center px-4 py-2 text-[16px] hover:bg-[#00aeef]">
                            <SubIcon className="mr-2 w-[16px] h-[16px]" />
                            {submenu.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Submenus for collapsed sidebar - Show on hover */}
              {!isOpen && (
                <ul className="absolute left-full top-0 bg-[#01064a] w-56 text-white rounded-md shadow-lg hidden group-hover:block z-50">
                  {submenus.map((submenu, index) => {
                    const SubIcon = submenu.icon;
                    return (
                      <li key={index}>
                        <Link href={`/${key}/sub${index + 1}`}>
                          <span className="flex items-center px-4 py-2 hover:bg-[#00aeef]">
                            <SubIcon className="mr-2 w-[16px] h-[16px]" />
                            {submenu.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
