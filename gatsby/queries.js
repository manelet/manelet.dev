exports.getAllArticles = `
  {
    allMdx (
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { fileAbsolutePath: { regex : "/articles/" } }
    ) {
      edges {
        node {
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

exports.getAllProjects = `
  {
    allMdx (
      limit: 1000
      filter: { fileAbsolutePath: { regex : "/projects/" } }
    ) {
      edges {
        node {
          id
          body
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
          }
        }
      }
    }
  }
`