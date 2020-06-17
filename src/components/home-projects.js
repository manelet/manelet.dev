import React from 'react'

const HomeProjects = () => {
  return (
    <div className="cont pt-8 pb-20" id='home-projects'>
      <div className="cont-inner items-center flex-col lg:flex-row">
        <div className='flex flex-col w-full md:max-w-xs'>
          <p className='font-bold text-3xl text-gray-900'>
            Projects
          </p>
          <p>
            ♥️ bootsrapping side projects, toy with new techs and experiment
          </p>
        </div>
        <div className='projects lg:ml-10'>
          <div className='w-full'>
            <ul>
              <li>bocado</li>
              <li>nyora</li>
            </ul>
          </div>
          <div className='w-full'>
            <ul>
              <li>str</li>
              <li>dropdown</li>
            </ul>              
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProjects