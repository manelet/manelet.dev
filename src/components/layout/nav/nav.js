import React, { useState, useCallback, useEffect } from 'react'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import { useLayout } from '../../../context/layout'
import ThemeToggle from '../../ThemeToggle'
import handleNavScroll from '../../../lib/navScroll'

const logoVariants = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: .5,
      staggerChildren: .5
    }
  },
  hidden: {
    opacity: 0
  }
}

const letterVariants = {
  show: {
    // y: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: .5
    }
  },
  hidden: {
    y: -50,
    opacity: 0
  }
}

const Nav = ({ path }) => {
  const [mounted, setMounted] = useState(false)
  const [{ theme, refs }] = useLayout()  
  const isHome = path === '/'
  const isDark = theme === 'dark'
  const handleScroll = useCallback(() =>
    handleNavScroll(
      refs.nav.current,
      refs.navMenu.current,
      refs.splash.current,
      isDark,
      isHome
    ),
    [isDark, isHome, refs.nav, refs.navMenu, refs.splash]
  )

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
    }

    if (theme && mounted && isHome) {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line
  }, [mounted, theme, isHome])

  return (
      <nav ref={refs.nav} className={cn('cont', isHome && 'home', isHome ? 'fixed': 'relative')}>
        <div className='cont-inner py-3'>
          <div className='flex w-full justify-between relative'>
            <div className='logo' ref={refs.navMenu}>
              <motion.span className="logo" variants={logoVariants} animate='show' initial='hidden'>
                <motion.span variants={letterVariants}>M</motion.span>
                <motion.span variants={letterVariants}>a</motion.span>
                <motion.span variants={letterVariants}>n</motion.span>
                <motion.span variants={letterVariants}>e</motion.span>
                <motion.span variants={letterVariants}>l</motion.span>
              </motion.span>
              <motion.ul
                transition={{ delay: 3 }}
                variants={{ show: { opacity: 1 }, hidden: { opacity: 0 }}}
                animate='show'
                initial='hidden'
              >
                <li>Articles</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
              </motion.ul>
            </div>
            <div className="right flex ml-auto">
              <div className='relative mr-3 cursor-pointer'>
                <i className="fab fa-twitter" />
              </div>

              <div className='relative mr-3 cursor-pointer'>
                <i className="fab fa-github" />
              </div>

              <div className='relative mr-3 cursor-pointer'>
                <i className="fas fa-rss" />
              </div>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Nav