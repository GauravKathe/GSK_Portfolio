import React from 'react'
import { EXPERIENCES } from '../constants'
import { space } from 'postcss/lib/list'

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        Experi<span className="text-neutral-500">ences</span>
      </h1>
      <div>{EXPERIENCES.map((experiences,index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
          <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-neutral-400'>{experiences.year}</p>
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
          <h5 className='mb-2 font-semibold '>
            {experiences.role} - <span className='text-sm text-purple-400'>
              {experiences.company}
            </span>
            </h5>
            <p className='mb-4 text-neutral-400'>{experiences.description}</p>
            {experiences.technologies.map((tech,index) => (
              <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
            ))}
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Experience