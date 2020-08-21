import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from 'framer-motion'

import Splash from '../components/layout/splash/splash'
import HomeProjects from "../components/home-projects/home-projects"
import PostsList from "../components/posts-list/posts-list"

const variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

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
    <motion.div variants={variants} animate='animate' initial='initial' exit='exit'>
      <Splash />
      <HomeProjects />
      <PostsList title='Recently published' posts={posts} />
    </motion.div>
  )
}
