import React, { useState } from "react";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div
      id="navbar"
      className="z-20 w-[100vw] lg:w-auto top-[100px] lg:top-0 left-0 bg-mywhite absolute transition-transform duration-1000 ease-in-out lg:transition-none lg:relative lg:left-0 grid grid-rows-[100px_repeat(4,100px)_100px] md:grid-rows-[200px_repeat(4,142.5px)_225px] lg:sticky lg:h-screen overflow-hidden"
    >
      <div
        className={`flex items-center justify-center border-r-[1px] border-b-[1px] ${
          selectedItem === 0 ? "bg-gray-200" : ""
        }`}
        onClick={() => handleItemClick(0)}
      >
        <img
          className="w-[63px]"
          src="https://s3-alpha-sig.figma.com/img/a5bc/30ff/51ee070e1af90ee613daa41e47038862?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DGwOu3BXrloiOAELY5~7X5OfWY7AIBKRc-Iuvbtgr-xRv6YY5fzwoZyLaTfmueWJfxlrnuHXpN5sIqzQ3Ua7TefAWqCGmWKQQzM0hKY3lhNx1DPUm8GLPSnVGaVhrC7cV9Jt354XkMPm1mLT~Scsr-5k5N19Ry8mVVrRhWpzaii-C66RNAtOEm5FFzFZ9ylYnQQNBk353lObl3qs1XSBuhdJVWllQm1LYow~mRY9IaHLGCLrJXfK~UnzQ23VcPPj4xvJhgqR2fV64gug75DLPtJBO7IHPuFF-MTKoLjYIO0CdA4yjB99PWmRg~OiOt4O84ZEmfnS6LJUYXEKnhlOgQ__"
          alt=""
        />
      </div>
      <div
        className={`flex hover:bg-gray-200 items-center justify-center font-bold border-r-[2px] border-t-[1px] border-b-[1px] ${
          selectedItem === 1 ? "bg-gray-200 font-bold" : "font-light"
        }`}
        onClick={() => handleItemClick(1)}
      >
        Cart
      </div>
      <div
        className={`flex hover:bg-gray-200 items-center justify-center font-bold border-r-[2px] border-t-[1px] border-b-[1px] ${
          selectedItem === 2 ? "bg-gray-200" : ""
        } ${selectedItem === 2 ? "font-bold" : "font-light"} `}
        onClick={() => handleItemClick(2)}
      >
        Market
      </div>
      <div
        className={`flex hover:bg-gray-200 items-center justify-center font-bold border-r-[2px] border-t-[1px] border-b-[1px] ${
          selectedItem === 3 ? "bg-gray-200 font-bold" : "font-light"
        }`}
        onClick={() => handleItemClick(3)}
      >
        Settings
      </div>
      <div
        className={`flex hover:bg-gray-200 items-center justify-center font-bold border-r-[2px] border-t-[1px] border-b-[1px] ${
          selectedItem === 4 ? "bg-gray-200 font-bold" : "font-light"
        }`}
        onClick={() => handleItemClick(4)}
      >
        Logout
      </div>
      <div
        className={`flex items-center justify-center font-light text-graytext border-r-[2px] border-t-[1px] border-b-[1px] ${
          selectedItem === 5 ? "bg-gray-200" : ""
        } ${selectedItem === 5 ? "font-bold" : "font-light"}`}
        onClick={() => handleItemClick(5)}
      ></div>
    </div>
  );
};

export default Sidebar;
