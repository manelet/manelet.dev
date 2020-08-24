import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ url, description, title }) => {
  const { site: { siteMetadata } } = useStaticQuery(query)

  return (
    <Helmet titleTemplate={ siteMetadata.titleTemplate}>
      <title>{title || siteMetadata.title}</title>
      <meta name='description' content={description || siteMetadata.description} />
      <meta name="twitter:card" content={description || siteMetadata.description} />
      <meta name="twitter:site" content={siteMetadata.twitterUsername} />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      <meta property="og:url" content={url || siteMetadata.siteUrl} />
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta property="og:description" content={description || siteMetadata.description} />      
      {/* <meta property="og:image" content="" />       */}
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        twitterUsername
      }
    }
  }
`

export default SEO
