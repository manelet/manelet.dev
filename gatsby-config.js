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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: `projects`,
      },      
    },    
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        "excerpt_separator": `<!--more-->`
      }
    }
  ]
}   
