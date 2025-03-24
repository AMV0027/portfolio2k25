import React from 'react';
import { MdCheckCircle } from 'react-icons/md';  // Importing the required icon

const SkillCard = ({ category, items }) => {
    return (
        <div className='p-4 border hover:border-blue-500 hover:scale-95 border-zinc-700 rounded-md bg-white/5 transition-all ease-in-out duration-500'>
            <h2 className='text-lg font-unbound text-white mb-2'>{category}</h2>
            <ul className='space-y-2'>
                {items.map((item, index) => (
                    <li key={index} className='flex items-center gap-2 text-sm text-white/80'>
                        <MdCheckCircle className='text-blue-500' /> {item}  {/* Icon with text */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillCard;
