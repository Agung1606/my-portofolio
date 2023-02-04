import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const ProjectCard = ({ title, backgroundImg, projectUrl, codeUrl}) => {
    return(
        <div 
            className="relative flex items-center justify-center h-auto w-full
                shadow-md shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
            <img 
                className="rounded-xl group-hover:opacity-10"
                src={backgroundImg} 
                alt={`${title}-img`} 
            />
            <div
                className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
                <h3 className="font-playfair font-semibold text-2xl xs:text-4xl xs:tracking-wider text-center mb-3">
                    {title}
                </h3>
                <div className="flex items-center gap-x-3">
                    <a 
                    href={projectUrl}
                    className="text-center font-playfair rounded-lg bg-deep-blue font-bold text-sm xs:p-1 xs:text-lg cursor-pointer hover:bg-red"
                    >
                        More Info
                    </a>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href={codeUrl}
                        className="text-center font-playfair rounded-lg bg-deep-blue font-bold text-sm  xs:p-1 xs:text-lg cursor-pointer hover:bg-red"
                    >
                        Complete Code
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-10 pb-24">
        {/* HEADERS */}
        <div className="md:flex md:justify-start mt-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    <span className="text-red">PRO</span><span className="text-yellow">JECTS</span>
                </p>
                <LineGradient width="w-1/2" />
            </motion.div>
        </div>
        {/* MAIN */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
            <ProjectCard 
                title="Facebook"
                backgroundImg="../assets/projects/facebook-project.png"
                projectUrl="/facebook"
                codeUrl="https://github.com/Agung1606/facebook"
            />
            <ProjectCard 
                title="Admin Dashboard"
                backgroundImg="../assets/projects/admin-project.png"
                projectUrl="/adminDashboard"
                codeUrl="https://github.com/Agung1606/fullstack-admin-dashboard"
            />
            <ProjectCard 
                title="Gym"
                backgroundImg="../assets/projects/gym.png"
                projectUrl="/gym"
                codeUrl="https://github.com/Agung1606/gym"
            />
        </div>
    </section>
  )
}

export default Projects;