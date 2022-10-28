import { graphql } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import { GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import React from 'react';
import Form from '../components/Form/Form';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonsNavigate from '../components/ButtonsNavigate/ButtonsNavigate';

import { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

import { useTranslation } from 'gatsby-plugin-react-i18next';

const ComponentTemplate = ({ data }) => {
  const { t, i18n } = useTranslation();
  const { nodes } = data.allMarkdownRemark;

  return (
    nodes &&
    nodes.map(node => {
      if (node.frontmatter.language === i18n.language) {
        return (
          // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
          <div key={node.id}>
            <div className="mx-auto pt-[32px] md:w-[608px]">
              <Breadcrumb
                title={node.frontmatter.page_title}
                name={node.frontmatter.page_chapter_title}
              />
              <div className="space-y-4 text-left">
                <h1 className="leading-12 lg:text-4xl lg:leading-14 mb-2 font-inter text-3xl text-gray-800">
                  {node.frontmatter.title}
                </h1>
              </div>
              <HTMLContent className="prose max-w-none" content={node.html} />
            </div>
            <ButtonsNavigate />
            <Form />
          </div>
        );
      }
    })
  );
};

ComponentTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
};

export default ComponentTemplate;

export const pageQuery = graphql`
  query ($language: String!, $identifier: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { identifier: { eq: $identifier } } }
    ) {
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

// allMarkdownRemark(
//   filter: {
//     frontmatter: { language: { eq: $language } }
//     fields: { slug: { eq: $slug } }
//   }
// ) {
//   nodes {
//     frontmatter {
//       language
//       page_chapter_name
//       page_chapter_title
//       page_title
//       slug
//     }
//     fields {
//       slug
//     }
//     html
//   }
// }

// markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         language
//         page_chapter_name
//         page_chapter_title
//         page_title
//       }
//       html
//     }
