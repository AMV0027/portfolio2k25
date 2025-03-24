import React from 'react';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                <h2 className="text-lg font-unbound">Let's Connect</h2>
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/AMV0027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arunmozhi-varman-2565b3266/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://leetcode.com/u/AMV0027/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition-transform transform hover:scale-110"
                    >
                        <SiLeetcode size={30} />
                    </a>
                    <a
                        href="https://www.hackerrank.com/profile/arunmozhivarman5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110"
                    >
                        <FaHackerrank size={30} />
                    </a>
                </div>

                <p className="text-sm text-gray-500">
                    © 2025 Arunmozhi Varman. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
