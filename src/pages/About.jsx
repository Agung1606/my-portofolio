import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="pt-10 pb-24">
        {/* HEADER */}
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
                    About <span className="text-red">Me</span>
                </p>
                <LineGradient width="w-1/2" />
            </motion.div>
        </div>
        {/* MAIN */}
        <div 
            className="md:grid grid-cols-3 gap-8 mt-10"
        >
            <div className="col-span-2">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-opensans text-lg ">
                        I started my journey to become a web developer in January 2022. I learned through several sources such as Mimo,
                        Sololearn, freecodecamp, and several other websites.
                    </p>
                    <p className="font-opensans text-lg mt-5">
                        I am passionate about building web applications using the MongoDB, Express Js, React, and Node Js for short "MERN" stacks as well as
                        I am passionate about learning new technologies and understand that there is more than one way
                        to complete a task. I am proficient enough to build a web application using
                        MERN stacks. I am fast in learning new technology according to industry needs.
                    </p>
                </motion.div>
            </div>
            <div className="rounded-lg shadow-md shadow-gray-800 hover:scale-105 transition duration-500">
                    <img 
                        className="rounded-lg w-full h-auto"
                        src="../assets/about.jpg" 
                        alt="aboutimg"
                    />
            </div>
        </div>
    </section>
  )
}

export default About;