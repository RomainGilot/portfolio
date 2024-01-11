import React, { useState } from "react";
import logo from "../../images/logov2.svg";
function Header() {
  return (
    <>
      <nav className="bg-white  border-gray-200 sm:p-2 z-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://romain-gilot.fr"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20" alt="Flowbite Logo" />
            <span className="invisible md:visible self-center text-2xl font-semibold whitespace-nowrap">
              <span className="text-[#62B9CB]">Romain GILOT</span> | Développeur Full-Stack en alternance
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
