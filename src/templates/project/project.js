import React from "react"
import { graphql } from "gatsby"

import SEO from '../../components/seo'
import Projects from "../../components/projects/projects"

export default props => (
  <>
    <SEO
      slug={props.data.mdx.fields.slug}
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
        background
        call_to_action
        github
      }
      fields {
        slug
      }      
    }   
  }
`