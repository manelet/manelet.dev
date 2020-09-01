import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { motion } from 'framer-motion'

import Layout from '../../components/project-layout'
import SEO from '../../components/SEO'

import './project.css'

const titleVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 50
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1
  },
  exit: {
    y: 50,
    scale: 0.9,
    opacity: 0
  }
}

export default ({ data: { mdx }, ...props }) => (
  <>
    <SEO title={mdx.frontmatter.name} derscription={mdx.frontmatter.description} />
    <Layout {...props}>
      <motion.div
        transition={{ duration: 1 }}
        className="project"
        initial='initial'
        animate='animate'
        exit='exit'
        variants={titleVariants}
        key={mdx.frontmatter.name}
      > 
        <div className="header">
          <div className="flex flex-col w-full rounded-lg text-5xl">
            {mdx.frontmatter.name}        
          </div>

          <p className='text-xl'>
            {mdx.frontmatter.description}
          </p>
        </div>
      
        <div className="flex justify-between my-5">
          {mdx.frontmatter.url && (
            <div className="flex">
              <div className='tagged'>
                <svg width='12' height='12' fill='#ffffff' viewBox="0 0 1792 1792" className='mr-2'>
                  <path d="M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z"/>
                </svg>

                {mdx.frontmatter.url}
              </div>
            </div>
          )}
          
          {mdx.frontmatter.tags && mdx.frontmatter.tags.length && (
            <div className="flex">
              {mdx.frontmatter.tags.map(tag => (
                <div key={`tag-${tag}`} className='tagged'>
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>

        <MDXRenderer>
          {mdx.body}
        </MDXRenderer>  
      </motion.div>   
    </Layout>    
  </>
)

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        name
        description
        url
        tags
      }
      fields {
        slug
      }      
    }   
  }
`