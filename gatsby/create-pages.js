const path = require(`path`)
const { getAllProjects, getAllArticles } = require('./queries')

const createArticles = async graphql => {
  const component = path.resolve(`src/templates/article/article.js`)
  const result = await graphql(getAllArticles)

  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }

  return result.data.allMdx.edges.map(({ node }) => ({
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
  const pages = await Promise.all([createArticles(graphql), createProjects(graphql)])
  pages.flat().forEach(page => createPage(page))
}

module.exports = createPages
