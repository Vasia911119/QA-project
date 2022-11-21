import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MetadataQuery {
        site {
          siteMetadata {
            siteUrl
            title
            description
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
