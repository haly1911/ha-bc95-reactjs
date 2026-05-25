import React from "react";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="wrapper flex items-center justify-between h-16">
        <a href="" className="shrink-0">
          <img src="./logo.png" alt="logo" className="w-full h-8 " />
        </a>
        <div>
          <div className="ml-4 items-center flex space-x-4">
            <a href="">
              <i className="fa-solid fa-magnifying-glass fa-lg" />
            </a>
            <a href="">
              <i className="fa-solid fa-user fa-lg" />
            </a>
            <a href="" className="relative">
              <i className="fa-solid fa-bag-shopping fa-lg" />
              <span className="h-5 w-5 text-xs bg-[#105687] text-white rounded-full flex items-center justify-center absolute -top-2 -right-2">
                3
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
