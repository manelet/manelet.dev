import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import SEO from '../../components/SEO'
import List from '../../components/articles/list/list'
import PageWrapper from '../../components/page-wrapper'

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
      <PageWrapper className='page cont'>
        <List posts={posts} />
      </PageWrapper>
    </>
  )
}

export default Articles