import React, { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cn from 'classnames'

import { useRecoilState } from 'recoil'
import { themeSelector } from '../state/theme'

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
  const [theme, toggleTheme] = useRecoilState(themeSelector)
  const isDark = theme === 'dark'
  const updateTheme = useCallback(() => toggleTheme(isDark ? 'light' : 'dark'), [toggleTheme, isDark])

  return (
    <div onClick={updateTheme} className='cursor-pointer'>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.i
          variants={variants}
          key={`toggle-${theme}`}
          initial='hide'
          exit='hide'
          animate='show'
          className={cn(isDark ? 'far fa-moon' : 'fas fa-sun')}
        />
      </AnimatePresence>
    </div>
  )
}

export default ThemeToggle