import React, { memo, useCallback } from 'react'
import { navigate, Link } from 'gatsby'
import Img from 'gatsby-image'

const Item = ({ image, frontmatter, fields: { slug } }) => {
  const goToProject = slug => e => {
    e.preventDefault()
    e.stopPropagation()
    navigate(slug)
  }
  
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
      onClick={goToProject(slug)}
      key={`post-${slug}`}
      className='relative'
      style={liStyle}
    >
      <div className='flex flex-col z-10 w-full h-full justify-center'>
        <h2 className='mt-auto'>
          <Link to={slug}>
            {frontmatter.name}
          </Link>
        </h2>
        {frontmatter.description}

        <button onClick={goToProject(slug)}>
          Learn more
        </button>
      </div>
      
      <div
        style={{ background: frontmatter.bg_color }}
        className='bg'
      >
        {image && <Img fluid={image.image.fluid} />}
      </div>
    </li>
  )
}

export const query = slug => `
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