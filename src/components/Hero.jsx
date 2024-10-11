import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/mypic.png"
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
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
                      Full Stack Developer
                    </span>

                    {/* Paragraph Section */}
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
                      {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <img src="{profilePic}" alt="my pic" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
