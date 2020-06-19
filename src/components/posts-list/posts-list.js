import React, { useCallback } from 'react'
import { Link, navigate } from 'gatsby'

const createMarkup = __html => ({ __html })

const PostsList = ({ posts = [] }) => {
  const goTo = useCallback(e => {
    e.preventDefault()
    e.stopPropagation()
    const url = e.currentTarget.getAttribute('data-path')
    navigate(url)
  }, [])
  
  return (
    <div className="posts-list cont">
      <div className="cont-inner flex-col">
        <h2>posts</h2>

        <div className='posts-wrapper'>
          {posts.length && posts.map(({ post }) => (
            <div key={post.frontmatter.path} className="post" data-path={post.frontmatter.path} onClick={goTo}>
              <div className='post-inner'>
                <h3 className='text-2xl'>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <div dangerouslySetInnerHTML={createMarkup(post.excerpt)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostsList