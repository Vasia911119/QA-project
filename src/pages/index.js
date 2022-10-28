import { graphql, navigate } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonsNavigate from '../components/ButtonsNavigate/ButtonsNavigate';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { HTMLContent } from '../components/Content';

export default function HomePage({ data }) {
  // console.log('data', data.allMarkdownRemark.nodes);
  const { nodes } = data.allMarkdownRemark;
  const { i18n } = useTranslation();
  console.log(nodes);
  // console.log('nodes', nodes);

  // const pagesCollection = nodes.forEach(item => {
  //   console.log(item.node.frontmatter.pages_chapter_item);
  // });
  // const pagesCollection = nodes.find(item => {
  //   if (item.node.frontmatter.pages_chapter_item)
  //     return item.node.frontmatter.pages_chapter_item;
  // });

  // const { pages_chapter_item: pagesCollectionList } =
  //   pagesCollection.node.frontmatter;

  // const homePageChapterName = pagesCollectionList[0].pages_chapter_name;

  // const sortedPageChapters = pagesCollectionList.sort(
  //   (a, b) => a.chapter_range - b.chapter_range
  // );
  // const homePageChapterName = sortedPageChapters[0].pages_chapter_name;

  // const homePageNodes = nodes.filter(
  //   i => i.node.frontmatter.page_chapter_name === homePageChapterName
  // );

  // console.log(homePageNodes);

  return (
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
    <>
      <p>inde dfsdfsd fsdf sdf sdf dsx</p>
      {nodes.map(node => {
        console.log('node', node.fields.slug);
        return <a href={node.fields.slug}>ссылка</a>;
      })}
    </>

    // homePageNodes &&
    // homePageNodes.map(({ node: component }) => {
    //   // console.log(component);
    //   if (component.frontmatter.language === 'uk') {
    //     // console.log(component);
    //     return (
    //       <div
    //         className="mx-auto pt-[32px] dark:bg-slate-300 md:w-[608px]"
    //         key={component.id}
    //       >
    //         <Breadcrumb title={component.frontmatter.title} />
    //         <div className="space-y-4 text-left">
    //           <h1 className="leading-12 lg:text-4xl lg:leading-14 mb-2 text-3xl text-gray-800">
    //             {component.frontmatter.title}
    //           </h1>
    //         </div>
    //         <HTMLContent
    //           className="prose max-w-none"
    //           content={component.html}
    //         />
    //         {/* <ButtonsNavigate /> */}
    //       </div>
    //     );
    //   }
    // })
  );
}
//
// HomePage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// }

// НОВЫЙ QUERY
export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { language: { eq: "uk" } } }) {
      nodes {
        frontmatter {
          language
          page_chapter_name
          page_chapter_title
          page_title
          slug
        }
        fields {
          slug
        }
        html
      }
    }
  }
`;

// ЧИСТЫЙ ЗАПРОС С НОВОЙ СТРУКТУРОЙ С ЗАХАРДКОЖЕННЫМ ЯЗЫКОМ ДЛЯ ПРОВЕРКИ РАБОТЫ
// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             language
//             chapter_title
//             link_chapter_name
//             link_chapter_title
//             links_chapter
//             page_chapter
//             page_chapter_name
//             page_chapter_title
//             page_range
//             links_items {
//               link_title
//               url_adress
//             }
//             title
//             page_title
//             pages_chapter_item {
//               chapter_range
//               pages_chapter_name
//             }
//             pages {
//               body
//               title
//             }
//           }
//           html
//           id
//         }
//       }
//     }
//   }
// `;
// ЗАПРОС СО СТАРОЙ СТРУКТУРОЙ
// export const pageQuery = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//     allMarkdownRemark(
//       filter: { frontmatter: { templateKey: { eq: "home" } }, html: {} }
//     ) {
//       edges {
//         node {
//           id
//           html
//           frontmatter {
//             title
//             language
//           }
//         }
//       }
//     }
//   }
// `
