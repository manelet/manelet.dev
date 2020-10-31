import React, { memo } from 'react'

import Item from './item'

import './home-projects.css'

const HomeProjects = ({ projects = [] }) => (
  <div className="home-projects cont">
    <div className="cont-inner flex-col md:flex-row md:items-center">
      <div className='flex flex-col w-full mb-10 md:max-w-xs md:flex-shrink-0 md:flex-wrap'>
        <p className='font-bold text-3xl'>
          Projects
        </p>
        <p>
          <span role='img' aria-label='heart'>♥️</span> bootsrapping side projects, toy with new techs and experiment
        </p>
      </div>
      <ul className='projects'>
        {projects.map((project) => (
          <Item
            key={`project-${project.fields.slug}`}
            {...project}
          />
        ))}
      </ul>
    </div>
  </div>
)

export default memo(HomeProjects)