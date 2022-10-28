import { graphql, useStaticQuery } from 'gatsby';

export default function useMenuStructure() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query MenuStructureQuery {
        allMarkdownRemark(filter: { frontmatter: { language: { eq: "uk" } } }) {
          nodes {
            frontmatter {
              language
              page_chapter_name
              page_chapter_title
              page_title
              slug
              link_chapter_name
              link_chapter_title
              links_items {
                link_title
                links_range
                url_adress
              }
            }
            fields {
              slug
            }
            html
          }
        }
      }
    `
  );
  // }

  // );
  // export default function useMenuStructure() {
  //   const { allMarkdownRemark } = useStaticQuery(
  //     graphql`
  //       query MenuStructureQuery {
  //         allMarkdownRemark {
  //           edges {
  //             node {
  //               fields {
  //                 slug
  //               }
  //               frontmatter {
  //                 description
  //                 title
  //                 templateKey
  //                 language
  //               }
  //               tableOfContents(pathToSlugField: "fields.slug", absolute: true)
  //               html
  //             }
  //           }
  //         }
  //       }
  //     `
  //   )
  return allMarkdownRemark.nodes;
}
