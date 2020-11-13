import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from '../components/SEO'
import Splash from '../components/layout/splash/splash'
import HomeProjects from "../components/home-projects/home-projects"
import PostsList from "../components/posts-list/posts-list"
import PageWrapper from '../components/page-wrapper'
import Instagram from '../components/instagram/instagram'

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
      <SEO
        url={location.href}
        title='Manel Escuer - Frontend Developer'
        description='Frontend developer specialized on React who loves to cook and tries to bootstrap projects that at some point, will retire me'
      />
      <PageWrapper>
        <Splash image={splashImage} />
        <PostsList title='Recently published' posts={posts} />
        <HomeProjects projects={projectsWithImages} />
        <div className="cont pt-8 pb-20">
          <div className="cont-inner items-center flex-col lg:flex-row">        
            <Instagram />
          </div>
        </div>
      </PageWrapper>
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
          ...GatsbyImageSharpFixed_withWebp
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
            stack
            description
            background
            github
          }
          fields {
            slug
          }            
        }
      }
    }    
  }
`