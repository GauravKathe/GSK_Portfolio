import { HERO_CONTENT } from "../constants";
import temp from "../assets/ghibli.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center">
        {/* Text Content Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-0">
            {/* Heading Section */}
            <h1 className="pb-0 mb-2 text-4xl font-thin tracking-tight bg-gradient-to-r from-purple-500 
              via-slate-400 to-pink-300 bg-clip-text text-transparent lg:mt-16 lg:text-5xl">
              Hi..!
            </h1>

            <h1 className="mt-1 text-3xl font-thin tracking-tight bg-gradient-to-r from-purple-500 
              via-slate-400 to-pink-300 bg-clip-text text-transparent lg:text-4xl">
              I am Gaurav Kathe
            </h1>

            <span className="mt-[1em] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
              bg-clip-text text-3xl tracking-tight text-transparent">
              Android Developer
            </span>

            {/* Paragraph Section */}
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify font-lets">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center py-8 lg:py-0">
            <div className="relative group">
              <img 
                src={temp} 
                alt="Gaurav Kathe" 
                className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 
                  object-cover border-4 border-purple-300/50 shadow-xl 
                  transition-all duration-500 group-hover:scale-105
                  group-hover:shadow-[0_0_25px_5px_rgba(216,180,254,0.5)]"
              />
              {/* Enhanced BRIGHTER Ring Effect (Same animation, just more visible) */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/60 
                animate-ping pointer-events-none
                group-hover:border-purple-300/90 group-hover:border-[3px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;