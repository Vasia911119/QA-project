import { graphql, navigate } from 'gatsby';
import React from 'react';
import PropTypes, { node } from 'prop-types';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonsNavigate from '../components/ButtonsNavigate/ButtonsNavigate';
import Note from '../components/Note/Note';
import * as s from '../styles/page.module.css';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { HTMLContent } from '../components/Content';

export default function HomePage({ data }) {
  const { nodes } = data.allMarkdownRemark;
  const { i18n } = useTranslation();

  return (
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
    nodes.map(node => {
      if (
        node.frontmatter.page_chapter_name === 'home' &&
        node.frontmatter.language === i18n.language
      ) {
        return (
          <div className={s.wrapper} key={node.id}>
            <Breadcrumb title={node.frontmatter.page_title} />
            <div className={s.contentWrapper}>
              <h1 className={s.title}>{node.frontmatter.page_title}</h1>
            </div>
            <HTMLContent className={s.content} content={node.html} />
            <Note description={node.frontmatter.description} />
            <ButtonsNavigate />
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
    allMarkdownRemark(sort: { fields: frontmatter___page_range }) {
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
//       filter: { frontmatter: { language: { eq: $language } } }
//       sort: { fields: frontmatter___page_range }
//     ) {
