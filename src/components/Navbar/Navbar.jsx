import React, { useState } from 'react';
import logo from "../../images/Logo Roms.svg"
function Navbar() {
    const [isNavVisible, setIsNavVisible] = useState(true);

    const toggleNavVisibility = () => {
      setIsNavVisible(!isNavVisible);
    };
    return(
        <>
            <nav className="bg-slate-50 border-gray-200 sm:p-7">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://romain-gilot.fr" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Romain GILOT</span>
                    </a>
                    <button onClick={toggleNavVisibility} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto ${isNavVisible ? 'hidden' : ''}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-50">
                            <li>
                                <a href="#" className="block py-2 px-3 text-sky-950 bg-indigo-700 rounded md:bg-transparent md:text-[#5FACD3] md:p-0 " aria-current="page">À propos de moi</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 ext-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0">Mes projets</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 ext-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;