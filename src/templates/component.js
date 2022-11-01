import { graphql } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import { GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import React from 'react';
import Form from '../components/Form/Form';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonsNavigate from '../components/ButtonsNavigate/ButtonsNavigate';
import Note from '../components/Note/Note';
import * as s from '../styles/page.module.css';

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
            <div className={s.wrapper}>
              <Breadcrumb
                title={node.frontmatter.page_title}
                name={node.frontmatter.page_chapter_title}
              />
              <div className={s.contentWrapper}>
                <h1 className={s.title}>
                  {node.frontmatter.page_chapter_title}
                </h1>
              </div>
              <HTMLContent className={s.content} content={node.html} />
              <Note description={node.frontmatter.description} />
              <ButtonsNavigate />
            </div>
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
