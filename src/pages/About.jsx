import React from "react";
import { motion } from "framer-motion";

import { LineGradient } from "../components";

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
      <div className="md:grid grid-cols-3 gap-8 mt-10">
        <div className="col-span-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-opensans text-lg ">
              As a mobile developer specializing in React Native, I am
              passionate about creating innovative and user-friendly mobile
              applications. With a strong foundation in JavaScript and React
              Native, I have a deep understanding of mobile app development
              principles and best practices. I thrive in an agile development
              environment, collaborating with cross-functional teams to deliver
              high-quality and performant mobile solutions.
            </p>
            <p className="font-opensans text-lg mt-5">
              My expertise includes building intuitive user interfaces,
              implementing responsive designs, and integrating with various APIs
              and backend services. I am experienced in leveraging native device
              features and capabilities, such as camera, geolocation, and push
              notifications, to enhance the overall user experience. I am also
              proficient in debugging and optimizing application performance to
              ensure smooth and efficient operation across different devices and
              platforms.
            </p>
          </motion.div>
        </div>
        <div className="max-w-[300px] md:max-w-[400px] rounded-lg shadow-md shadow-gray-800 mt-10 md:mt-0 hover:scale-105 transition duration-500">
          <img
            className="rounded-lg w-full h-full hidden md:flex"
            src="../assets/about.jpg"
            alt="aboutimg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
