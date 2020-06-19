import React, { useLayoutEffect, useCallback } from 'react'
import cn from 'classnames'
import { useRecoilState } from 'recoil'

import { themeSelector } from '../../../state/theme'
import { useLayout } from '../../../context/layout'
import ThemeToggle from '../../ThemeToggle'

const Nav = ({ path }) => {
  const [theme, toggleTheme] = useRecoilState(themeSelector)
  const refs = useLayout()
  const isDark = theme === 'dark'

  const handleScroll = useCallback(() => {
    const { height: navHeight } = refs.nav.current.getBoundingClientRect()
    const { height: splashHeight } = refs.splash.current.getBoundingClientRect()

    if (window.scrollY > (splashHeight - navHeight)) {
      refs.nav.current.classList.add('text-gray-800')
      refs.nav.current.classList.remove('text-white')
    } else {
      refs.nav.current.classList.remove('text-gray-800')
      refs.nav.current.classList.add('text-white')
    }
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])  
    
  return (
    <nav ref={refs.nav} className={cn('cont', path === '/' && 'home')}>
      <div className='cont-inner py-3'>
        <div className='flex w-full justify-between'>
          <div className={cn(path === '/' && 'hidden', 'left')}>
            left
          </div>
          <div className="right ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav