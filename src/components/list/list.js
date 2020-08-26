import React, { useCallback } from 'react'
import { navigate, Link } from 'gatsby'
import cn from 'classnames'

const List = ({ items }) => {
  const goToProject = useCallback(e => {
    e.preventDefault()
    e.stopPropagation()
    const url = e.currentTarget.getAttribute('data-path')
    navigate(url)
  }, [])
  
  return (
    <div>
      <ul>
        {items.map(({ project: { fields: { slug }, frontmatter } }) => {    
          return (
            <li
              onClick={goToProject}
              data-path={slug}
              key={`post-${slug}`}
            >
              <div style={{
                backgroundColor: frontmatter.bg_color,
                backgroundImage: `url('/images${slug.slice(0, -1)}.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}>
                <h2>
                  <Link to={slug}>
                    {frontmatter.name}
                  </Link>
                </h2>
                {frontmatter.description}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List