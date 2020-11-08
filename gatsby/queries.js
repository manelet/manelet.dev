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
      sort: { order: DESC, fields: [frontmatter___name] }
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
            background
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