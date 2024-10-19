import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Navbar = () => {
  const handleLogoClick = () => {
    window.location.reload(); // Reloads the page when clicking the logo
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h3 
          className="text-5xl cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out" 
          onClick={handleLogoClick}
        >
          GSK
        </h3>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-4.5xl">
        <a 
          href="https://www.linkedin.com/in/gaurav-kathe-ba1a13291/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition duration-300"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://github.com/GauravKathe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <FaGithub />
        </a>

        <a 
          href="https://leetcode.com/u/gaurav_kathe/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-yellow-500 transition duration-300"
        >
          <SiLeetcode />
        </a>

        <a 
          href="https://www.geeksforgeeks.org/user/gauravkalibg/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-green-600 transition duration-300"
        >
          <SiGeeksforgeeks />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
