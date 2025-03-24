import React from 'react'
import { MdArrowOutward } from "react-icons/md"

const ProjectCard = ({ name, description, techstack = [], links, image }) => {
    return (
        <div className="w-full p-4 flex flex-col justify-start border border-zinc-700 hover:border-blue-500 hover:scale-95 rounded-md bg-white/5 transition-transform duration-300 overflow-hidden">
            <img
                src={links.preview}
                alt={`${name} preview`}
                className="w-full aspect-video object-contain object-center drop-shadow-xl bg-white rounded-xl mb-6 hover:rotate-2 hover:scale-95 transition-transform duration-300"
            />
            <h2 className="text-lg font-unbound text-white mb-2">{name}</h2>
            <p className="text-sm text-white/80 mb-3">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {techstack.map((tech, index) => (
                    <span key={index} className="text-xs text-blue-500 bg-blue-900/40 px-2 py-1 rounded-md">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                {links.github && (
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm flex items-center gap-1">
                        GitHub <MdArrowOutward />
                    </a>
                )}
                {links.live && (
                    <a href={links.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm flex items-center gap-1">
                        Live Demo <MdArrowOutward />
                    </a>
                )}
                {links.youtube && (
                    <a href={links.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm flex items-center gap-1">
                        Youtube VIdeo <MdArrowOutward />
                    </a>
                )}
            </div>
        </div >
    );
};

export default ProjectCard