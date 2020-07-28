const { createFilePath } = require(`gatsby-source-filesystem`)

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `Mdx` || node.internal.type === `Md`) {
    const value = createFilePath({ node, getNode })
    const sourceName = node.fileAbsolutePath.match(/(articles|projects)/)[0]
    const slug = `/${sourceName}${value}`
    
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}

module.exports = onCreateNode