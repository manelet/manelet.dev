import React, { useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cn from 'classnames'

import { useLayout } from '../context/layout'

const variants = {
  hide: {
    // y: -20,
    scale: 0,
    rotateZ: 0,
    opacity: 0,
    transition: {
      duration: .5
    }
  },
  show: {
    // y: 0,
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

  return (
    <div onClick={updateTheme} className='cursor-pointer'>
      <AnimatePresence exitBeforeEnter initial={false}>
        {isDark && (
          <motion.i
            variants={variants}
            key='toggle-dark'
            initial='hide'
            animate='show'
            exit='hide'
            className='far fa-moon'
          />
        )}
        {!isDark && (
          <motion.i
            variants={variants}
            key='toggle-light'
            initial='hide'
            animate='show'
            exit='hide'
            className='fas fa-sun'
          />
        )}        
      </AnimatePresence>
      
    </div>
  )
}

export default ThemeToggle