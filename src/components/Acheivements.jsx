import React from 'react';

const achievements = [
    {
        title: "3rd Place – Smart Industry Hackathon 2024",
        description: "Awarded ₹75K cash prize for building a surface anomaly detection system using GenAI to enhance industrial process efficiency.",
        img: "https://media.licdn.com/dms/image/v2/D5622AQGyRDow9CvSPg/feedshare-shrink_1280/feedshare-shrink_1280/0/1729097166837?e=1745452800",
    },
    {
        title: "2nd Place – Vazhitheer Road Safety Hackathon (2025)",
        description: "Won ₹35K cash prize for developing a road safety solution to prevent accidents, conducted by IIT Madras.",
        img: "https://via.placeholder.com/300x200?text=Road+Safety+Hackathon",
    },
    {
        title: "1st Place – Intercollegiate Design Thinking Competition",
        description: "Presented an innovative project on Disease Management.",
        img: "https://via.placeholder.com/300x200?text=Design+Thinking+Competition",
    },
    {
        title: "1st Place – SREC Coin Ideathon (2024)",
        description: "Created a solution for Surplus Food Management, enhancing food redistribution efficiency.",
        img: "https://via.placeholder.com/300x200?text=SREC+Coin+Ideathon",
    },
    {
        title: "1st Place – CODEBLITZ Intercollegiate Competition (2023)",
        description: "Developed a full-fledged E-commerce Website Frontend.",
        img: "https://via.placeholder.com/300x200?text=CodeBlitz",
    },
];

function Achievements() {
    return (
        <div>
            <h2 className="text-4xl font-unbound text-center mb-8 mt-12">Achievements</h2>

            <div className="w-full overflow-x-auto no-scrollbar flex space-x-6 px-4">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className="h-82 shrink-0 p-2 border border-zinc-800 rounded-2xl mb-5"
                    >
                        <div className='bg-gradient-to-tr from-black border-b border-l border-zinc-700 to-blue-500 h-40 mb-4 rounded-xl'></div>
                        <div className='w-80'>
                            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                            <p className="text-sm text-white/80">{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
