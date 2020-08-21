import React, { useState, useCallback, useEffect } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
// import { Link } from 'gatsby'

// import useWindow from '../../../hooks/useWindow'
import Burger from '../../burger/burger'
import { useLayout } from '../../../context/layout'
import handleNavScroll from '../../../lib/navScroll'
import Logo from './logo/logo'
import Menu from './menu/menu'
import toggleMenu from './toggle-menu'

const Nav = ({ path }) => {
  // const { isMobile, width, height } = useWindow()
  const [mounted, setMounted] = useState(true)
  const [{ theme, refs }] = useLayout()  
  const isHome = path === '/'
  const isDark = theme === 'dark'

  const handleToggleMenu = useCallback(
    () => toggleMenu({
      burger: refs.burger.current,
      navInner: refs.navInner.current,
      navMenu: refs.navMenu.current
    }),
    [refs.burger, refs.navInner, refs.navMenu]
  )

  const handleScroll = useCallback(() =>
    handleNavScroll(
      refs.nav.current,
      refs.navInner.current,
      refs.splash.current,
      isDark,
      isHome
    ),
    [isDark, isHome, refs.nav, refs.navInner, refs.splash]
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
      <nav ref={refs.nav} className={cn('cont fixed', isHome && 'home')}>
        <div ref={refs.navInner} className='cont-inner nav-inner'>
          <Logo  />
          <Menu handleToggleMenu={handleToggleMenu} />
          <Burger onClick={handleToggleMenu} ref={refs.burger} />
        </div>
    </nav>
  )
}

export default Nav