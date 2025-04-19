import { menuItems } from "@/common/data/data";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="w-[80%] mx-auto  text-white flex mb-2 items-center justify-evenly">
        <ul
          className={`flex flex-col ${
            !isMobile ? "sm:flex-row" : ""
          } px-2 sm:px-0 gap-1  sm:gap-0 items-start justify-evenly ${
            !isMobile ? "sm:items-center" : ""
          } w-full`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group w-full sm:w-auto"
              onMouseEnter={() => (isMobile ? null : setOpenMenu(index))}
              onMouseLeave={() => (isMobile ? null : setOpenMenu(null))}
            >
              <div className="flex items-center w-full justify-between">
                <Link
                  href={item.href || "#"}
                  className={`flex items-center gap-1 tracking-wider hover:text-[#00aeef] font-semibold uppercase ${
                    isTablet ? "text-xs" : isDesktop ? "text-[16px]" : "text-sm"
                  } ${
                    isTablet ? "pl-1" : "pl-2 sm:pl-3"
                  } py-2 sm:py-1 md:py-0 flex-grow
    ${
      index > 0 && index <= menuItems.length - 1 && !isMobile
        ? `sm:border-l-2 md:border-l-3 sm:border-[#00aeef] ${
            isTablet ? "px-1" : "px-2"
          }`
        : ""
    } transition-colors duration-200`}
                >
                  {item.name}
                </Link>

                {/* Submenu toggle button */}
                {item.subMenu && (
                  <button
                    className={`block ${
                      isTablet ? "p-0" : "p-1 sm:p-2"
                    } text-white`}
                    onClick={() => toggleSubmenu(index)}
                  >
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
                  }`}
                >
                  <ul
                    className={`
      bg-white text-blue-950 shadow-lg rounded min-w-max
      uppercase sm:pl-0 mt-1 sm:mt-0 transform transition-transform duration-300 ease-in-out
      ${
        expandedSubmenu === index
          ? "translate-y-0"
          : "translate-y-2 sm:translate-y-0"
      }
    `}
                  >
                    {item.subMenu.map((sub, subIndex) => (
                      <li
                        key={subIndex}
                        className="transform transition-all duration-200 ease-in-out hover:translate-x-1 sm:hover:translate-x-0"
                      >
                        <Link
                          href={sub.href}
                          className={`block ${
                            isTablet
                              ? "text-[10px] px-2 py-1"
                              : "text-[13px] sm:text-[14px] px-3 sm:px-4 py-1"
                          } leading-tight font-bold tracking-wide text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-200`}
                        >
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
            onMouseLeave={() => (isMobile ? null : setOpenMenu(null))}
          >
            <div className="flex items-center w-full justify-between">
              <Link
                href="#"
                className={`flex ${
                  isTablet ? "text-[10px]" : "text-[16px] sm:text-[15px]"
                } items-center font-bold tracking-wider py-2 sm:py-1 uppercase hover:text-[#00aeef] transition-colors duration-200 flex-grow pl-2 ${
                  isTablet ? "pl-1" : "sm:pl-0"
                }`}
              >
                Hello Find Us On Web
              </Link>

              {/* Submenu toggle button */}
              <button
                className={`block ${
                  isTablet ? "p-0" : "p-1 sm:p-2"
                } text-white`}
                onClick={() => toggleSubmenu(menuItems.length)}
              >
                <FaChevronDown
                  size={isTablet ? 12 : 16}
                  className={`transition-transform duration-200 ${
                    expandedSubmenu === menuItems.length ? "rotate-180" : ""
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
  (!isMobile && openMenu === menuItems.length) ||
  (isMobile && expandedSubmenu === menuItems.length)
    ? "opacity-100 max-h-[500px]"
    : "opacity-0 max-h-0 overflow-hidden"
}`}
            >
              <div className="bg-white shadow-lg rounded w-full py-2">
                <img
                  src="/profile-placeholder.png"
                  alt="User Profile"
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border border-gray-300"
                />
                <h2
                  className={`${
                    isTablet ? "text-[15px]" : "text-[16px] sm:text-[19px]"
                  } font-semibold text-gray-700 mt-2 text-center`}
                >
                  Find Us On Web Admin
                </h2>
                <p
                  className={`${
                    isTablet ? "text-[12px]" : "text-[13px] sm:text-[15px]"
                  } text-gray-500 text-center`}
                >
                  (support@findusonweb.com)
                </p>
                <p
                  className={`${
                    isTablet ? "text-[11px]" : "text-[12px] sm:text-[13px]"
                  } font-semibold text-green-600 mt-1 text-center`}
                >
                  Balance Shopping Credit - ₹54.00
                </p>

                <ul
                  className={`mt-3 sm:mt-4 text-blue-900 ${
                    isTablet ? "text-[12px]" : "text-[13px] sm:text-[14px]"
                  } font-bold`}
                >
                  {listitems.map((key, items) => (
                    <li
                      key={items}
                      className="cursor-pointer hover:bg-blue-950 py-1 hover:text-white text-blue-950 bg-white uppercase text-center transform transition-all duration-200 ease-in-out hover:translate-x-1 sm:hover:translate-x-0"
                    >
                      <Link href={key.href} className="block px-3 sm:px-4 py-1">
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
                aria-label="Toggle navigation menu"
              >
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

export default Navigation;
