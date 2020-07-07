import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function Template(props) {
  const { data: { mdx: { body, frontmatter } } } = props
  console.log('asdasd', props);

  return (
    <div className="cont pt-8 pb-20" id='home-projects'>
      <div className="cont-inner items-start flex-col">
        <h1 className='text-4xl font-bold'>{frontmatter.title}</h1>
        <p className='text-subtext'>{frontmatter.date}</p>
        <div className="mt-5">
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </div>        
      </div>    
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`