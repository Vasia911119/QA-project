import { graphql, useStaticQuery } from 'gatsby';

export default function useMenuStructure() {
  // const { allMarkdownRemark } = useStaticQuery(
  //   graphql`
  //     query MenuStructureQuery {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             frontmatter {
  //               language
  //               chapter_title
  //               link_chapter_name
  //               link_chapter_title
  //               links_chapter
  //               page_chapter
  //               page_chapter_name
  //               page_chapter_title
  //               page_range
  //               links_items {
  //                 link_title
  //                 url_adress
  //               }
  //               title
  //               page_title
  //               pages_chapter_item {
  //                 chapter_range
  //                 pages_chapter_name
  //               }
  //               pages {
  //                 body
  //                 title
  //               }
  //             }
  //             html
  //             id
  //           }
  //         }
  //       }
  //     }
  //   `
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
  // return allMarkdownRemark.edges;
}
