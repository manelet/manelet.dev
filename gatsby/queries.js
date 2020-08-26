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
            categories
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
          excerpt(pruneLength: 280)
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

exports.getAllCategories = `
  {
    allMdx (
      limit: 1000
      filter: { fileAbsolutePath: { regex : "/articles/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            categories
          }
        }
      }
    }
  }
`