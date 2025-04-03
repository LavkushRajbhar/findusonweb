/** @format */
"use client";

import {
  FaUsers,
  FaBriefcase,
  FaIndustry,
  FaShare,
  FaUser,
  FaCalendar,
  FaTv,
  FaCaretDown,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { MdHotel } from "react-icons/md";

import Link from "next/link";
import { useState } from "react";
import { HiFilm } from "react-icons/hi";
import { Briefcase, ChevronDown } from "lucide-react";

const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: FaUsers,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "planner",
    label: "My Planner",
    icon: GrTasks,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "business",
    label: "My Allocated Business",
    icon: FaBriefcase,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "community",
    label: "Community Support Area",
    icon: FaIndustry,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "marketing",
    label: "Marketing Hub",
    icon: MdHotel,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "contacts",
    label: "My Contacts",
    icon: FaShare,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "incentives",
    label: "Incentives & Commission",
    icon: HiFilm,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "profile",
    label: "Profile",
    icon: FaUser,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "meeting",
    label: "Meeting & Events",
    icon: FaCalendar,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "advertising",
    label: "Advertising",
    icon: FaTv,
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    key: "bussiness",
    label: "Bussiness Plan",
    icon: Briefcase,
    submenus: ["Submenu 1", "Submenu 2"],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`h-screen fixed ${
        isOpen ? "w-[256px]" : "w-[80px]"
      } bg-[#01064a] text-white transition-all duration-300`}>
      {/* Toggle Button */}
      <div className="p-2 flex flex-col items-center">
        <button
          onClick={toggleSidebar}
          className="mb-4 flex items-center text-[12px] font-semibold py-[10px] tracking-tight px-4 uppercase bg-white rounded text-[#01064a]">
          {isOpen ? "Collapse Menu <<" : ">>"}
        </button>

        {/* Menu Items */}
        <ul className="w-full">
          {menuItems.map(({ key, label, icon: Icon, submenus }) => (
            <li key={key} className="relative group">
              <button className="flex items-center py-3 px-3 text-[15px] font-bold w-full hover:bg-[#00aeef] relative">
                {/* Icon with dynamic size */}
                <Icon
                  className={`transition-all ${
                    isOpen ? "w-[20px] h-[20px]" : "w-[35px] h-[35px]"
                  }`}
                />
                {isOpen && <span className="ml-2">{label}</span>}
              </button>

              {/* Submenus (Visible on Hover when Collapsed) */}
              {!isOpen && (
                <ul className="absolute left-full top-0 bg-[#01064a] w-48 text-white rounded-md shadow-lg hidden group-hover:block">
                  {submenus.map((submenu, index) => (
                    <li key={index}>
                      <Link href={`/${key}/sub${index + 1}`}>
                        <span className="block px-4 py-2 hover:bg-[#00aeef]">
                          {submenu}
                        </span>
                      </Link>
                    </li>
                  ))}
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
