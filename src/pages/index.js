import { graphql, navigate } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonsNavigate from '../components/ButtonsNavigate/ButtonsNavigate';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { HTMLContent } from '../components/Content';

export default function HomePage({ data }) {
  const { edges: nodes } = data.allMarkdownRemark;
  const { i18n } = useTranslation();

  // Костыль от Максима для украинского по умолчанию
  // React.useEffect(() => {
  //   const initialLang = window.localStorage.getItem('gatsby-i18next-language')
  //   const visit = window.localStorage.getItem('visit')

  //   if (initialLang === 'ru' && !visit) {
  //     window.localStorage.setItem('gatsby-i18next-language', 'uk')
  //     window.localStorage.setItem('visit', 'true')
  //     navigate('/uk')
  //   }
  // }, [])

  return (
    <p>hello</p>
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout

    //     nodes &&
    //     nodes.map(({ node: component }) => {
    //       if (component.frontmatter.language === i18n.language) {
    //         return (
    //           <div
    //             className="md:w-[608px] mx-auto pt-[32px] dark:bg-slate-300"
    //             key={component.id}
    //           >
    //             <Breadcrumb title={component.frontmatter.title} />
    //             <div className="space-y-4 text-left">
    //               <h1 className="text-3xl leading-12 text-gray-800 lg:text-4xl lg:leading-14 mb-2">
    //                 {component.frontmatter.title}
    //               </h1>
    //             </div>
    //             <HTMLContent
    //               className="prose max-w-none"
    //               content={component.html}
    //             />
    //             <ButtonsNavigate />
    //           </div>
    //         )
    //       }
    //     })
  );
}

// HomePage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// }

// НОВЫЙ QUERY
// {
//   allMarkdownRemark(filter: {frontmatter: {language: {eq: "uk"}}}) {
//     nodes {
//       frontmatter {
//         language
//         chapter_title
//         link_chapter_name
//         link_chapter_title
//         links_chapter
//         page_chapter
//         page_chapter_name
//         page_chapter_title
//         page_range
//         page_title
//         links_items {
//           link_title
//           url_adress
//         }
//       }
//       fields {
//         slug
//       }
//       html
//     }
//   }
// }

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
