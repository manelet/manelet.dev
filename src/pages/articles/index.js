import React, { useCallback } from 'react'
import { Link, navigate, useStaticQuery, graphql } from "gatsby"
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

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

  const handleNavigate = useCallback(e => navigate(e.currentTarget.dataset.slug), [])

  return (
    <div
      className="page cont"
    >
      <div className="cont-inner items-start flex-col">
        {!posts || !posts.length && (
          <>No posts.</>
        )}
        {posts.map(({ post }) => (
          <div
            className='articles-item'
            key={post.fields.slug}
          >
            <Link to={post.fields.slug} className='text-4xl'>
              {post.frontmatter.title}
            </Link>

            <p className='my-3'>{post.excerpt}</p>

            <div
              className='read-more'
              data-slug={post.fields.slug}
              onClick={handleNavigate}
            >
              <span className="text">
                Read more&nbsp;
              </span>
              <span className='arr'>
                &raquo;
              </span>
              <span className='arr'>
                &rsaquo;
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Articles