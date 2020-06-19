import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Splash from '../components/layout/splash/splash'
import HomeProjects from "../components/home-projects/home-projects"
import PostsList from "../components/posts-list/posts-list"

export default function Home () {
  const { latestPosts: { posts } } = useStaticQuery(graphql`
    query {
      latestPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/articles/" } }
      ) {
        posts: edges {
          post: node {
            id
            excerpt(pruneLength: 280, format: HTML)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
      }
    }
  `)
  
  return (
    <>
      <Splash />
      <HomeProjects />
      <PostsList posts={posts} />
    </>
  )
}
