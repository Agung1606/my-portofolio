import React from "react";
import { motion } from "framer-motion";

import { SKILLS } from "../constant";
import { LineGradient, SkillCard } from "../components";

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
        {SKILLS.map((item) => (
          <SkillCard
            key={item.id}
            urlImg={item.urlImg}
            skillName={item.skillName}
          />
        ))}
      </div>
    </section>
  );
};

export default MySkills;
