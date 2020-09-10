import { graphql, useStaticQuery } from 'gatsby'

function useProjects (id = false) {
  const { allProjects: { projects } } = useStaticQuery(graphql`
    query {
      allProjects: allMdx(
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
              github
              stack
              description
              bg_color
              has_image
            }
          }
        }
      }
    }
  `)
  
  if (id) {
    return projects.find(({ project }) => project.id === id)
  }

  return projects
}

export default useProjects