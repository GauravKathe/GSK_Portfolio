import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <h1 className="my-16 text-center text-4xl">
        Proj<span className="text-neutral-500">ects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className="relative rounded-lg bg-neutral-900 border border-neutral-800 transition-all duration-300 
                       hover:border-purple-500/40 hover:shadow-[0_0_25px_0_rgba(124,58,237,0.5)]
                       hover:-translate-y-1"
            style={{ height: "420px" }}
          >
            <div className="absolute inset-0 rounded-lg bg-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="h-40 overflow-hidden rounded-t-lg relative"> {/* Added 'relative' here */}
  <img
    src={project.image}
    alt={project.title}
    className="absolute w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"  // Added absolute positioning
  />
</div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="h-32 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-3">
                {Array.isArray(project.description) ? (
                  <ul className="text-neutral-400 text-sm space-y-1 hover:text-neutral-300 transition-colors">
                    {project.description.map((desc, i) => (
                      <li key={i} className="mb-1">{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors">
                    {project.description}
                  </p>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/30
                               hover:bg-purple-900/50 hover:text-purple-200 hover:border-purple-400/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;