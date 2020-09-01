import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link, navigate, graphql } from "gatsby"

import SEO from '../../components/SEO'
import H1 from '../../components/articles/h1'

const Category = ({ pageContext: category, data: { allPosts: { posts } } }) => {  
  return (
    <>
      <SEO title='Categories' description='List of articles written by Manel Escuer grouped by categories' />
      <div className="page cont">
        <div className="cont-inner items-start flex-col">
          <H1 className='uppercase text-sm font-bold mb-4'>{category.name}</H1>

          {!posts || !posts.length && (
            <>No posts.</>
          )}
          {posts.map(({ post }) => (
            <div
              className='articles-item'
              key={`posts-${post.fields.slug}`}
            >
              <Link to={post.fields.slug} className='text-4xl'>
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
                // onClick={handleNavigate}
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