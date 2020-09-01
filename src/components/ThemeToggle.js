import React, { useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cn from 'classnames'

import { useLayout } from '../context/layout'

const variants = {
  hide: {
    scale: 0,
    rotateZ: 0,
    opacity: 0,
    transition: {
      duration: .5
    }
  },
  show: {
    scale: 1,
    rotateZ: 360,
    opacity: 1,
    transition: {
      duration: .5
    }    
  }
}

const ThemeToggle = () => {
  const [{ theme }, { toggleTheme }] = useLayout()

  if (!theme) {
    return null
  }

  const isDark = theme === 'dark'
  const updateTheme = useCallback(() => {
    toggleTheme(isDark ? 'light' : 'dark')
  }, [toggleTheme, isDark])

  const color = isDark ? '#fff' : '#2d3748'

  return (
    <div
      onClick={updateTheme}
      className='theme-toggle'
      style={{ transformOrigin: 'center center', transformStyle: 'preserve-3d', transformBox: 'fill-box' }}      
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.svg
          variants={variants}
          key={`toggle-${isDark ? 'dark' : 'light'}`}
          initial='hide'
          animate='show'
          exit='hide'          
          fill="none"
          height="18" 
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
          style={{ fill: color, stroke: color }}
        >
          {isDark
            ? (
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            )
            : (
              <>
                <circle cx="12" cy="12" r="5" />
                <line x1="12" x2="12" y1="1" y2="3" />
                <line x1="12" x2="12" y1="21" y2="23" />
                <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
                <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
                <line x1="1" x2="3" y1="12" y2="12" />
                <line x1="21" x2="23" y1="12" y2="12" />
                <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
                <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
              </>
            )
          }
        </motion.svg>          
      </AnimatePresence>
    </div>
  )
}

export default ThemeToggle