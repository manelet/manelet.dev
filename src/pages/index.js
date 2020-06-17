import React from "react"

import Nav from '../components/layout/nav/nav'
import Footer from '../components/layout/footer'
import Splash from '../components/layout/splash/splash'

export default function Home ({ path }) {  
  return (
    <div>
      <Nav path={path} />
      <Splash />
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

      <div className="cont">
        <div className="cont-inner flex-col">
          <h2>posts</h2>

          <div className='flex flex-wrap'>
            <div className="w-full lg:w-1/2 p-5 px-0 lg:pr-5">
              <div className='home-posts'>
                <h3 className='text-2xl'>title post</h3>
                <p>desc</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-5 px-0 lg:pr-5">
              <div className='home-posts'>
                <h3 className='text-2xl'>title post</h3>
                <p>desc</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-5 px-0 lg:pr-5">
              <div className='home-posts'>
                <h3 className='text-2xl'>title post</h3>
                <p>desc</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-5 px-0 lg:pr-5">
              <div className='home-posts'>
                <h3 className='text-2xl'>title post</h3>
                <p>desc</p>
              </div>
            </div>            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
