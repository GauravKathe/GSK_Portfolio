import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import {SiGeeksforgeeks } from 'react-icons/si';
const Navbar = () => {
  const handleLogoClick=() =>{
    window.location.reload();
  };
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div classname="flex flex-shrink-0 items-center">
        <h3 
          className="text-5xl cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out" 
          onClick={handleLogoClick}
        >
          GSK<b />
        </h3>
      </div>
    <div className="m-8 flex items-center justify-center gap-4 text-4.5xl">
      <FaLinkedin/>
      <FaGithub/>
      <SiLeetcode/>
      <SiGeeksforgeeks/>
    </div>
  </nav>
  );
};

export default Navbar