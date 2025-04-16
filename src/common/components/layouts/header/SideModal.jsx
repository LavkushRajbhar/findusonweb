/** @format */

// components/header/SideModal.jsx
import Link from "next/link";
import React from "react";
import { FiX } from "react-icons/fi";

const SideModal = ({
  desktopMenuOpen,
  toggleDesktopMenu,
  desktopMenuItems,
  isTablet,
  isMobile,
}) => {
  if (isMobile) return null;

  return (
    <>
      {/* Side modal for desktop and tablet menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-lg transition-all duration-300 flex flex-col ${
          desktopMenuOpen
            ? "opacity-100 visible transform translate-x-0"
            : "opacity-0 invisible transform translate-x-full"
        }`}
        style={{ width: isTablet ? "300px" : "400px" }}>
        <div className="flex justify-start p-4">
          <button
            onClick={toggleDesktopMenu}
            className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>
        <div className="pt-0 flex-grow">
          <ul className="">
            {desktopMenuItems.map((item, index) => (
              <li key={index} className="text-center">
                <Link
                  href={item.href}
                  className={`block text-blue-950 font-bold hover:bg-blue-950 p-1 hover:text-white transition-colors ${
                    isTablet ? "text-sm" : ""
                  }`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for when modal is open */}
      {desktopMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDesktopMenu}></div>
      )}
    </>
  );
};

export default SideModal;
