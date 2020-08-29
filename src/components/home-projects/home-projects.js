import React, { memo } from 'react'

import Item from './item'

import './home-projects.css'

const HomeProjects = ({ projects = [] }) => (
  <div className="cont pt-8 pb-20" id='home-projects'>
    <div className="cont-inner items-center flex-col lg:flex-row">
      <div className='flex flex-col w-full lg:max-w-xs mb-4 md:my-auto'>
        <p className='font-bold text-3xl'>
          Projects
        </p>
        <p>
          <span role='img' aria-label='heart'>♥️</span> bootsrapping side projects, toy with new techs and experiment
        </p>
      </div>
      <div className='projects'>
      <div>
        <ul>
          {projects.map((project) => (
            <Item
              key={`project-${project.fields.slug}`}
              {...project}
            />
          ))}
        </ul>
      </div>
      </div>
    </div>
  </div>
)

export default memo(HomeProjects)