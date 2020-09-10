import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'

import { useLayout } from '../../../../context/layout'
import useWindow from '../../../../hooks/useWindow'
import Icons from './icons'
import Items from './items'
import { wrapperAnimation } from './animations'

import './menu.css'

const Menu = ({ path, isHome }) => {
  const { isTablet } = useWindow()
  const [{ refs, mobileMenuOpened }] = useLayout()

  // const onTransitionEnd = useCallback(() => {
  //   if (isTablet && !mobileMenuOpened) {
  //     refs.navMenu.current.classList.remove('menu-mobile-opened')
  //   }
  // }, [isTablet, mobileMenuOpened])

  const content = (
    <>
      <Items path={path} />
      <Icons isHome={isHome} />    
    </>
  )

  if (isTablet) {
    return (
      <motion.div
        ref={refs.navMenu}
        className={cn("menu", mobileMenuOpened && 'menu-mobile-opened')}
        variants={isTablet && wrapperAnimation}
        animate={!isTablet ? false : mobileMenuOpened ? 'show' : 'hidden'}
        initial={!isTablet ? false : 'hidden'}
        style={isTablet ? {} : { opacity: '1', display: 'flex' } }
        // onTransitionEnd={onTransitionEnd}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <div
      ref={refs.navMenu}
      className={cn("menu", mobileMenuOpened && 'menu-mobile-opened')}
    >
      {content}
    </div>
  )

}

export default Menu