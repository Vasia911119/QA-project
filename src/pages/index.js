import { graphql, navigate } from 'gatsby';
import React from 'react';
import PropTypes, { node } from 'prop-types';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonsNavigate from '../components/ButtonsNavigate/ButtonsNavigate';
import Note from '../components/Note/Note';

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
          <div className="mx-auto pt-[32px] dark:bg-slate-300 " key={node.id}>
            <Breadcrumb title={node.frontmatter.page_title} />
            <div className="space-y-4 text-left">
              <h1 className="leading-12 lg:text-4xl lg:leading-14 mb-2 text-3xl text-gray-800">
                {node.frontmatter.page_title}
              </h1>
            </div>
            <HTMLContent className="prose max-w-none" content={node.html} />
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
