import React from 'react'
import { graphql } from "gatsby"

import List from '../../components/articles/list/list'
import SEO from '../../components/SEO'
import PageWrapper from '../../components/page-wrapper'

const Category = ({ pageContext: category, data: { allPosts: { posts } } }) => {  
  return (
    <>
      <SEO title='Categories' description='List of articles written by Manel Escuer grouped by categories' />
      <PageWrapper className='page cont page-category'>
        <List title={category.name} posts={posts} />
      </PageWrapper>
    </>
  )
}

export const pageQuery = graphql`
  query($name: String!) {
    allPosts: allMdx (
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: {
        fileAbsolutePath: { regex : "/articles/" }
        frontmatter: { categories: { in: [$name] } }
      }
    ) {
      posts: edges {
        post: node {
          body
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Category