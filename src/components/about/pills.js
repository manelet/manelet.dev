import React from 'react'
import cn from 'classnames'

import { Pills, Pill } from '../pills/pills'
import smoothScroll from '../../lib/smoothScroll'

export const pages = {
  beginnings: '/about',
  career: '/about/career',
  entrepreneurship: '/about/entrepreneurship',
  // skills: '/about/skills'
}

export default ({ pathname, refs }) => {
  const isActive = slug => pathname === slug || pathname === `${slug}/`
  const offset = refs.aboutHeader.current && refs.nav.current
    ? refs.aboutHeader.current.offsetHeight + refs.nav.current.offsetHeight
    : 0

  return (
    <Pills>
      {Object.keys(pages).map(name => (
        <Pill
          key={`pill-${name}`}
          className={cn(`pill__${name}`, isActive(pages[name]) && 'active')}
          onClick={() => smoothScroll(`#about-${name}`, offset)}
        >
          {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
        </Pill>
      ))}         
    </Pills>
  )
}