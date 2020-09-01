import React, { Children, cloneElement } from 'react'
import { motion } from 'framer-motion'

import useWindow from '../../hooks/useWindow'
import { useDropdown } from './context'
import './dropdown.css'

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: .9,
    transitionEnd: {
      display: 'none'
    }
  },
  show: {
    opacity: 1,
    display: 'flex',
    scale: [1.05, 1.1, 1],
    transition: {
      duration: .2
    }
  }
}

const Dropdown = ({ children, style = {} }) => {
  const ctx = useDropdown()
  const { isTablet } = useWindow()

  return (
    <div
      ref={ctx.refs.wrapper}
      className='dropdown'
      style={style}
    >
      {Children.map(children, child => cloneElement(child, { ...ctx, isTablet }))}
    </div>
  )
}

const DropdownToggle = ({ children, refs }) => (
  <div ref={refs.toggle} className='dropdown-toggle'>
    {children}
  </div>
)

const DropdownMenu = ({ children, refs, open, isTablet, style = {} }) => (
  <motion.div
    variants={!isTablet && menuVariants}
    initial='hidden'
    animate={isTablet ? false : open ? 'show' : 'hidden'}
    ref={refs.menu}
    className='dropdown-menu'
  >
    <ul style={style}>
      {children}
    </ul>
  </motion.div>   
)

const DropdownItem = ({ children }) => (
  <li>
    {children}
  </li>
)

export default Dropdown 
export { DropdownItem, DropdownToggle, DropdownMenu }
