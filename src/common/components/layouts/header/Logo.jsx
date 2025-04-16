/** @format */

// components/header/Logo.jsx
import Image from "next/image";
import React from "react";

const Logo = ({ isMobile }) => {
  return (
    <div className="relative border border-amber-200">
      <Image
        src="/512.png"
        alt="logo"
        width={320}
        height={100}
        className="object-cover"
      />
    </div>
  );
};

export default Logo;
