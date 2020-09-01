import React, { Children, cloneElement } from 'react'
import { motion } from 'framer-motion'

import { ReactComponent as ArrowDown } from './arrow-down.svg'
import useWindow from '../../hooks/useWindow'
import { useDropdown } from './context'
import animations from './animations'

import './dropdown.css'

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
    <ArrowDown width='12' height='12' fill='#fff' className='ml-2' />
  </div>
)

const DropdownMenu = ({ children, refs, open, isTablet, style = {} }) => (
  <motion.div
    variants={!isTablet && animations}
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
