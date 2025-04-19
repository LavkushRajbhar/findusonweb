import Logo from "./Logo";
import TopBar from "./TopBar";
import Navigation from "./Navigation";

const HeaderWrapper = () => {
  return (
    <div className="bg-[#01094a] border border-white">
      <div className="flex justify-between px-10">
        <div >
          <Logo />
        </div>
        <div>
          <TopBar />
        </div>
      </div>
      <div>
        <div className="">
      <Navigation/>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
