/** @format */

// components/header/Logo.jsx
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="relative mt-4 px-2">
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
