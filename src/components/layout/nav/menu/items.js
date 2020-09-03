import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { navigate, Link } from 'gatsby'

import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../../../dropdown/dropdown'
import useWindow from '../../../../hooks/useWindow'
import useCategories from '../../../../hooks/useCategories'
import { useLayout } from '../../../../context/layout'
import { itemAnimation } from './animations'

const Items = () => {
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

  return (
    <ul>
      <motion.li
        data-slug='/articles'
        onClick={handleOnClick}
        variants={isTablet && itemAnimation}
      >
        <Dropdown>
          <DropdownToggle>
            <Link to='/articles'>
              Articles
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
      >
        <Link to='/projects'>
          Projects
        </Link>
      </motion.li>
      <motion.li
        data-slug='/about'
        onClick={handleOnClick}
        variants={isTablet && itemAnimation}
      >
        <Link to='/about'>
          About
        </Link>
      </motion.li>
        <motion.li variants={isTablet && itemAnimation}>
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
  )
}

export default Items