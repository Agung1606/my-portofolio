import React from "react";
import { motion } from "framer-motion";

import { LineGradient, ProjectCard } from "../components";
import { PROJECTS } from "../constant";

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
            <span className="text-red">PRO</span>
            <span className="text-yellow">JECTS</span>
          </p>
          <LineGradient width="w-1/2" />
        </motion.div>
      </div>
      {/* MAIN */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {PROJECTS.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            backgroundImg={item.backgroundImg}
            projectUrl={item.projectUrl}
            codeUrl={item.codeUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;