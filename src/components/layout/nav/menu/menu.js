import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { navigate, Link } from 'gatsby'

import ThemeToggle from '../../../ThemeToggle'
import { useLayout } from '../../../../context/layout'
import useWindow from '../../../../hooks/useWindow'

const Menu = ({ handleToggleMenu }) => {
  const { isMobile } = useWindow()
  const [{ refs }] = useLayout()  

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

  return (
    <div ref={refs.navMenu} className="menu">
      <motion.ul
        // transition={{ delay: 3 }}
        // variants={{ show: { opacity: 1 }, hidden: { opacity: 0 }}}
        // animate='show'
        // initial='hidden'
      >
        <li data-slug='/articles' onClick={handleOnClick}>
          <Link to='/articles'>
            Articles
          </Link>
        </li>
        <li data-slug='/projects' onClick={handleOnClick}>
          <Link to='/projects'>
            Projects
          </Link>
        </li>
        <li data-slug='/about' onClick={handleOnClick}>
          <Link to='/about'>
            About
          </Link>
        </li>
          {/* <li>
            <Link to='/contact'>
              Contact
            </Link>
          </li> */}
      </motion.ul>
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
    </div>
  )
}

export default Menu