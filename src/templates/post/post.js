import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon } from 'react-share'

export default function Template(props) {
  const { data: { mdx: { body, frontmatter } } } = props
  console.log('asdasd', props);

  return (
    <div className="post cont">
      <div className="cont-inner items-start flex-col">
        <h1 className='text-5xl font-bold'>{frontmatter.title}</h1>
        <p className='text-subtext'>{frontmatter.date}</p>
        <div className="mt-5 w-full">
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </div>
        <div className="share">
          <LinkedinShareButton quote={frontmatter.title} url={'http://localhost:3000'}>
            <LinkedinIcon round />
          </LinkedinShareButton>
          <TwitterShareButton quote={frontmatter.title} url={'http://localhost:3000'}>
            <TwitterIcon round />
          </TwitterShareButton>          
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