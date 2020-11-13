require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const IMAGE_WIDTH = 300
const { URL } = process.env

module.exports = {
  siteMetadata: {
    title: 'Manel Escuer - Frontend developer',
    titleTemplate: "%s - Manel Escuer",
    siteUrl: URL,
    twitterUsername: '@manelescuer',
    description: 'Frontend developer specialized on ⚛️ React who loves to cook and tries to bootstrap projects that at some point, will retire me'
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-svgr',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      }
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },      
    },   
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },      
    },    
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      },
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: IMAGE_WIDTH,
            sizeByPixelDensity: true
          }
        }       
      ]      
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176053058-1",
        head: false,
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      }  
    }   
  ]
}   
