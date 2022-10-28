import { graphql, navigate } from 'gatsby';
import React from 'react';
import PropTypes, { node } from 'prop-types';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonsNavigate from '../components/ButtonsNavigate/ButtonsNavigate';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { HTMLContent } from '../components/Content';

export default function HomePage({ data }) {
  // <<<<<<< HEAD
  //   // console.log('data', data.allMarkdownRemark.nodes);

  //   const { nodes } = data.allMarkdownRemark;
  //   const { i18n } = useTranslation();

  //   return (
  //     // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
  //     nodes &&
  //     nodes.map(component => {
  //       if (
  //         component.frontmatter.language === 'uk' &&
  //         component.frontmatter.page_chapter_name === 'home'
  //       ) {
  //         return (
  //           <div
  //             className="mx-auto pt-[32px] dark:bg-slate-300 md:w-[608px]"
  //             key={component.page_title}
  //           >
  //             <Breadcrumb title={component.frontmatter.page_title} />
  //             <div className="space-y-4 text-left">
  //               <h1 className="leading-12 lg:text-4xl lg:leading-14 mb-2 text-3xl text-gray-800">
  //                 {component.frontmatter.page_title}
  //               </h1>
  //             </div>
  //             <HTMLContent
  //               className="prose max-w-none"
  //               content={component.html}
  //             />

  const { nodes } = data.allMarkdownRemark;
  const { i18n } = useTranslation();

  return (
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
    nodes.map(node => {
      // console.log(node);
      // if (node.fields) {
      //   return (
      //     <a key={node.id} href={node.fields.slug} className="flex column">
      //       {node.frontmatter.page_title}
      //     </a>
      //   );
      // }
      if (node.frontmatter.page_chapter_name === 'home') {
        return (
          <div
            className="mx-auto pt-[32px] dark:bg-slate-300 md:w-[608px]"
            key={node.id}
          >
            <Breadcrumb title={node.frontmatter.page_title} />
            <div className="space-y-4 text-left">
              <h1 className="leading-12 lg:text-4xl lg:leading-14 mb-2 text-3xl text-gray-800">
                {node.frontmatter.page_title}
              </h1>
            </div>
            <HTMLContent className="prose max-w-none" content={node.html} />

            {/* <ButtonsNavigate /> */}
          </div>
        );
      }
    })
  );
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
};

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
<<<<<<< HEAD
    allMarkdownRemark(filter: { frontmatter: { language: { eq: "uk" } } }) {
=======
    allMarkdownRemark(
      filter: { frontmatter: { language: { eq: $language } } }
      sort: { fields: frontmatter___page_range }
    ) {
>>>>>>> bceec2638ad7cd1d485890ad9f2d430a538d78a5
      nodes {
        frontmatter {
          language
          page_chapter_name
          page_chapter_title
          page_title
          slug
          description
        }
        fields {
          slug
        }
        html
        id
      }
    }
  }
`;
