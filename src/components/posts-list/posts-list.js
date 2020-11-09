import React from 'react'
import { Link, navigate } from 'gatsby'
import { motion } from 'framer-motion'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import useWindow from '../../hooks/useWindow'

import './posts-list.css'

const boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
dayjs.extend(relativeTime)

const PostsList = ({ title, posts = [] }) => {
  const { isMobile } = useWindow()
  const goTo = url => e => {
    e.preventDefault()
    e.stopPropagation()
    navigate(url)
  }

  const goToArticles = () => navigate('/articles')

  const hoverAnimation = !isMobile ? { scale: 1.15, boxShadow, borderRadius: '5px' }: null

  return (
    <div id='home-articles' className="posts-list cont">
      <div className="cont-inner flex-col">
        {title && (
          <h2 className='font-bold text-3xl my-10'>{title}</h2>
        )}

        <div className='posts-wrapper'>
          {posts.length && posts.map(({ post }) => {
            const dateObj = dayjs(post.frontmatter.date, 'MMMM DD, YYYY')
            const numberOfDaysSincePublication = dayjs().diff(dateObj, 'day')
            
            return (
              <motion.div
                whileHover={hoverAnimation}
                key={`postlist-${post.fields.slug}`}
                className="post"
                onClick={goTo(post.fields.slug)}
              >
                <div className='post-inner flex flex-col-reverse md:flex-row w-full'>
                  <div className='md:flex-shrink-0 w-full md:w-48 text-gray-500'>
                    {numberOfDaysSincePublication <= 60 ? dateObj.fromNow() : dateObj.format('DD/MM/YY')}
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold'>
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>

                    <MDXRenderer onlyExcerpt={true}>
                      {post.body}
                    </MDXRenderer>                
                  </div>
                </div>
              </motion.div>
            )}
          )}
        </div>

        <button onClick={goToArticles}>
          View all
        </button>
      </div>
    </div>
  )
}

export default PostsList