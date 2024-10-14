import { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiC, SiCplusplus, SiMysql, SiHtml5, SiJavascript, SiGit } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Modal from "./Modal"; // Ensure the path is correct

const Technologie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    { name: "C", icon: <SiC className="text-4xl text-teal-600" />, info: "C is a general-purpose programming language." },
    { name: "C++", icon: <SiCplusplus className="text-4xl text-teal-600" />, info: "C++ is an extension of C with object-oriented features." },
    { name: "Java", icon: <FaJava className="text-4xl text-teal-600" />, info: "Java is a versatile and widely-used programming language." },
    { name: "MySQL", icon: <SiMysql className="text-4xl text-teal-600" />, info: "MySQL is a popular relational database management system." },
    { name: "HTML", icon: <SiHtml5 className="text-4xl text-teal-600" />, info: "HTML is the standard markup language for creating web pages." },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl text-teal-600" />, info: "JavaScript is a programming language commonly used in web development." },
    { name: "React", icon: <RiReactjsLine className="text-4xl text-teal-600" />, info: "React is a JavaScript library for building user interfaces." },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-teal-600" />, info: "MongoDB is a NoSQL database for modern applications." },
    { name: "Git", icon: <SiGit className="text-4xl text-teal-600" />, info: "Git is a version control system for tracking changes in source code." },
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
        Techno<span className="text-neutral-500">Logies</span>
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
