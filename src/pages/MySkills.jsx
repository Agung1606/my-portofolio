import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const SkillCard = ({urlImg, skillName}) => {
    return(
        <div className="p-6 shadow-md shadow-gray-700 rounded-xl hover:scale-105 transition duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                    <img src={urlImg} alt={`${skillName}-icon`} width="64px" height="64px" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="uppercase font-opensans">{skillName}</h3>
                </div>
            </div>
        </div>
    );
};

const MySkills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
        {/* HEADER */}
        <div className="md:flex md:justify-center mt-20">
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
                    <span className="text-blue">My</span> Skills
                </p>
                <LineGradient width="w-1/2" />
            </motion.div>
        </div>
        {/* MAIN */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <SkillCard urlImg="../assets/skills/html.png" skillName="html" />
            <SkillCard urlImg="../assets/skills/css.png" skillName="css" />
            <SkillCard urlImg="../assets/skills/javascript.png" skillName="javascript" />
            <SkillCard urlImg="../assets/skills/react.png" skillName="react" />
            <SkillCard urlImg="../assets/skills/node.png" skillName="node js" />
            <SkillCard urlImg="../assets/skills/express.png" skillName="express" />
            <SkillCard urlImg="../assets/skills/mongo.png" skillName="mongo db" />
            <SkillCard urlImg="../assets/skills/tailwind.png" skillName="tailwind" />
        </div>
    </section>
  )
}

export default MySkills;