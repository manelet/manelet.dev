import React, { useCallback } from 'react'
import { Link, navigate } from 'gatsby'
import { motion } from 'framer-motion'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useWindow from '../../hooks/useWindow'

import './posts-list.css'

const createMarkup = __html => ({ __html })
const boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'

const PostsList = ({ title, posts = [] }) => {
  const { isMobile } = useWindow()
  const goTo = useCallback(e => {
    e.preventDefault()
    e.stopPropagation()
    const url = e.currentTarget.getAttribute('data-path')
    navigate(url)
  }, [])

  const hoverAnimation = !isMobile ? { scale: 1.05, boxShadow }: null

  return (
    <div className="posts-list cont">
      <div className="cont-inner flex-col">
        {title && (
          <h2 className='font-bold text-3xl'>{title}</h2>
        )}

        <div className='posts-wrapper'>
          {posts.length && posts.map(({ post }) => (
            <motion.div
              whileHover={hoverAnimation}
              key={`postlist-${post.fields.slug}`}
              className="post"
              data-path={post.fields.slug}
              onClick={goTo}
            >
              <div className='post-inner'>
                <h3 className='text-2xl'>
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <MDXRenderer onlyExcerpt={true}>
                  {post.body}
                </MDXRenderer>                
                {/* <div dangerouslySetInnerHTML={createMarkup(post.excerpt)} /> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostsList