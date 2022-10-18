import { graphql, useStaticQuery } from 'gatsby'

export default function useMenuStructure() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query MenuStructureQuery {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                description
                title
                templateKey
              }
              tableOfContents(pathToSlugField: "fields.slug", absolute: true)
              html
            }
          }
        }
      }
    `
  )

  return allMarkdownRemark.edges
}
