/** @format */

// components/header/MainNavigation.jsx
"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import MenuItem from "./MenuItem";
import UserMenu from "./UserMenu";

const MainNavigation = ({
  menuItems,
  listitems,
  openMenu,
  setOpenMenu,
  mobileMenuOpen,
  expandedSubmenu,
  isMobile,
  isTablet,
  isDesktop,
  toggleMobileMenu,
  toggleSubmenu,
  toggleDesktopMenu,
  desktopMenuOpen,
}) => {
  return (
    <div
      className={`w-full mx-auto sm:mt-2 px-0 sm:px-2 md:px-4 transition-all duration-300 ease-in-out ${
        (mobileMenuOpen && isMobile) || !isMobile
          ? "opacity-100 max-h-screen"
          : "opacity-0 max-h-0"
      } overflow-hidden sm:overflow-visible`}>
      <nav className="w-[80%] mx-auto text-white flex mb-2 items-center justify-evenly">
        <ul
          className={`flex flex-col ${
            !isMobile ? "sm:flex-row" : ""
          } px-2 sm:px-0 gap-1 sm:gap-0 items-start justify-evenly ${
            !isMobile ? "sm:items-center" : ""
          } w-full`}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              index={index}
              totalItems={menuItems.length}
              openMenu={openMenu}
              expandedSubmenu={expandedSubmenu}
              isMobile={isMobile}
              isTablet={isTablet}
              isDesktop={isDesktop}
              setOpenMenu={setOpenMenu}
              toggleSubmenu={toggleSubmenu}
            />
          ))}

          {/* "Hello Find Us On Web" section */}
          <UserMenu
            menuItemsLength={menuItems.length}
            openMenu={openMenu}
            expandedSubmenu={expandedSubmenu}
            isMobile={isMobile}
            isTablet={isTablet}
            toggleSubmenu={toggleSubmenu}
            listItems={listitems}
          />

          {/* Hamburger menu for desktop and tablet */}
          {!isMobile && (
            <li className="flex items-center">
              <button
                className="text-slate-400"
                onClick={toggleDesktopMenu}
                aria-label="Toggle navigation menu">
                {desktopMenuOpen ? (
                  <FiX size={isTablet ? 18 : 22} />
                ) : (
                  <AiOutlineMenu size={isTablet ? 18 : 22} />
                )}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
