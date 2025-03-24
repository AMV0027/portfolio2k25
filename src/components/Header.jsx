import React, { useState } from 'react';
import logo from '../assets/3d/5.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import resume from '../assets/resume/Arunmozhivarman-resume.pdf';


function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <div className="md:max-w-4xl fixed top-0 z-50 w-full bg-transparent backdrop-blur-lg border-b-1 border-blue-500">
            <div className="w-full flex flex-row justify-between items-center px-4 py-2">
                <div className="flex flex-row items-center gap-1">
                    <img src={logo} alt="logo" className="h-8 w-8" />
                    <p className="text-xl font-normal font-poppins">ArunMozhi Varman</p>
                    <div className="flex justify-center items-center gap-2 ml-4">
                        <a
                            href="https://github.com/AMV0027"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/arunmozhi-varman-2565b3266/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="https://leetcode.com/u/AMV0027/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-orange-500 transition-transform transform hover:scale-110"
                        >
                            <SiLeetcode size={20} />
                        </a>
                        <a
                            href="https://www.hackerrank.com/profile/arunmozhivarman5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110"
                        >
                            <FaHackerrank size={20} />
                        </a>
                    </div>
                </div>
                <button
                    onClick={() => setBurgerMenu(!burgerMenu)}
                    className="block md:hidden text-2xl p-2 hover:text-blue-600 transition-colors duration-300"
                >
                    {burgerMenu ? <IoMdClose /> : <RxHamburgerMenu />}
                </button>
                <div className="hidden md:block">
                    <div className="flex flex-row gap-6">
                        <a href="#about" className="text-lg font-normal font-poppins hover:text-blue-600 transition-all duration-300">About</a>
                        <a href="#projects" className="text-lg font-normal font-poppins hover:text-blue-600 transition-all duration-300">Projects</a>
                        <a href="#contact" className="text-lg font-normal font-poppins hover:text-blue-600 transition-all duration-300">Contact</a>
                        <a href={resume} target='_blank' rel='noreferrer' className="text-lg font-normal font-poppins hover:text-blue-600 transition-all duration-300">Resume</a>
                    </div>
                </div>
            </div>

            {/* Burger Menu Animation */}
            <div className={`md:hidden ${burgerMenu ? 'h-auto opacity-100' : 'h-0 opacity-0'} transition-all  duration-500 ease-in-out overflow-hidden`}>
                <div className="flex flex-col">
                    <a href="#about" className="text-lg font-normal hover:pl-6 p-4 font-poppins hover:text-blue-600 transition-all ease-in-out duration-500 hover:bg-gray-100">About</a>
                    <a href="#projects" className="text-lg font-normal hover:pl-6 p-4 font-poppins hover:text-blue-600 transition-all ease-in-out duration-500 hover:bg-gray-100">Projects</a>
                    <a href="#contact" className="text-lg font-normal hover:pl-6 p-4 font-poppins hover:text-blue-600 transition-all ease-in-out duration-500 hover:bg-gray-100">Contact</a>
                    <a href={resume} target='_blank' rel='noreferrer' className="text-lg font-normal hover:pl-6 p-4 font-poppins hover:text-blue-600 transition-all ease-in-out duration-500 hover:bg-gray-100">Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
