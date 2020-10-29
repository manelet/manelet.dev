import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon } from 'react-share'
import { motion } from 'framer-motion'
import slugify from 'slugify'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import SEO from '../../components/SEO'
import H1 from '../../components/articles/h1'
import Instagram from '../../components/instagram/instagram'

import './article.css'

dayjs.extend(relativeTime)

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
  const dateObj = dayjs(frontmatter.date, 'MMMM DD, YYYY')
  const numberOfDaysSincePublication = dayjs().diff(dateObj, 'day')

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

                <div className="py-4 w-full flex justify-between items-center border-t border-b border-gray-200">
                  <motion.time
                    className='block text-subtext'
                    dateTime={frontmatter.date}
                    itemProp="datePublished"
                    variants={{ initial: { opacity: 0, scale: .7 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: .7 }}}                  
                  >
                    {numberOfDaysSincePublication <= 60 ? dateObj.fromNow() : dateObj.format('dddd, MMMM D YYYY')}
                  </motion.time>                
                  
                  <div className="flex items-center">
                    <div className='w-10 h-10 rounded-full overflow-hidden mr-3 shadow-md'>
                      <img src='/images/avatar.jpg' />
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-sm font-bold'>Manel Escuer</span>
                      <span className='text-xs'>
                        <a className='text-blue-500 underline' href='https://twitter.com/manelescuer' target='_blank'>
                          @manelescuer
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 w-full">
                <MDXRenderer headings={headings}>
                  {body}
                </MDXRenderer>
              </div>

              <div className="mt-5 w-full">
                <Instagram />
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