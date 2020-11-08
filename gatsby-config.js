const IMAGE_WIDTH = 300

module.exports = {
  siteMetadata: {
    title: 'Manel Escuer - Frontend developer',
    titleTemplate: "%s - Manel Escuer",
    siteUrl: 'https://manelet.dev',
    twitterUsername: '@manelescuer',
    description: 'Manel Escuer is a Frontend developer based in Barcelona specialized in development of user interfaces with React'
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.body }]
                }
              })
            },
            query: `
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
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
            match: "^/articles/"
          }
        ]
      }
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
