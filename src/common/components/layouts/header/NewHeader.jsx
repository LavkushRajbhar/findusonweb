import React from "react";
import Logo from "@/common/components/layouts/header/Logo";
import TopBar from "@/common/components/layouts/header/TopBar";
import MenuItem from "@/common/components/layouts/header/MenuItem";
const NewHeader = () => {
  return (
    <div>
      <div className="flex justify-between px-10">
        <div>
          <Logo />
        </div>
        <div>
          <TopBar />
        </div>
      </div>
      <div className="">
        <div>
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
