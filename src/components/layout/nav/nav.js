import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import Burger from '../../burger/burger'
import { useLayout } from '../../../context/layout'
import handleNavScroll from '../../../lib/navScroll'
import Logo from './logo/logo'
import Menu from './menu/menu'

const Nav = ({ path }) => {
  const isHome = path === '/'
  const [mounted, setMounted] = useState(true)
  const [{ theme, refs }] = useLayout() 

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
    }  

    if (theme && mounted) {
      const onScroll = handleNavScroll(refs)
      onScroll()

      window.addEventListener('scroll', onScroll)

      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }
    // eslint-disable-next-line
  }, [mounted, theme])

  return (
    <header>
      <nav ref={refs.nav} className={cn('cont fixed', isHome && 'home')}>
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