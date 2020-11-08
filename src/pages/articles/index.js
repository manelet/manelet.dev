import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import SEO from '../../components/SEO'
import List from '../../components/articles/list/list'

import './articles.css'

const Articles = () => {
  const { allPosts: { posts } } = useStaticQuery(graphql`
    query {
      allPosts: allMdx (
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex : "/articles/" } }
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
  `)

  return (
    <>
      <SEO title='Articles' description='List of articles written by Manel Escuer' />
      <List posts={posts} />
    </>
  )
}

export default Articles