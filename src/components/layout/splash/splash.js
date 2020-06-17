import React from 'react'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'

import smoothScroll from '../../../lib/smoothScroll'
import { themeSelector } from '../../../state/theme'

import manelet from '../../../manelet.png'
import maneletDark from '../../../manelet-dark.png'

const Splash = () => {
  const [theme, toggleTheme] = useRecoilState(themeSelector)
  const isDark = theme === 'dark'
  
  return (
    <div className="splash cont">
      <div className="cont-inner">
        <div className='flex flex-col lg:flex-row items-center w-full'>
          <div className='w-full text-center lg:text-left'>
            <h1>Manel Escuer</h1>
            <p className='text-2xl'>Frontend developer for wefox focused on React</p>
          </div>
          <div className='home-pic'>
            <img src={isDark ? manelet : maneletDark} alt="" />
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