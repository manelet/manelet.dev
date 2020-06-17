import React from 'react'
import cn from 'classnames'
import ThemeToggle from '../../ThemeToggle'

const Nav = ({ path }) => {
  return (
    <nav className={cn('cont', path === '/' && 'home')}>
      <div className='cont-inner'>
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