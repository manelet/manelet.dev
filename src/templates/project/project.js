import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/project-layout'

export default ({ data: { mdx }, ...props }) => console.log(mdx) || (
  <Layout {...props}>
    <div className="flex flex-col w-full bg-gray-100 rounded-lg mb-10">
      <div className="text-5xl">
        {mdx.frontmatter.name}        
      </div>
    </div>
    <MDXRenderer>
      {mdx.body}
    </MDXRenderer>    
  </Layout>
)

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        name
      }
      fields {
        slug
      }      
    }   
  }
`