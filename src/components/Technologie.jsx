import {
  SiMongodb, SiC, SiCplusplus, SiMysql,
  SiHtml5, SiJavascript, SiGit
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";

const Technologie = () => {
  const technologies = [
    { name: "C", icon: <SiC className="text-3xl text-teal-600" /> },
    { name: "C++", icon: <SiCplusplus className="text-3xl text-blue-600" /> },
    { name: "Java", icon: <FaJava className="text-3xl text-orange-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-3xl text-blue-500" /> },
    { name: "HTML", icon: <SiHtml5 className="text-3xl text-red-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-3xl text-yellow-300" /> },
    { name: "React", icon: <RiReactjsLine className="text-3xl text-cyan-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500" /> },
    { name: "Git", icon: <SiGit className="text-3xl text-gray-300" /> },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        Techno<span className="text-neutral-500">logies</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {technologies.map((tech) => (
          <div key={tech.name} className="technology-card">
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologie;
