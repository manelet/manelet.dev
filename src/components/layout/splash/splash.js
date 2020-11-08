import React from 'react'
import { motion } from 'framer-motion'
import Img from "gatsby-image"

import smoothScroll from '../../../lib/smoothScroll'
import { useLayout } from '../../../context/layout'

import './splash.css'

const Splash = ({ image }) => {
  const [{ refs }] = useLayout() 
  
  return (
    <div ref={refs.splash} className="splash cont">
      <div className="cont-inner h-full">
        <div className='flex flex-col lg:flex-row justify-center items-center w-full'>
          <div className='w-full text-center lg:text-left lg:max-w-lg lg:mr-auto'>
            <h1>Manel Escuer</h1>
            <p className='text-xl'>Frontend developer specialized on React who loves to cook and tries to bootstrap projects that at some point, will retire me</p>
          </div>
          <div className='me'>
            <Img fixed={image.fixed} />
          </div>
        </div>
      </div>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,208C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
        <motion.div
          className="arrow-scroll"
          transition={{ duration: .5, ease: "easeInOut", loop: 3 }}
          animate={{ y: 10 }}
          onClick={e => smoothScroll('#home-articles')}
        >
          <svg width='24' height='24' viewBox="0 0 1792 1792" >
            <path d="M1536 960q0-84-32-183t-64-194-32-167v-32h-640v32q0 35-12 67.5t-37 62.5-46 50-54 49q-9 8-14 12-81 72-145 112-22 14-68 38-3 1-22.5 10.5t-36 18.5-35.5 20-30.5 21.5-11.5 18.5q0 71 30.5 115.5t97.5 44.5q43 0 84.5-15t68-33 55-33 48.5-15v576q0 50 38.5 89t89.5 39q52 0 90-38t38-90v-331q46 35 103 35 69 0 119-53 32 18 69 18t73.5-17.5 52.5-47.5q24 4 56 4 85 0 126-48.5t41-135.5zm-128-768q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 764q0 142-77.5 230t-217.5 87l-5-1q-76 61-178 61-22 0-43-3-54 30-119 37v169q0 105-76 180.5t-181 75.5q-103 0-179-76t-76-180v-374q-54 22-128 22-121 0-188.5-81.5t-67.5-206.5q0-38 17.5-69.5t49.5-55 63-40.5 72-37 62-33q55-35 129-100 3-2 17-14t21.5-19 21.5-20.5 22.5-24 18-22.5 14-23.5 4.5-21.5v-288q0-53 37.5-90.5t90.5-37.5h640q53 0 90.5 37.5t37.5 90.5v288q0 59 59 223 69 190 69 317z"/>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

export default Splash