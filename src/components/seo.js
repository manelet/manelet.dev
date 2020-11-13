import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import defaultImage from '../../static/images/homepage.png'

const SEO = ({ image, slug, description, title }) => {
  const { site: { siteMetadata } } = useStaticQuery(query)
  const imageUrl = image ? siteMetadata.siteUrl + image : defaultImage
  const url = `${siteMetadata.siteUrl}${slug || ''}`

  return (
    <Helmet titleTemplate={ siteMetadata.titleTemplate}>
      <title>{title || siteMetadata.title}</title>
      <meta name='description' content={description || siteMetadata.description} />
      <meta name="twitter:card" content={description || siteMetadata.description} />
      <meta name="twitter:site" content={siteMetadata.twitterUsername} />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta property="og:description" content={description || siteMetadata.description} />
      <meta property="og:locale" content="en_US" />
      <meta property='og:type' content='website' />
      <meta name="twitter:description" content={description || siteMetadata.description} />
      <meta name="twitter:title" content={title || siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:image:src" content={imageUrl} />
      {/* {image && width && <meta property="og:image:width" content={width} />}
      {image && height && <meta property="og:image:height" content={height} />}       */}
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
