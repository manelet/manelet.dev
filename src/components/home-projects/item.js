import React, { memo, useCallback } from 'react'
import { navigate, Link } from 'gatsby'
import Img from 'gatsby-image'

const Item = ({ image, frontmatter, fields: { slug } }) => {
  const goToProject = useCallback(e => {
    e.preventDefault()
    e.stopPropagation()
    navigate(e.currentTarget.getAttribute('data-path'))
  }, [])
  
  // let styles = { backgroundColor: frontmatter.bg_color }

  // if (image) {
  //   styles = {
  //     ...styles,
  //     backgroundImage: `url('/images${slug.slice(0, -1)}.png')`,
  //     backgroundPosition: 'center',
  //     backgroundSize: 'cover'
  //   }
  // }

  const liStyle = !image ? { backgroundColor: frontmatter.bg_color } : {}

  return (
    <li
      onClick={goToProject}
      data-path={slug}
      key={`post-${slug}`}
      className='relative'
      style={liStyle}
    >
      <div className='z-10'>
        <h2>
          <Link to={slug}>
            {frontmatter.name}
          </Link>
        </h2>
        {frontmatter.description}
      </div>
      {image && (
        <div style={{ backgroundColor: frontmatter.bg_color }} className='absolute top-0 left-0 w-full h-full'>
          <Img fluid={image.image.fluid} />
        </div>
      )}
    </li>
  )
}

const query = slug => `
  query {
    images: file(
      relativePath: { eq: "${slug}" }
    ) {
      splashImage: childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default memo(Item)