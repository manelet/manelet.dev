import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon } from 'react-share'
import { motion } from 'framer-motion'

import H1 from '../../components/articles/h1'
import P from '../../components/articles/h1'

import './article.css'

const variants = {
  initial: {},
  animate: { 
    transition: {
      staggerChildren: .3
    }
  },
  exit: {}
}

export default function Template(props) {
  const { data: { mdx: { body, frontmatter } } } = props

  return (
    <motion.div
      className="post cont"
      variants={variants}
      animate='animate'
      initial='initial'
      exit='exit'
    >
      <div className="cont-inner items-start flex-col">
        <div className="w-full flex">
          
          <div className="flex flex-col w-full">
            <div className="text-center w-full">
              <H1 className='text-5xl font-bold'>
                {frontmatter.title}
              </H1>
              <P className='text-subtext'>{frontmatter.date}</P>
            </div>
            
            <div className="mt-5 w-full">
              <MDXRenderer>
                {body}
              </MDXRenderer>
            </div>
          </div>

          <div className="share">
            <div className="flex flex-col">
              <LinkedinShareButton quote={frontmatter.title} url={'http://localhost:3000'} className='mb-3'>
                <LinkedinIcon size='42' round />
              </LinkedinShareButton>
              <TwitterShareButton quote={frontmatter.title} url={'http://localhost:3000'}>
                <TwitterIcon size='42' round />
              </TwitterShareButton>          
            </div>
          </div>          
        </div>
      </div>  
    </motion.div>
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