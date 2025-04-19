/** @format */

import Logo from "./Logo";
import Navigation from "./Navigation";
import TopBar from "./TopBar";

const HeaderWrapper = () => {
  return (
    <div className="bg-[#01094a] border-b-4 border-b-pink-900">
      <div className="flex justify-between items-center px-10 py-3">
        <Logo />
        <TopBar creditPoints={54}  />
      </div>
      <div>
        <div className="pt-2">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
