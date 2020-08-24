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
          <div className="flex">
            <div className='tagged'>
              <i className="fas fa-link text-gray-400 mr-2" />
              {mdx.frontmatter.url}
            </div>
          </div>
          
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