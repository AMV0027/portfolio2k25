import React from "react";
import "./Marquee.css";
import java from '../assets/icons/java.png';
import python from '../assets/icons/python.png';
import javascript from '../assets/icons/js.png';
import react from '../assets/icons/react.png';
import nextjs from '../assets/icons/nextjs.png';
import fastapi from '../assets/icons/fastapi.png';
import nodejs from '../assets/icons/nodejs.png';
import tailwind from '../assets/icons/tailwindcss.png';
import firebase from '../assets/icons/firebase.png';
import aws from '../assets/icons/aws.png';
import psql from '../assets/icons/psql.png';

const techStack = [
    { url: java, name: "Java", exp: "Backend development" },
    { url: python, name: "Python", exp: "Data science, backend development" },
    { url: javascript, name: "JavaScript", exp: "Frontend and backend development" },
    { url: react, name: "React JS", exp: "Frontend development" },
    { url: nextjs, name: "Next JS", exp: "Server-side rendering for React applications" },
    { url: fastapi, name: "Fast API", exp: "Building APIs with Python" },
    { url: nodejs, name: "NodeJS", exp: "Backend development with JavaScript" },
    { url: tailwind, name: "Tailwind", exp: "CSS framework for styling" },
    { url: firebase, name: "Firebase", exp: "Backend as a service, real-time database" },
    { url: aws, name: "AWS", exp: "Cloud services and infrastructure" },
    { url: psql, name: "PostgreSQL", exp: "Relational database management" }
];


const Marquee = () => {
    return (
        <div>
            {/* Marquee moving right */}
            <div className="marquee-container">
                <div className="marquee">
                    {[...techStack, ...techStack].reverse().map((tech, index) => (
                        <span key={index} className="bg-gradient-to-tr from-zinc-800 border-t-2 border-r-2 border-white/50 text-white rounded-xl select-none flex flex-row justify-start items-center gap-2 p-2 ml-6 shadow-md w-auto pl-4 pr-4">
                            <img src={tech.url} alt="img" className="h-8" />
                            <div>
                                <span className="font-normal font-poppins">{tech.name}</span>
                                <br />
                                <p className="text-xs text-white/80">{tech.exp}</p>
                            </div>
                        </span>
                    ))}
                </div>
            </div>

            {/* Marquee moving left */}
            <div className="marquee-container">
                <div className="marquee-reverse">
                    {[...techStack, ...techStack].map((tech, index) => (
                        <span key={index} className="bg-gradient-to-tr from-zinc-800 border-t-2 border-r-2 border-white/50 text-white rounded-xl select-none flex flex-row justify-start items-center gap-2 p-2 ml-6 shadow-md w-auto pl-4 pr-4">
                            <img src={tech.url} alt="img" className="h-8" />
                            <div>
                                <span className="font-normal text-white font-poppins">{tech.name}</span>
                                <br />
                                <p className="text-xs text-white/80">{tech.exp}</p>
                            </div>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
