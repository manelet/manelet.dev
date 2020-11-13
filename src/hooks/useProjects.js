import { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function useProjects (id = false) {
  let {
    allProjects: { projects },
    allProjectImages: { projectImages }
  } = useStaticQuery(query)
  
  projects = useMemo(() => projects.map(({ project }) => {
    const slug = project.fields.slug.replace(/\/projects\//gi, '').slice(0, -1)
    const image = projectImages.find(({ projectImage }) => projectImage.name === slug)

    if (image) {
      return { ...project, image: image.projectImage }
    }

    return project
  }), [projects, projectImages])

  if (id) {
    return projects.find(({ project }) => project.id === id)
  }

  return projects
}

const query = graphql`
  query {
    allProjects: allMdx(
      sort: { order: DESC, fields: [frontmatter___name] }
      filter: { fileAbsolutePath: { regex : "\/projects/" } }
    ) {
      projects: edges {
        project: node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            name
            url
            stack
            description
            background
            call_to_action
            github
          }
        }
      }
    }

    allProjectImages: allFile(
      filter: {
        relativeDirectory: { eq: "projects" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      projectImages: edges {
        projectImage: node {
          image: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }  
          }
          name
        }
      }
    }      
  }
`

export default useProjects