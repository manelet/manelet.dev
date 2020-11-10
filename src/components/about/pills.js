import React from 'react'
import { Link, navigate } from 'gatsby'
import cn from 'classnames'

import { Pills, Pill } from '../pills/pills'

export const pages = {
  beginnings: '/about',
  skills: '/about/skills',
  career: '/about/career',
  entrepreneurship: '/about/entrepreneurship'
}

export default ({ pathname }) => {
  const isActive = slug => pathname === slug || pathname === `${slug}/`

  return (
    <Pills>
      {Object.keys(pages).map(name => (
        <Pill
          key={`pill-${name}`}
          className={cn('pill', name, isActive(pages[name]) && 'active')}
          onClick={() => navigate(pages[name])}
        >
          <Link to={pages[name]}>
            {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
          </Link>
        </Pill>
      ))}         
    </Pills>
  )
}