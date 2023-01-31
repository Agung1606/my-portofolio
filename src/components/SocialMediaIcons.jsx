import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

// <img src="../assets/linkedin.png" alt="linkedin-link" />

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        {/* LINKEDIN */}
        <a 
            href="https://www.linkedin.com/in/agung-saputra-77741625a/"
            target="_blank"
            rel="noreferrer"
            className="text-4xl hover:opacity-50 transition duration-500"
            >
            <FaLinkedinIn />
        </a>
        <a 
            href="https://github.com/Agung1606"
            target="_blank"
            rel="noreferrer"
            className="text-4xl hover:opacity-50 transition duration-500"
            >
            <FaGithub />
        </a>
        <a 
            href="https://twitter.com/AGNGSPTRAAA"
            target="_blank"
            rel="noreferrer"
            className="text-4xl hover:opacity-50 transition duration-500"
            >
            <BsTwitter />
        </a>
    </div>
  )
}

export default SocialMediaIcons;