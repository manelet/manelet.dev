import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon } from 'react-share'
import { motion } from 'framer-motion'
import slugify from 'slugify'

import SEO from '../../components/SEO'
import H1 from '../../components/articles/h1'

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
  const { data: { mdx: { headings, excerpt, body, frontmatter } } } = props

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={excerpt}
      />
      <motion.div
        className="post cont"
        variants={variants}
        animate='animate'
        initial='initial'
        exit='exit'
        itemscope
        itemtype="http://schema.org/Article"
      >
        <div className="cont-inner items-start flex-col">
          <div className="w-full flex">
            <article className="flex flex-col w-full">
              <div className="w-full">
                <H1 className='text-5xl font-bold' itemProp="name">
                  {frontmatter.title}
                </H1>
                <motion.time
                  className='text-subtext'
                  dateTime={frontmatter.date}
                  itemProp="datePublished"
                  variants={{ initial: { opacity: 0, scale: .7 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: .7 }}}
                >
                  {frontmatter.date}
                </motion.time>
              </div>
              
              <div className="mt-5 w-full">
                <MDXRenderer headings={headings}>
                  {body}
                </MDXRenderer>
              </div>
            </article>

            <div
              className="hidden lg:sticky mb-auto lg:flex flex-col w-auto ml-20 flex-shrink-0"
              style={{ top: '130px' }}
            >
              {headings && !!headings.length && (
                <aside className='toc'>
                  <div className='text-xl font-bold'>Table Of Contents</div>
                  <ul>
                    {headings.map(({ value, depth }) => (
                      <li key={`heading-${value}`}>
                        <a
                          name={value}
                          title={value}
                          href={`#${slugify(value, { lower: true })}`}
                          style={{ paddingLeft: `${4 * (depth - 1)}px`}}
                        >
                          {value}                        
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}              
              <div className="share">
                <div className="flex flex-row">
                  <LinkedinShareButton quote={frontmatter.title} url={'http://localhost:3000'} className='mr-3'>
                    <LinkedinIcon size='42' round />
                  </LinkedinShareButton>
                  <TwitterShareButton quote={frontmatter.title} url={'http://localhost:3000'}>
                    <TwitterIcon size='42' round />
                  </TwitterShareButton>          
                </div>
              </div>          
            </div>            
          </div>
        </div>  
      </motion.div>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      headings {
        depth
        value
      }      
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`