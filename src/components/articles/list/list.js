import React, { useCallback } from 'react'
import { navigate, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import h from '../h'

import './list.css'

const List = ({ title, posts }) => {
  const handleNavigate = useCallback(e => navigate(e.currentTarget.dataset.slug), [])

  if (!posts || !posts.length) {
    return (
      <div className="cont-inner items-start flex-col">
        No posts.
      </div>
    )
  }

  return (
    <div className="cont-inner items-start flex-col">
      {title && (
        <h.h1 className='uppercase text-sm'>
          {title}
        </h.h1>
      )}

      {posts.map(({ post }) => (
        <article
          className='articles-item'
          key={`posts-${post.fields.slug}`}
        >
          <Link to={post.fields.slug} className='text-4xl font-bold'>
            {post.frontmatter.title}
          </Link>

          <p className='my-3'>
            <MDXRenderer onlyExcerpt={true}>
              {post.body}
            </MDXRenderer>
          </p>

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
        </article>
      ))}
    </div>
  )
}

export default List