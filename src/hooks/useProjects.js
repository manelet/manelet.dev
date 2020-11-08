import { graphql, useStaticQuery } from 'gatsby'

function useProjects (id = false) {
  const { allProjects: { projects } } = useStaticQuery(graphql`
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
    }
  `)
  
  if (id) {
    return projects.find(({ project }) => project.id === id)
  }

  return projects
}

export default useProjects