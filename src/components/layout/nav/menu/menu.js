import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { navigate, Link } from 'gatsby'
import cn from 'classnames'

import ThemeToggle from '../../../ThemeToggle'
import { useLayout } from '../../../../context/layout'
import useWindow from '../../../../hooks/useWindow'

const wrapperVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      // delay: 2,
      staggerChildren: .2
    },
    transitionEnd: {
      display: 'none'
    }    
  },
  show: {
    display: 'flex',
    opacity: 1,
    transition: {
      staggerChildren: .2,
      when: 'beforeChildren'
    }    
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: .1,
    transition: {
      duration: .75
    }
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: .75
    },    
  }
}

const Menu = ({ handleToggleMenu }) => {
  const { width, isMobile } = useWindow()
  const [{ refs, mobileMenuOpened }] = useLayout()  

  const handleOnClick = useCallback(
    e => {
      e.preventDefault()
      const slug = e.currentTarget.dataset.slug

      if (isMobile) {
        handleToggleMenu()
      }

      navigate(slug)
    },
    [isMobile]
  )

  const isTablet = width <= 768
  const display = isTablet ? mobileMenuOpened ? 'flex' : 'none' : 'flex'

  return (
    <motion.div
      ref={refs.navMenu}
      className={cn("menu", mobileMenuOpened && 'menu-mobile-opened')}
      variants={isTablet && wrapperVariants}
      animate={!isTablet ? 'show' : mobileMenuOpened ? 'show' : 'hidden'}
      initial={isTablet ? 'hidden' : 'show'}
      style={{ display }}
      onTransitionEnd={() => isTablet && !mobileMenuOpened && refs.navMenu.current.classList.remove('menu-mobile-opened')}
    >
      <ul>
        <motion.li
          data-slug='/articles'
          onClick={handleOnClick}
          variants={isTablet && itemVariants}
        >
          <Link to='/articles'>
            Articles
          </Link>
        </motion.li>
        <motion.li
          data-slug='/projects'
          onClick={handleOnClick}
          variants={isTablet && itemVariants}
        >
          <Link to='/projects'>
            Projects
          </Link>
        </motion.li>
        <motion.li
          data-slug='/about'
          onClick={handleOnClick}
          variants={isTablet && itemVariants}
        >
          <Link to='/about'>
            About
          </Link>
        </motion.li>
          {/* <li>
            <Link to='/contact'>
              Contact
            </Link>
          </li> */}
      </ul>
      <div className="icons">
        <div className='icon'>
          <a href='https://twitter.com/manelescuer' target='_blank'>
            <i className="fab fa-twitter" />
          </a>
        </div>

        <div className='icon'>
          <a href='https://github.com/manelet' target='_blank'>
            <i className="fab fa-github" />
          </a>
        </div>

        {/* <div className='icon'>
          <a href='/rss.xml' target='_blank'>
            <i className="fas fa-rss" />
          </a>
        </div> */}

        <ThemeToggle />
      </div>
    </motion.div>
  )
}

export default Menu