import React, { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { navigate, Link } from 'gatsby'
import cn from 'classnames'

import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../../../dropdown/dropdown'
import useWindow from '../../../../hooks/useWindow'
import useCategories from '../../../../hooks/useCategories'
import { useLayout } from '../../../../context/layout'
import { itemAnimation } from './animations'
import { ReactComponent as Line } from './line.svg'

const Items = ({ path }) => {
  const width = useRef(null)
  const [, { toggleMobileMenu }] = useLayout()
  const { isTablet } = useWindow()
  const categories = useCategories()

  const handleOnClick = useCallback(
    e => {
      e.preventDefault()
      e.stopPropagation()
      const slug = e.currentTarget.dataset.slug

      if (isTablet) {
        toggleMobileMenu()
      }

      navigate(slug)
    },
    [isTablet, toggleMobileMenu]
  )

  console.log('render', width);

  return (
    <ul>
      <motion.li
        data-slug='/articles'
        onClick={handleOnClick}
        variants={isTablet && itemAnimation}
        className={cn(path.includes('/articles') && 'active')}
      >
        <Dropdown>
          <DropdownToggle>
            <Link to='/articles'>
              Articles
              <Line />
            </Link>
          </DropdownToggle>
          <DropdownMenu style={{ width: '200px' }}>
            {categories.map(({ name, slug }) => (
              <DropdownItem key={`cat-${slug}`}>
                <div data-slug={`/category/${slug}`} onClick={handleOnClick}>
                  <Link to={`/category/${slug}`}>
                    {name}
                  </Link>
                </div>
              </DropdownItem>
            ))}              
          </DropdownMenu>
        </Dropdown>
      </motion.li>
      <motion.li
        data-slug='/projects'
        onClick={handleOnClick}
        variants={isTablet && itemAnimation}
        className={cn(path.includes('/projects') && 'active')}        
      >
        <Link to='/projects'>
          Projects
          <Line />
        </Link>
      </motion.li>
      <motion.li
        data-slug='/about'
        onClick={handleOnClick}
        variants={isTablet && itemAnimation}
        ref={node => {
          const link = node.querySelector('a')
          width.current = window.getComputedStyle(link).width
        }}
        className={cn(path.includes('/about') && 'active')}        
      >
        <Link to='/about'>
          About
          <Line />
        </Link>
      </motion.li>
        <motion.li variants={isTablet && itemAnimation}>
          <a
            name='Cooking instagram profile @maneleat'
            title='Cooking instagram profile @manelet'
            rel="noopener noreferrer"
            href='https://instagram.com/maneleat'
            target='_blank'
          >
            Cooking
            <Line />
          </a>
        </motion.li>
    </ul>
  )
}

export default Items