const path = require(`path`)
const { getAllProjects, getAllArticles, getAllCategories } = require('./queries')

const createCategories = async graphql => {
  const component = path.resolve(`src/templates/category/category.js`)
  const result = await graphql(getAllCategories)

  return result.data.allMdx.edges.map(({ node }) => console.log(node) || ({
    path: node.fields.slug,
    component,
    context: {
      slug: node.fields.slug
    },
  }))
}

const createArticles = async graphql => {
  const component = path.resolve(`src/templates/article/article.js`)
  const result = await graphql(getAllArticles)

  return result.data.allMdx.edges.map(({ node }) => console.log(node) || ({
    path: node.fields.slug,
    component,
    context: {
      slug: node.fields.slug
    },
  }))
}

const createProjects = async graphql => {
  const component = path.resolve(`src/templates/project/project.js`)
  const result = await graphql(getAllProjects)

  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }

  return result.data.allMdx.edges.map(({ node }) => ({
    path: node.fields.slug,
    component,
    context: {
      slug: node.fields.slug,
      name: node.frontmatter.name
    },
  }))
}

const createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const pages = await Promise.all([createArticles(graphql), createProjects(graphql), createCategories(graphql)])
  pages.flat().forEach(page => createPage(page))
}

module.exports = createPages
