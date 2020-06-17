module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles`,
        name: `articles`,
      },      
    },
    'gatsby-transformer-remark'
  ]
}   
