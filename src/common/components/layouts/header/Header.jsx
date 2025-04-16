/** @format */

// components/header/Header.jsx
"use client";
import React, { useEffect, useState } from "react";
import {
  desktopMenuItems,
  image,
  listitems,
  menuItems,
} from "@/common/data/data";
import TopBar from "./TopBar";
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";
import SideModal from "./SideModal";
import MobileToggle from "./MobileToggle";

const Header = () => {
  // Add a new state to track if the component has been mounted
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
  const [screenSize, setScreenSize] = useState("desktop");
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  // Check screen size and set appropriate state
  useEffect(() => {
    // Mark component as mounted
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    // Set initial value
    if (typeof window !== "undefined") {
      handleResize();
      setMounted(true);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";
  const isDesktop = screenSize === "desktop";
  const isMobileOrTablet = isMobile;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setExpandedSubmenu(null);
    }
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen(!desktopMenuOpen);
  };

  const toggleSubmenu = (index) => {
    // If the submenu is already expanded, collapse it
    // Otherwise, expand it
    setExpandedSubmenu(expandedSubmenu === index ? null : index);
  };

  return (
    <div className="bg-[#01094a] border border-white">
      <div className="w-full sm:w-[98%] md:w-[95%] mx-auto px-3 sm:px-2 md:px-0">
        {/* Top section with credit points and icons */}
        <TopBar creditPoints="54.00" images={image} />

        {/* Logo and mobile menu toggle */}
        <div className="flex items-center justify-between px-4 sm:py-4">
          {/* Logo container */}
          <Logo isMobile={true} />

          {/* Mobile Menu Toggle Button */}
          <MobileToggle
            mobileMenuOpen={mobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            isMobile={isMobile}
          />
        </div>

        {/* Main navigation menu */}
        <MainNavigation
          menuItems={menuItems}
          listitems={listitems}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          mobileMenuOpen={mobileMenuOpen}
          expandedSubmenu={expandedSubmenu}
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
          toggleMobileMenu={toggleMobileMenu}
          toggleSubmenu={toggleSubmenu}
          toggleDesktopMenu={toggleDesktopMenu}
          desktopMenuOpen={desktopMenuOpen}
        />
      </div>

      {/* Side modal for desktop and tablet menu */}
      <SideModal
        desktopMenuOpen={desktopMenuOpen}
        toggleDesktopMenu={toggleDesktopMenu}
        desktopMenuItems={desktopMenuItems}
        isTablet={isTablet}
        isMobile={isMobile}
      />
    </div>
  );
};

export default Header;
