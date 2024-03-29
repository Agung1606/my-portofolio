import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import { assets } from "../constant";
import { SocialMediaIcons } from "../components";

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        <img
          src={assets.avatar}
          alt="agungpicture"
          className="z-10 w-full max-w-[400px] md:max-w-[600px] hover:scale-105 transition duration-500"
        />
      </div>

      {/* MAIN SECTIONS */}
      <div className="z-30 basis-2/5 mt-3 xs:mt-12 md:mt-32">
        {/* HEADINGS */}
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
          <p className="text-blue xs:text-white text-4xl xs:text-5xl font-playfair z-10 text-center md:text-start">
            Agung {""}
            <span
              className="xs:relative text-blue xs:text-deep-blue xs:font-semibold z-20
                            xs:before:content-brush before:absolute before:-left-[28px]
                            before:-top-[80px] before:z-[-1]"
            >
              Saputra
            </span>
          </p>
          <p className="mt-5 xs:mt-12 mb-7 text-md text-center md:text-start">
            as a mobile developer specializing in React Native, I bring a
            combination of technical expertise, creativity, and a passion for
            delivering exceptional mobile experiences. I am excited to
            contribute my skills and collaborate with a team of like-minded
            professionals to create impactful mobile applications that make a
            difference in the lives of users.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                        hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                        justify-center font-playfair px-10"
            >
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
