import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ image, width, height, description, title }) => {
  const { site: { siteMetadata } } = useStaticQuery(query)

  return (
    <Helmet titleTemplate={ siteMetadata.titleTemplate}>
      <title>{title || siteMetadata.title}</title>
      <meta name='description' content={description || siteMetadata.description} />
      <meta name="twitter:card" content={description || siteMetadata.description} />
      <meta name="twitter:site" content={siteMetadata.twitterUsername} />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta property="og:description" content={description || siteMetadata.description} />
      <meta property="og:locale" content="en_US" />
      <meta property='og:type' content='website' />
      <meta name="twitter:description" content={description || siteMetadata.description} />
      <meta name="twitter:title" content={title || siteMetadata.title} />
      <meta name="twitter:site" content="@manelescuer" />
      <meta name="twitter:creator" content="@manelescuer" />        
      {image && <meta name="twitter:card" content="summary_large_image" />}
      {image && <meta property="og:image" content={`${siteMetadata.siteUrl}${image}`} />}
      {image && width && <meta property="og:image:width" content={width} />}
      {image && height && <meta property="og:image:height" content={height} />}
      {image && <meta name="twitter:image:src" content={`${siteMetadata.siteUrl}${image}`} />}   
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
