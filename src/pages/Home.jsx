import { React, useState } from 'react'
import Marquee from '../components/Marquee'
import user from '../assets/3d_profile.png'
import wss from '../assets/wss.png'
import firmai from '../assets/firmai.png'
import gcn from '../assets/gcn.png'
import quezz from '../assets/quezz.png'
import iotdb from '../assets/iotdb.png'
import recipeai from '../assets/recipeai.png'
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import { FaArrowDown } from 'react-icons/fa';
import Achievements from '../components/Acheivements';
import Contact from '../components/Contact';


const skills = [
    { category: "Programming Languages", items: ["Java", "Python", "SQL", "HTML,CSS,JS"] },
    { category: "Frontend Development", items: ["React JS", "Next JS", "Tailwind CSS"] },
    { category: "Backend Development", items: ["Node.js", "Express.js", "APIs"] },
    { category: "AI/ML & Prompt Engineering", items: ["Generative AI", "LLM", "Synthetic Data"] },
    { category: "Databases & Tools", items: ["PostgreSQL", "pgvector", "Firebase", "MQTT Protocol", "AWS"] },
    { category: "Design & Visualization", items: ["Figma", "Adobe Illustrator", "RIVE", "Blender 3D"] }
];

const projects = [
    {
        name: "Firm AI Research Engine",
        description: "Developed an AI-powered research engine to assist commercial courts with legal research and streamline complex queries.",
        techstack: ["React JS", "Python", "Prompt Engineering", "MIstral Nemo Instruct LLM", "SQL", "React JS", "Tailwind CSS"],
        links: {
            github: "https://github.com/AMV0027/Firm-Ai-Research-engine-for-commercial-courts",
            youtube: "https://www.youtube.com/watch?v=DbYk0uxJVjo",
            preview: firmai
        },
        image: false
    },
    {
        name: "Global Compliance Navigator",
        description: "Developed a search engine for compliance professionals to streamline workflow and solve compliance problems. Integrated pgvector for faster vector-based querying and optimized performance for large datasets.",
        techstack: ["React JS", "Node JS", "Python", "PostgreSQL", "pgvector", "Ollama"],
        links: {
            github: "https://github.com/AMV0027/gcn_final",
            youtube: "https://www.youtube.com/watch?v=MdLQLbSGWVU",
            preview: gcn
        },
        image: false
    },
    {
        name: "SocketChat.io",
        description: "Designed a real-time web socket-based chat platform with customizable chatrooms for public and private communication.",
        techstack: ["React JS", "Node JS", "Tailwind CSS"],
        links: {
            github: "https://github.com/AMV0027/web-socket-chat-app",
            live: "https://wsschat.vercel.app/",
            preview: wss
        },
        image: true
    },
    {
        name: "Quezz.io (Quiz App)",
        description: "Developed a quiz web app where users can create, share quizzes, and view leaderboards for a competitive quiz experience.",
        techstack: ["React JS", "Firebase", "Tailwind CSS"],
        links: {
            github: "https://github.com/AMV0027/Quezz.io-quizz-webapp",
            live: "https://quezz-io.vercel.app/",
            preview: quezz
        },
        image: true  // Image-based preview
    },
    {
        name: "IoT DB-Lite",
        description: "Designed a lightweight IoT Time series database optimized for resource-constrained environments. Supports MQTT protocol for efficient data collection and query handling.",
        techstack: ["C", "MQTT Protocol"],
        links: {
            github: "https://github.com/AMV0027/IoTDB-Lite",
            preview: iotdb
        },
        image: true
    },
    {
        name: "AI-Recipe Generator",
        description: "Created an AI-powered recipe generator that suggests dishes based on user-provided ingredients, helping users get creative in the kitchen.",
        techstack: ["Node JS", "Tailwind CSS", "Prompt Engineering"],
        links: {
            live: "https://recipe-gen-ai.onrender.com/",
            preview: recipeai
        },
        image: true  // Image-based preview
    }
];

function Home() {
    const [projectExpand, setprojectExpand] = useState(false);
    const [skillExpand, setskillExpand] = useState(false);

    return (
        <div className='w-full h-full flex flex-col justify-start'>
            <div className='h-screen overflow-hidden w-full flex flex-col justify-between'>
                <div className='h-full over w-full p-6 pt-24 flex flex-col justify-between items-center'>
                    <div className="h-full w-full flex flex-col justify-center">
                        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-normal font-unbound'>
                            <span className="md:hidden block">
                                Hi,<br /> I'm Arunmozhi Varman
                            </span>
                            <span className="md:block hidden">
                                Hi, I'm Arunmozhi Varman
                            </span>
                        </h1>
                        <p className='text-center text-sm md:text-xl font-poppins text-white/90'>
                            I'm a full-stack developer. I don't just write code,<br /> I create solutions.
                        </p>

                    </div>
                    <img src={user} alt="logo"
                        className='h-auto w-xl drop-shadow-[0_0_60px_rgba(10,100,200,1)]'
                    />
                </div>
                <div className='absolute bottom-0 left-0 translate-y-12 w-screen flex flex-col justify-end h-44 items-center'>
                    <div className="w-full md:max-w-4xl bg-gradient-to-t from-black h-44 "></div>
                </div>
            </div>
            <div className='min-h-screen bg-black w-full'>
                <Marquee />
                <div className='p-6'>
                    <h1 className='text-3xl font-unbound text-white mt-6 mb-6' id="about">
                        About Me ?
                    </h1>
                    <p>
                        I am Arunmozhi Varman, a B.Tech IT student with expertise in full-stack development, backend APIs, and AI integrations. Passionate about solving real-world problems through technology, I’ve built scalable web applications, IoT systems, and AI-powered tools. My projects and achievements in hackathons reflect my ability to innovate, while my exploration of AI, competitive coding, and creative design keeps me constantly evolving in the tech space.
                    </p>
                    <h1 className='text-3xl font-unbound text-white mt-12'>
                        What I Work With
                    </h1>
                    <div className={`relative w-full ${skillExpand ? 'h-auto' : 'h-[600px]'} overflow-hidden`}>
                        {/* code for the what i work with */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                            {skills.map((skill, index) => (
                                <SkillCard key={index} category={skill.category} items={skill.items} />
                            ))}
                        </div>
                        {!skillExpand && (
                            <div className="md:hidden absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black">
                                <button
                                    onClick={() => setskillExpand(true)}
                                    className="absolute left-1/2 -translate-x-1/2 bottom-6 text-white font-poppins text-lg flex items-center gap-2 hover:gap-4"
                                >
                                    <FaArrowDown className="animate-bounce" /> Show More
                                </button>
                            </div>
                        )}
                    </div>
                    <h1 className='text-3xl font-unbound text-white mt-12 mb-6' id="projects">Projects</h1>
                    <div className={`relative w-full overflow-hidden ${projectExpand ? 'h-auto' : 'h-screen'}`}>
                        <div className={`grid grid-cols-1 gap-6 transition-all duration-500 ${projectExpand ? 'pb-10' : ''}`}>
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    name={project.name}
                                    description={project.description}
                                    techstack={project.techstack}
                                    links={project.links}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {!projectExpand && (
                            <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black">
                                <button
                                    onClick={() => setprojectExpand(true)}
                                    className="absolute left-1/2 -translate-x-1/2 bottom-6 text-white font-poppins text-lg flex items-center gap-2 hover:gap-4"
                                >
                                    <FaArrowDown className="animate-bounce" /> Show More
                                </button>
                            </div>
                        )}
                    </div>
                    <Achievements />
                    <Contact />
                </div>
            </div >
        </div >
    )
}

export default Home