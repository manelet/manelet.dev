import React from "react"
import { graphql } from "gatsby"

import SEO from '../../components/SEO'
import Projects from "../../components/projects/projects"

export default props => (
  <>
    <SEO
      title={props.data.mdx.frontmatter.name}
      derscription={props.data.mdx.frontmatter.description}
    />
    <Projects {...props} />
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
        bg_color
        call_to_action
      }
      fields {
        slug
      }      
    }   
  }
`