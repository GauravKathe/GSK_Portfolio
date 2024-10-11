import { HERO_CONTENT } from "../constants"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flrx flrx-wrap ">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    {/*<h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Gaurav Kathe</h1>*/}
                    <h1 className="pb-0 mb-2 text-6xl font-thin tracking-tight bg-gradient-to-r from-pink-400 
                    via-slate-600 to-indigo-500 bg-clip-text text-transparent lg:mt-16 lg:text-7xl">Hi There..!</h1>
                    <h1 className="mt-2 text-4xl font-thin tracking-tight bg-gradient-to-r from-pink-400 
                    via-slate-600 to-indigo-500 bg-clip-text text-transparent lg:text-5xl">I'm Gaurav Kathe</h1>
                    <h4 className="mt-1">java.Error:name-replacement &lt;People call me Garry&gt;</h4>

                    <span className="mt-[1em] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer
                    </span>
                    
                    <p className="my-2  max-w-xl py-6 font-light tracking-tighter text-justify">{HERO_CONTENT}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero  