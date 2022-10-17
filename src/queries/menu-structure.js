import { graphql, useStaticQuery } from 'gatsby'

export default function useMenuStructure() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query MenuStructureQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "component" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                description
                title
              }
              tableOfContents(pathToSlugField: "fields.slug", absolute: true)
            }
          }
        }
      }
    `
  )

  return allMarkdownRemark.edges
}
