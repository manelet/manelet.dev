import React from 'react'
import { motion } from 'framer-motion'
import Img from "gatsby-image"

import smoothScroll from '../../../lib/smoothScroll'
import { useLayout } from '../../../context/layout'
import useWindow from '../../../hooks/useWindow'
// import manelet from '../../../manelet-dark2.png'

import './splash.css'

const Splash = ({ image }) => {
  const { width } = useWindow()
  const [{ refs }] = useLayout() 
  
  return (
    <div ref={refs.splash} className="splash cont">
      <div className="cont-inner">
        <div className='flex flex-col lg:flex-row items-center w-full'>
          <div className='w-full text-center lg:text-left'>
            <h1>Manel Escuer</h1>
            <p className='text-xl'>Frontend developer focused on ⚛️ React who loves to cook and tries to bootstrap projects that at some point, will retire me 💆🏻‍♂️</p>
          </div>
          <div className='hidden max-w-xl relative lg:block lg:mr-5 lg:mt-24 w-full'>
            {/* <img src='/images/manelet-dark2.png' alt="" /> */}
            <Img fluid={image.fluid} />
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
          onClick={e => smoothScroll('#home-projects')}
        >
          <i className="far fa-hand-point-down" />
        </motion.div>
      </div>
    </div>
  )
}

export default Splash