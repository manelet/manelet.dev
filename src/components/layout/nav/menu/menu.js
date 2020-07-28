import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

import ThemeToggle from '../../../ThemeToggle'
import { useLayout } from '../../../../context/layout'

const Menu = () => {
  const [{ refs }] = useLayout()  

  return (
    <div ref={refs.navMenu} className="menu">
      <motion.ul
        // transition={{ delay: 3 }}
        // variants={{ show: { opacity: 1 }, hidden: { opacity: 0 }}}
        // animate='show'
        // initial='hidden'
      >
        <li>
          <Link to='/articles'>
            Articles
          </Link>
        </li>
        <li>
          <Link to='/projects'>
            Projects
          </Link>
        </li>
        <li>
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

        <div className='icon'>
          <a href='/rss.xml' target='_blank'>
            <i className="fas fa-rss" />
          </a>
        </div>

        <ThemeToggle />
      </div>
    </div>
  )
}

export default Menu