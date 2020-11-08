import React, { memo } from 'react'
import { navigate, Link } from 'gatsby'
// import Img from 'gatsby-image'

const Item = ({ frontmatter, fields: { slug } }) => {
  const goToProject = slug => e => {
    e.preventDefault()
    e.stopPropagation()
    navigate(slug)
  }

  return (
    <li
      onClick={goToProject(slug)}
      key={`post-${slug}`}
      className='relative'
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
        style={{ background: frontmatter.background }}
        className='bg'
      />
        {/* {image && <Img fluid={image.image.fluid} />} */}
      {/* </div> */}
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