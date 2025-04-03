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
    const [openMenu, setOpenMenu] = useState < number | null > (null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedSubmenu, setExpandedSubmenu] = useState < null | number > (null);
    const [isMobile, setIsMobile] = useState(false);
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

    // Check if we're on client-side and set mobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial value
        if (typeof window !== "undefined") {
            handleResize();
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) {
            setExpandedSubmenu(null);
        }
    };

    const toggleDesktopMenu = () => {
        setDesktopMenuOpen(!desktopMenuOpen);
    };

    const toggleSubmenu = (index: number) => {
        setExpandedSubmenu(expandedSubmenu === index ? null : index);
    };

    // Desktop hamburger menu items

    return (
        <div className="bg-[#01094a] h-auto md:h-[136px]  border-b-4 border-red-900">
            <div className="w-full md:w-[95%] mx-auto px-3 md:px-0">
                <div className="flex items-center justify-end pt-2 text-white text-sm md:text-base">
                    <p>Credit Points: &#8377; 54.00</p>
                    <div className="flex items-center gap-2 px-2 flex-wrap">
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
                                    className="w-8 h-8 object-cover rounded-full"
                                />
                                <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 px-2 py-1 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs z-20 whitespace-nowrap transition-all duration-200 border tracking-wide border-white">
                                    {img.alt}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-center sm:mt-3">
                    <div className="relative w-56 sm:mt:0 md:w-84  lg:w-84 mx-auto md:mx-0 mt-[-13px]">
                        <Image
                            src="/512.png"
                            alt="logo"
                            width={320}
                            height={200}
                            priority
                            className="object-contain"
                        />
                    </div>

                    <button
                        className="md:hidden text-white p-2"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu">
                        {mobileMenuOpen ? <FiX size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
                <div
                    className={`w-full md:w-[78%] mx-auto p-2 mt-2 px-0 md:px-4 transition-all duration-300 ease-in-out ${mobileMenuOpen
                            ? "opacity-100 max-h-screen"
                            : "opacity-0 max-h-0 md:opacity-100 md:max-h-screen"
                        } overflow-hidden md:overflow-visible`}>
                    <nav className="text-white flex items-center justify-between">
                        <ul className="flex flex-col md:flex-row px-3 gap-2 md:gap-4 items-start md:items-center">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative group w-full md:w-auto"
                                    onMouseEnter={() => (!isMobile ? setOpenMenu(index) : null)}
                                    onMouseLeave={() => (!isMobile ? setOpenMenu(null) : null)}>
                                    <div className="flex items-center w-full justify-between">
                                        <Link
                                            href={item.href || "#"}
                                            className={`flex items-center gap-1 hover:text-[#00aeef] font-semibold uppercase pl-2 py-2 md:py-0 flex-grow
                        ${index > 0 && index <= menuItems.length - 1
                                                    ? "md:border-l-2 md:border-[#00aeef]"
                                                    : ""
                                                } transition-colors duration-200`}>
                                            {item.name}
                                        </Link>

                                        {item.subMenu && (
                                            <button
                                                className="md:hidden p-2 text-white"
                                                onClick={() => toggleSubmenu(index)}>
                                                <FaChevronDown
                                                    size={20}
                                                    className={`transition-transform duration-200 ${expandedSubmenu === index ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                        )}

                                        {item.subMenu && (
                                            <FaChevronDown
                                                size={20}
                                                className="text-white h-4 pl-1 hidden md:block transition-transform duration-200 group-hover:rotate-180 w-6"
                                            />
                                        )}
                                    </div>
                                    {item.subMenu && (
                                        <div
                                            className={`md:absolute md:left-0 md:top-full z-20 overflow-hidden transition-all duration-300 ease-in-out ${expandedSubmenu === index && isMobile
                                                    ? "max-h-96 opacity-100"
                                                    : isMobile
                                                        ? "max-h-0 opacity-0"
                                                        : "hidden group-hover:block"
                                                }`}>
                                            <ul
                                                className={`
                          bg-white text-blue-950 shadow-lg rounded min-w-max
                          uppercase pl-4 md:pl-0 mt-1 md:mt-0 transform transition-transform duration-300 ease-in-out
                          ${expandedSubmenu === index
                                                        ? "translate-y-0"
                                                        : "translate-y-2 md:translate-y-0"
                                                    }
                        `}>
                                                {item.subMenu.map((sub, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="transform transition-all duration-200 ease-in-out hover:translate-x-1 md:hover:translate-x-0 ">
                                                        <Link
                                                            href={sub.href}
                                                            className="block text-[14px] leading-[-20px] font-bold tracking-wide px-4 py-1 text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-200">
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center">
                            <div className="relative group  px-4">
                                <Link
                                    href="#"
                                    className="flex text-[15px] items-center font-bold tracking-wide px-4 py-1 uppercase">
                                    Hello Find Us On Web
                                    <FaChevronDown
                                        size={10}
                                        className="pl-1 text-white h-4 hidden md:block transition-transform duration-200 group-hover:rotate-180 w-6"
                                    />
                                </Link>

                                <div className="absolute right-6 w-[270px] bg-white shadow-lg py-2 hidden group-hover:block">
                                    <img
                                        src="/profile-placeholder.png"
                                        alt="User Profile"
                                        className="w-20 h-20 mx-auto rounded-full border border-gray-300"
                                    />
                                    <h2 className="text-[19px] font-semibold text-gray-700 mt-2 text-center">
                                        Find Us On Web Admin
                                    </h2>
                                    <p className="text-[15px] text-gray-500 text-center">
                                        (support@findusonweb.com)
                                    </p>
                                    <p className="text-[13px] font-semibold text-green-600 mt-1 text-center">
                                        Balance Shopping Credit - ₹54.00
                                    </p>

                                    <ul className="mt-4 text-blue-900 text-[14px] font-bold text-center">
                                        {listitems.map((key, items) => (
                                            <li
                                                key={items}
                                                className="cursor-pointer hover:bg-blue-950 py-1 hover:text-white text-blue-950 bg-white uppercase">
                                                <Link href={key.href}>{key.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Hamburger button moved next to "Hello Find Us On Web" */}
                            <button
                                className="text-slate-400 p-2 ml-2"
                                onClick={isMobile ? toggleMobileMenu : toggleDesktopMenu}
                                aria-label="Toggle navigation menu">
                                {isMobile ? (
                                    mobileMenuOpen ? (
                                        <FiX size={24} />
                                    ) : (
                                        <AiOutlineMenu size={24} />
                                    )
                                ) : desktopMenuOpen ? (
                                    <FiX size={24} />
                                ) : (
                                    <AiOutlineMenu size={24} />
                                )}
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Full-height modal for desktop menu */}
            {!isMobile && (
                <div
                    className={`fixed top-0 right-0 h-full bg-white z-50 shadow-lg transition-all duration-300 flex flex-col ${desktopMenuOpen
                            ? "opacity-100 visible transform translate-x-0"
                            : "opacity-0 invisible transform translate-x-full"
                        }`}
                    style={{ width: "400px" }}>
                    <div className="flex justify-start p-4">
                        <button
                            onClick={toggleDesktopMenu}
                            className="text-gray-500 hover:text-gray-700">
                            <FiX size={24} />
                        </button>
                    </div>
                    <div className=" pt-0 flex-grow">
                        <ul className="">
                            {desktopMenuItems.map((item, index) => (
                                <li key={index} className="text-center">
                                    <Link
                                        href={item.href}
                                        className="block text-blue-950 font-bold hover:bg-blue-950 p-1 hover:text-white transition-colors">
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
                    className="fixed inset-0  bg-opacity-50 z-40"
                    onClick={toggleDesktopMenu}></div>
            )}
        </div>
    );
};

export default Header;