import React from 'react';
import cit from '../assets/acheivements/cit.jpg'
import mit from '../assets/acheivements/mit.jpg'
import clg from '../assets/acheivements/clg.avif'


const achievements = [
    {
        title: "3rd Place – Smart Industry Hackathon 2024",
        description: "Awarded ₹75K cash prize for building a surface anomaly detection system using GenAI to enhance industrial process efficiency.",
        img: cit,
    },
    {
        title: "2nd Place – Vazhitheer Road Safety Hackathon (2025)",
        description: "Won ₹35K cash prize for developing a road safety solution to prevent accidents, conducted by IIT Madras.",
        img: mit,
    },
    {
        title: "1st Place – Intercollegiate Design Thinking Competition",
        description: "Presented an innovative project on Disease Management.",
        img: clg,
    },
    {
        title: "1st Place – SREC Coin Ideathon (2024)",
        description: "Created a solution for Surplus Food Management, enhancing food redistribution efficiency.",
        img: clg,
    },
    {
        title: "1st Place – CODEBLITZ Intercollegiate Competition (2023)",
        description: "Developed a full-fledged E-commerce Website Frontend.",
        img: clg,
    },
];

function Achievements() {
    return (
        <div>
            <h2 className="text-4xl font-unbound text-center mb-8 mt-12">Achievements</h2>

            <div className="w-full h-full overflow-x-scroll flex space-x-6 px-4">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className="max-h-[500px] w-full md:w-1/2 shrink-0 p-2 border border-blue-500 rounded-2xl mb-5"
                    >
                        <img src={achievement.img} className='w-full aspect-video rounded-xl object-cover' />
                        <div className='w-full p-2'>
                            <h3 className="text-lg font-poppins font-semibold mb-2">{achievement.title}</h3>
                            <p className="text-sm font-inter text-white/80">{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
