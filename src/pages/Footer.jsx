import React from 'react';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="h-auto bg-red pt-1">
        <div className="w-5/6 mx-auto">
            <SocialMediaIcons />
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold text-2xl text-yellow">
                    AGUNG SAPUTRA
                </p>
                <p className="font-playfair text-md text-yellow">
                    ©2023
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;