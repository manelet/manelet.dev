import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import Burger from '../../burger/burger'
import { useLayout } from '../../../context/layout'
import handleNavScroll from '../../../lib/navScroll'
import Logo from './logo/logo'
import Menu from './menu/menu'

import './nav.css'

const Nav = ({ path, pageContext }) => {
  const isHome = path === '/'
  const isProject = path.includes('/projects/') && pageContext.name
  const [mounted, setMounted] = useState(true)
  const [{ theme, refs }] = useLayout() 

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
    }  

    if (theme && mounted) {
      const onScroll = handleNavScroll(refs, isHome, isProject)
      onScroll()

      window.addEventListener('scroll', onScroll)

      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }
    // eslint-disable-next-line
  }, [mounted, theme, path])

  return (
    <header>
      <nav ref={refs.nav} className={cn('cont fixed', (isHome || isProject) && 'home')}>
        <div ref={refs.navInner} className='cont-inner nav-inner'>
          <Logo  />
          <Menu path={path} isHome={isHome} />
          <Burger ref={refs.burger} />
        </div>
      </nav>
    </header>
  )
}

export default Nav