import React, { Suspense, useLayoutEffect, useCallback, useEffect } from 'react'
import cn from 'classnames'

import { useLayout } from '../../../context/layout'
import ThemeToggle from '../../ThemeToggle'
import handleNavScroll from '../../../lib/navScroll'

const Nav = ({ path }) => {
  const [{ theme, refs }] = useLayout()  
  const isHome = path === '/'
  const isDark = theme === 'dark'
  const handleScroll = useCallback(() =>
    handleNavScroll(
      refs.nav.current,
      refs.navMenu.current,
      refs.splash.current,
      isHome,
      isDark
    ),
    [isDark, isHome, refs.nav, refs.navMenu, refs.splash]
  )

  useEffect(() => {
    if (theme) {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, theme])

  if (!theme) {
    return null
  }

  return (
      <nav ref={refs.nav} className={cn(
        'cont',
        isHome && 'home',
        // isHome ? 'text-white' : 
      )}>
        <div className='cont-inner py-3'>
          <div className='flex w-full justify-between relative'>
            <div
              className='logo'
              ref={refs.navMenu} 
              // className={cn(path === '/' && 'hidden', 'left')}
            >
              Manel

              {/* <ul>
                <li>Articles</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
              </ul> */}
            </div>
            <div className="right flex ml-auto">
              <div className='relative mr-3 cursor-pointer'>
                <i className="fab fa-twitter" />
              </div>

              <div className='relative mr-3 cursor-pointer'>
                <i className="fab fa-github" />
              </div>

              <div className='relative mr-3 cursor-pointer'>
                <i className="fas fa-rss" />
              </div>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Nav