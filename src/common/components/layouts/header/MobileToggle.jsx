/** @format */

// components/header/MobileToggle.jsx
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const MobileToggle = ({ mobileMenuOpen, toggleMobileMenu, isMobile }) => {
  if (!isMobile) return null;

  return (
    <button
      className="text-white p-2 sm:hidden flex items-center"
      onClick={toggleMobileMenu}
      aria-label="Toggle navigation menu">
      {mobileMenuOpen ? <FiX size={24} /> : <AiOutlineMenu size={24} />}
    </button>
  );
};

export default MobileToggle;
