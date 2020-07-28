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
              key={slug}
              className={cn(`${frontmatter.bg_color}-600`)}
            >
              <div>
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