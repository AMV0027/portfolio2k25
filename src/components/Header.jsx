import React, { useState } from 'react';
import logo from '../assets/3d/5.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <div className="md:max-w-4xl fixed top-0 z-50 w-full bg-transparent backdrop-blur-xl border-b-1 border-sky-400">
            <div className="w-full flex flex-row justify-between items-center px-4 py-2">
                <div className="flex flex-row items-center gap-1">
                    <img src={logo} alt="logo" className="h-8 w-8" />
                    <p className="text-xl font-normal font-poppins">ArunMozhi Varman</p>
                </div>
                <button
                    onClick={() => setBurgerMenu(!burgerMenu)}
                    className="block md:hidden text-2xl p-2 hover:text-red-600 transition-colors duration-300"
                >
                    {burgerMenu ? <IoMdClose /> : <RxHamburgerMenu />}
                </button>
                <div className="hidden md:block">
                    <div className="flex flex-row gap-6">
                        <a href="#blog" className="text-lg font-normal font-poppins hover:text-red-600 transition-all duration-300">Blog</a>
                        <a href="#about" className="text-lg font-normal font-poppins hover:text-red-600 transition-all duration-300">About</a>
                        <a href="#projects" className="text-lg font-normal font-poppins hover:text-red-600 transition-all duration-300">Projects</a>
                        <a href="#contact" className="text-lg font-normal font-poppins hover:text-red-600 transition-all duration-300">Contact</a>
                    </div>
                </div>
            </div>

            {/* Burger Menu Animation */}
            <div className={`md:hidden ${burgerMenu ? 'h-auto opacity-100' : 'h-0 opacity-0'} transition-all  duration-500 ease-in-out overflow-hidden`}>
                <div className="flex flex-col">
                    <a href="#blog" className="text-lg font-normal hover:pl-6 p-4 font-poppins hover:text-red-600 transition-all ease-in-out duration-500 hover:bg-gray-100">Blog</a>
                    <a href="#about" className="text-lg font-normal hover:pl-6 p-4 font-poppins hover:text-red-600 transition-all ease-in-out duration-500 hover:bg-gray-100">About</a>
                    <a href="#projects" className="text-lg font-normal hover:pl-6 p-4 font-poppins hover:text-red-600 transition-all ease-in-out duration-500 hover:bg-gray-100">Projects</a>
                    <a href="#contact" className="text-lg font-normal hover:pl-6 p-4 font-poppins hover:text-red-600 transition-all ease-in-out duration-500 hover:bg-gray-100">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
