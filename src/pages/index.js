import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from 'framer-motion'

import SEO from '../components/SEO'
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

export default function Home ({ location }) {
  const {
    latestPosts: { posts },
    homeProjects: { projects },
    images: { splashImage },
    homeProjectImages: { projectImages }
  } = useStaticQuery(query)


  const projectsWithImages = useMemo(() => projects.map(({ project }) => {
    const slug = project.fields.slug.replace(/\/projects\//gi, '').slice(0, -1)
    const image = projectImages.find(({ projectImage }) => projectImage.name === slug)

    if (image) {
      return { ...project, image: image.projectImage }
    }

    return project
  }), [projects, projectImages])

  return (
    <>
      <SEO url={location.href} />
      <motion.div
        variants={variants}
        animate='animate'
        initial='initial'
        exit='exit'
      >
        <Splash image={splashImage} />
        <PostsList title='Recently published' posts={posts} />
        <HomeProjects projects={projectsWithImages} />
      </motion.div>
    </>
  )
}

const query = graphql`
  query {
    latestPosts: allMdx(
      filter: { fileAbsolutePath: { regex : "\/articles/" } }
    ) {
      posts: edges {
        post: node {
          id
          body
          excerpt
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

    images: file(
      relativePath: { eq: "manelet-dark.png" }
    ) {
      splashImage: childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }

    homeProjectImages: allFile(
      filter: {
        relativeDirectory: { eq: "projects" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      projectImages: edges {
        projectImage: node {
          image: childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }  
          }
          name
        }
      }
    }

    homeProjects: allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      projects: edges {
        project: node {
          frontmatter {
            name
            url
            github
            stack
            description
            bg_color
            has_image
          }
          fields {
            slug
          }            
        }
      }
    }    
  }
`