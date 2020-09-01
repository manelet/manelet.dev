const path = require(`path`)
const slugify = require('slugify')
const { getAllProjects, getAllArticles, getAllCategories } = require('./queries')

const createCategories = async graphql => {
  const component = path.resolve(`src/templates/category/category.js`)
  const result = await graphql(getAllCategories)
  const categories = Array.from(result.data.allMdx.edges.reduce((set, { node }) => {
    if (!node.frontmatter.categories || !node.frontmatter.categories.length) {
      return set
    }

    node.frontmatter.categories.map(category => {
      set.set(category, {
        slug: slugify(category, { lower: true }),
        name: category
      })
    })
    
    return set
  }, new Map()))
  
  return categories.map(([, { slug, name }]) => console.log(slug, name) || ({
    path: `/category/${slug}`,
    component,
    context: {
      slug,
      name
    }      
  }))
}

const createArticles = async graphql => {
  const component = path.resolve(`src/templates/article/article.js`)
  const result = await graphql(getAllArticles)

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
  const pages = await Promise.all([
    createArticles(graphql),
    createProjects(graphql),
    createCategories(graphql)
  ])
  pages.flat().forEach(page => createPage(page))
}

module.exports = createPages
