import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from 'framer-motion'

import Splash from '../components/layout/splash/splash'
import HomeProjects from "../components/home-projects/home-projects"
import PostsList from "../components/posts-list/posts-list"

export default function Home () {
  const { latestPosts: { posts } } = useStaticQuery(graphql`
    query {
      latestPosts: allMdx(
        filter: { fileAbsolutePath: { regex : "\/articles/" } }
      ) {
        posts: edges {
          post: node {
            id
            excerpt(pruneLength: 280)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `)
  
  return (
    <motion.div style={{ border: '3px solid green' }} magicId='wrapper' magic>
      <Splash />
      <HomeProjects />
      <PostsList title='Recently published' posts={posts} />
    </motion.div>
  )
}
