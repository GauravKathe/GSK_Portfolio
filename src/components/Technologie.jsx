import { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiC, SiCplusplus, SiMysql, SiHtml5, SiJavascript, SiGit } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Modal from "./Modal"; // Ensure the path is correct

const Technologie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    { 
      name: "C", 
      icon: <SiC className="text-4xl text-teal-600" />, 
      info: "C is a foundational programming language. It's widely used for system programming and embedded systems." 
    },
    { 
      name: "C++", 
      icon: <SiCplusplus className="text-4xl " />, 
      info: "C++ extends C with object-oriented features. It's used for application development and game programming." 
    },
    { 
      name: "Java", 
      icon: <FaJava className="text-4xl text-orange-600" />, 
      info: "Java is a versatile programming language. It's used for enterprise applications and Android development." 
    },
    { 
      name: "MySQL", 
      icon: <SiMysql className="text-4xl text-blue-500" />, 
      info: "MySQL is a popular relational database system. It's used for managing structured data in applications." 
    },
    { 
      name: "HTML", 
      icon: <SiHtml5 className="text-4xl text-red-600" />, 
      info: "HTML is the standard markup language for web pages. It structures content and defines page layout." 
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript className="text-4xl text-yellow-300" />, 
      info: "JavaScript is a dynamic language used in web development. It enables interactivity and enhances user experience." 
    },
    { 
      name: "React", 
      icon: <RiReactjsLine className="text-4xl text-cyan-600" />, 
      info: "React is a JavaScript library for building UIs. It allows developers to create reusable UI components." 
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb className="text-4xl text-green-500" />, 
      info: "MongoDB is a NoSQL database designed for modern applications. It stores data in flexible, JSON-like documents." 
    },
    { 
      name: "Git", 
      icon: <SiGit className="text-4xl " />, 
      info: "Git is a version control system for tracking code changes. It facilitates collaboration among developers." 
    },
  ];

  const handleIconClick = (tech) => {
    if (tech) {
      setSelectedTech(tech);
      setIsOpen(true);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        Techno<span className="text-neutral-500">logies</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            onClick={() => handleIconClick(tech)}
          >
            {tech.icon}
          </div>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        technology={selectedTech}
      />
    </div>
  );
};

export default Technologie;