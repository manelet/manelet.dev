import { graphql, useStaticQuery } from 'gatsby'
import slugify from 'slugify'

function useCategories (slug) {  
  const result = useStaticQuery(graphql`
    query {
      allMdx (
        limit: 1000
        filter: { fileAbsolutePath: { regex : "/articles/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              categories
            }
          }
        }
      }
    } 
  `)

  const categories = Array.from(result.allMdx.edges.reduce((map, { node: curr }) => {
    if (!curr.frontmatter.categories || !curr.frontmatter.categories.length) {
      return map
    }

    curr.frontmatter.categories.forEach(category => {
      const slug = slugify(category, { lower: true })
      if (!map.has(slug)) {
        map.set(slug, { slug, name: category })
      }
    })

    return map
  }, new Map()).values())

  if (slug) {
    return categories.find(category => category.slug === slug)
  }

  return categories
}

export default useCategories