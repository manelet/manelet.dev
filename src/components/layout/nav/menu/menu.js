import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { navigate, Link } from 'gatsby'
import cn from 'classnames'

import ThemeToggle from '../../../ThemeToggle'
import { useLayout } from '../../../../context/layout'
import useWindow from '../../../../hooks/useWindow'
import Dropdown, { DropdownMenu, DropdownToggle, DropdownItem } from '../../../dropdown/dropdown'

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
    // scale: .1,
    transition: {
      duration: .5
    }
  },
  show: {
    opacity: 1,
    x: 0,
    // scale: 1,
    transition: {
      duration: .5
    },    
  }
}

const Menu = ({ handleToggleMenu }) => {
  const { width, isTablet } = useWindow()
  const [{ refs, mobileMenuOpened }] = useLayout()
  const handleOnClick = useCallback(
    e => {
      e.preventDefault()
      const slug = e.currentTarget.dataset.slug

      if (isTablet) {
        handleToggleMenu()
      }

      navigate(slug)
    },
    [isTablet]
  )

  const onTransitionEnd = useCallback(() => {
    if (isTablet && !mobileMenuOpened) {
      refs.navMenu.current.classList.remove('menu-mobile-opened')
    }
  }, [isTablet, mobileMenuOpened])

  return (
    <motion.div
      ref={refs.navMenu}
      className={cn("menu", mobileMenuOpened && 'menu-mobile-opened')}
      variants={isTablet && wrapperVariants}
      animate={!isTablet ? 'show' : mobileMenuOpened ? 'show' : 'hidden'}
      initial={!isTablet ? 'show' : 'hidden'}
      onTransitionEnd={onTransitionEnd}
    >
      <ul>
        <motion.li
          data-slug='/articles'
          onClick={handleOnClick}
          variants={isTablet && itemVariants}
        >
          <Dropdown>
            <DropdownToggle>
              <Link to='/articles'>
                Articles
              </Link>
            </DropdownToggle>
            <DropdownMenu style={{ width: '200px' }}>
              <DropdownItem>
                Category 1
              </DropdownItem>
              <DropdownItem>
                Category 1
              </DropdownItem>              
            </DropdownMenu>
          </Dropdown>
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
          <motion.li variants={isTablet && itemVariants}>
            <a
              name='Cooking instagram profile @maneleat'
              title='Cooking instagram profile @manelet'
              rel="noopener"
              rel="noreferrer"
              href='https://instagram.com/maneleat'
              target='_blank'
            >
              Cooking
            </a>
          </motion.li>
      </ul>
      <div className="icons">
        <div className='icon'>
          <a
            title='twitter profile @manelescuer'
            name='twitter profile @manelescuer'
            rel="noopener"
            rel="noreferrer" href='https://twitter.com/manelescuer' target='_blank'>
            <svg
              viewBox="0 0 512 512"
              width="18"
              height='18'
            >
              <path d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5  C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1C172,179,100.6,140.4,52.9,81.7  c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.1,63.3,43.1,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95  c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5  c-7.8,0-15.5-0.5-23.1-1.4C62.9,432,113.8,448,168.4,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5  C462.6,146,479,128.9,492,109.5z" />
            </svg>
          </a>
        </div>

        <div className='icon'>
          <a
            title='github profile @manelet'
            name='github profile @manelet'
            rel="noopener"
            rel="noreferrer"
            href='https://github.com/manelet'
            target='_blank'
          >
            <svg
              height="18"
              width="18"
              viewBox="0 0 1024 1024"
            >
              <path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z" />
            </svg>
          </a>
        </div>

        <ThemeToggle />
      </div>
    </motion.div>
  )
}

export default Menu