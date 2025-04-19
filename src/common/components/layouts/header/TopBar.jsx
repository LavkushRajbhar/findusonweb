/** @format */

// components/header/TopBar.jsx
"use client";
import Image from "next/image";
import React from "react";
import { image } from "@/common/data/data";

const TopBar = ({ creditPoints, images }) => {
  return (
    <div className="flex items-center justify-end pt-2 text-white text-xs sm:text-sm md:text-base -mt-7">
      <p className="mr-2">Credit Points: &#8377; {creditPoints}</p>
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
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-cover rounded-full"
            />
            <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 px-2 py-1 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs z-20 whitespace-nowrap transition-all duration-200 border tracking-wide border-white">
              {img.alt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
