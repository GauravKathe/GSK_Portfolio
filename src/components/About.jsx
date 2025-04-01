import abt from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="lg:w-1/2 p-4">
          <div className="flex items-center justify-center h-full">
            <img className="rounded-2xl max-w-full h-auto" src={abt} alt="About" />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 p-4">
          <div className="flex items-center justify-center h-full">
            <p className="text-justify my-2 max-w-xl py-6 font-lets">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
