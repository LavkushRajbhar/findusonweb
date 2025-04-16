/** @format */

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { desktopMenuItems, image, listitems, menuItems } from "../data";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const Header = () => {
    // Add a new state to track if the component has been mounted
    const [mounted, setMounted] = useState(false);
    const [openMenu, setOpenMenu] = useState < number | null > (null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedSubmenu, setExpandedSubmenu] = useState < null | number > (null);
    const [screenSize, setScreenSize] = useState < string > ("desktop");
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

    const toggleSubmenu = (index: number) => {
        // If the submenu is already expanded, collapse it
        // Otherwise, expand it
        setExpandedSubmenu(expandedSubmenu === index ? null : index);
    };

    // Don't render menu contents until after initial screen size is determined
    // This prevents the flickering effect
    if (!mounted) {
        return (
            <div className="bg-[#01094a] h-auto sm:h-auto md:h-[130px] border-b-4 border-red-900">
                <div className="w-full sm:w-[98%] md:w-[95%] mx-auto px-3 sm:px-2 md:px-0">
                    {/* Top section with credit points and icons */}
                    <div className="flex items-center justify-end pt-2 text-white text-xs sm:text-sm md:text-base">
                        <p className="mr-2">Credit Points: &#8377; 54.00</p>
                        <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 flex-wrap">
                            {image.map((img, index) => (
                                <div
                                    key={index}
                                    className="relative group flex flex-col items-center">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        width={36}
                                        height={36}
                                        priority
                                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-cover rounded-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center sm:mt-2 md:mt-3">
                        <div className="relative w-48 sm:w-52 md:w-56 lg:w-64 mx-auto sm:mx-0 mt-[-20px] sm:mt-[-22px] md:mt-[-26px]">
                            <Image
                                src="/512.png"
                                alt="logo"
                                width={320}
                                height={200}
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#01094a] h-auto sm:h-auto md:h-[130px] border-b-4 border-red-900">
            <div className="w-full sm:w-[98%] md:w-[95%] mx-auto px-3 sm:px-2 md:px-0">
                {/* Top section with credit points and icons */}
                <div className="flex items-center justify-end pt-2 text-white text-xs sm:text-sm md:text-base">
                    <p className="mr-2">Credit Points: &#8377; 54.00</p>
                    <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 flex-wrap">
                        {image.map((img, index) => (
                            <div
                                key={index}
                                className="relative group flex flex-col items-center">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={36}
                                    height={36}
                                    priority
                                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-cover rounded-full"
                                />
                                <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 px-2 py-1 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs z-20 whitespace-nowrap transition-all duration-200 border tracking-wide border-white">
                                    {img.alt}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logo and mobile menu toggle */}
                <div className="flex items-center justify-between px-4 sm:py-4">
                    {/* Logo container */}
                    <div className="relative sm:w-40 md:w-48 lg:w-96 mt-[-29px]">
                        <Image
                            src="/512.png"
                            alt="logo"
                            width={320}
                            height={250}
                            priority
                            className="object-contain"
                        />
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="text-white p-2 sm:hidden flex items-center"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu">
                        {mobileMenuOpen ? <FiX size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>

                {/* Main navigation menu */}
                <div
                    className={`w-full mx-auto sm:mt-2 px-0 sm:px-2 md:px-4 transition-all duration-300 ease-in-out ${(mobileMenuOpen && isMobile) || !isMobile
                            ? "opacity-100 max-h-screen"
                            : "opacity-0 max-h-0"
                        } overflow-hidden sm:overflow-visible`}>
                    <nav className="w-[80%] mx-auto  text-white flex mb-2 items-center justify-evenly">
                        <ul
                            className={`flex flex-col ${!isMobile ? "sm:flex-row" : ""
                                } px-2 sm:px-0 gap-1  sm:gap-0 items-start justify-evenly ${!isMobile ? "sm:items-center" : ""
                                } w-full`}>
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative group w-full sm:w-auto"
                                    onMouseEnter={() => (isMobile ? null : setOpenMenu(index))}
                                    onMouseLeave={() => (isMobile ? null : setOpenMenu(null))}>
                                    <div className="flex items-center w-full justify-between">
                                        <Link
                                            href={item.href || "#"}
                                            className={`flex items-center gap-1 tracking-wider hover:text-[#00aeef] font-semibold uppercase ${isTablet
                                                    ? "text-xs"
                                                    : isDesktop
                                                        ? "text-[16px]"
                                                        : "text-sm"
                                                } ${isTablet ? "pl-1" : "pl-2 sm:pl-3"
                                                } py-2 sm:py-1 md:py-0 flex-grow
                        ${index > 0 &&
                                                    index <= menuItems.length - 1 &&
                                                    !isMobile
                                                    ? `sm:border-l-2 md:border-l-3 sm:border-[#00aeef] ${isTablet ? "px-1" : "px-2"
                                                    }`
                                                    : ""
                                                } transition-colors duration-200`}>
                                            {item.name}
                                        </Link>

                                        {/* Submenu toggle button */}
                                        {item.subMenu && (
                                            <button
                                                className={`block ${isTablet ? "p-0" : "p-1 sm:p-2"
                                                    } text-white`}
                                                onClick={() => toggleSubmenu(index)}>
                                                <FaChevronDown
                                                    size={isTablet ? 12 : 16}
                                                    className={`transition-transform duration-200 ${expandedSubmenu === index ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {/* Submenu rendering */}
                                    {item.subMenu && (
                                        <div
                                            className={`${!isMobile ? "sm:absolute sm:left-0 sm:top-full" : ""
                                                } z-20 w-full sm:w-auto overflow-hidden transition-all duration-300 ease-in-out ${(expandedSubmenu === index && isMobile) ||
                                                    (!isMobile && openMenu === index)
                                                    ? "max-h-96 opacity-100"
                                                    : "max-h-0 opacity-0"
                                                }`}>
                                            <ul
                                                className={`
                          bg-white text-blue-950 shadow-lg rounded min-w-max
                          uppercase sm:pl-0 mt-1 sm:mt-0 transform transition-transform duration-300 ease-in-out
                          ${expandedSubmenu === index
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
                                                            className={`block ${isTablet
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
                            ))}

                            {/* "Hello Find Us On Web" section */}
                            <li
                                className="relative group w-full  sm:w-auto"
                                onMouseEnter={() =>
                                    isMobile ? null : setOpenMenu(menuItems.length)
                                }
                                onMouseLeave={() => (isMobile ? null : setOpenMenu(null))}>
                                <div className="flex items-center w-full justify-between">
                                    <Link
                                        href="#"
                                        className={`flex ${isTablet ? "text-[10px]" : "text-[16px] sm:text-[15px]"
                                            } items-center font-bold tracking-wider py-2 sm:py-1 uppercase hover:text-[#00aeef] transition-colors duration-200 flex-grow pl-2 ${isTablet ? "pl-1" : "sm:pl-0"
                                            }`}>
                                        Hello Find Us On Web
                                    </Link>

                                    {/* Submenu toggle button */}
                                    <button
                                        className={`block ${isTablet ? "p-0" : "p-1 sm:p-2"
                                            } text-white`}
                                        onClick={() => toggleSubmenu(menuItems.length)}>
                                        <FaChevronDown
                                            size={isTablet ? 12 : 16}
                                            className={`transition-transform duration-200 ${expandedSubmenu === menuItems.length ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                </div>

                                {/* Submenu for "Hello Find Us On Web" */}
                                <div
                                    className={`${isMobile
                                            ? "block w-full" // Mobile View
                                            : "absolute right-0 sm:left-auto top-full w-[250px]" // Tablet and Desktop View
                                        } z-50 bg-white shadow-lg rounded p-2 transition-all duration-300 ease-in-out 
                  ${(!isMobile && openMenu === menuItems.length) ||
                                            (isMobile && expandedSubmenu === menuItems.length)
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
                                            className={`${isTablet ? "text-[15px]" : "text-[16px] sm:text-[19px]"
                                                } font-semibold text-gray-700 mt-2 text-center`}>
                                            Find Us On Web Admin
                                        </h2>
                                        <p
                                            className={`${isTablet ? "text-[12px]" : "text-[13px] sm:text-[15px]"
                                                } text-gray-500 text-center`}>
                                            (support@findusonweb.com)
                                        </p>
                                        <p
                                            className={`${isTablet ? "text-[11px]" : "text-[12px] sm:text-[13px]"
                                                } font-semibold text-green-600 mt-1 text-center`}>
                                            Balance Shopping Credit - ₹54.00
                                        </p>

                                        <ul
                                            className={`mt-3 sm:mt-4 text-blue-900 ${isTablet ? "text-[12px]" : "text-[13px] sm:text-[14px]"
                                                } font-bold`}>
                                            {listitems.map((key, items) => (
                                                <li
                                                    key={items}
                                                    className="cursor-pointer hover:bg-blue-950 py-1 hover:text-white text-blue-950 bg-white uppercase text-center transform transition-all duration-200 ease-in-out hover:translate-x-1 sm:hover:translate-x-0">
                                                    <Link
                                                        href={key.href}
                                                        className="block px-3 sm:px-4 py-1">
                                                        {key.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>

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
            </div>

            {/* Side modal for desktop and tablet menu */}
            {!isMobile && (
                <div
                    className={`fixed top-0 right-0 h-full bg-white z-50 shadow-lg transition-all duration-300 flex flex-col ${desktopMenuOpen
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
                                        className={`block text-blue-950 font-bold hover:bg-blue-950 p-1 hover:text-white transition-colors ${isTablet ? "text-sm" : ""
                                            }`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Overlay for when modal is open */}
            {desktopMenuOpen && !isMobile && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleDesktopMenu}></div>
            )}
        </div>
    );
};

export default Header;
