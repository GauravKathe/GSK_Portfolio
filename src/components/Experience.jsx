import React from 'react';
import Tilt from 'react-parallax-tilt';
import { EXPERIENCES } from '../constants';

const Experience = () => (
  <>
    {/* Centered title with minimal gap */}
    <div className="title-container">
      <h1 className="text-4xl title-3d title-animate">
        Experi<span className="glow-text">ences</span>
      </h1>
    </div>

    {/* Experience cards with reduced gap */}
    <div className="experience-section">
      {EXPERIENCES.map((experience, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          scale={1.05}
          className="mb-4 flex flex-wrap lg:justify-center" // Further reduced bottom margin
        >
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4 p-4 gradient-bg">
            <h5 className="mb-2 font-semibold text-white">
              {experience.role} -{' '}
              <span className="text-sm text-gray-300">{experience.company}</span>
            </h5>
            <p className="mb-4 text-neutral-300">{experience.description}</p>
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Tilt>
      ))}
    </div>
  </>
);

export default Experience;
