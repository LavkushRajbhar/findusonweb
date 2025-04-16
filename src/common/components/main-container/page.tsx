/** @format */

import React from "react";
// import Header from "@/common/components/layouts/header";
import Sidebar from "../sidebar/page";
import NewHeader from "@/common/components/layouts/header/NewHeader";

const MainContainer = () => {
  return (
    <div>
      <NewHeader />
      {/* <Header /> */}

      <Sidebar />
    </div>
  );
};

export default MainContainer;
