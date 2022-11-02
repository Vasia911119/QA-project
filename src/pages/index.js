import { graphql, navigate } from 'gatsby';
import React, { useState, useEffect } from 'react';
import PropTypes, { node } from 'prop-types';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonsNavigate from '../components/ButtonsNavigate/ButtonsNavigate';
import Note from '../components/Note/Note';
import * as s from '../styles/page.module.css';

import { StaticImage } from 'gatsby-plugin-image';
import useWindowResize from '../hooks/useWindowResize';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { HTMLContent } from '../components/Content';

export default function HomePage({ data }) {
  const { nodes } = data.allMarkdownRemark;
  const { i18n } = useTranslation();
  const width = useWindowResize();

  return (
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
    nodes.map(node => {
      if (
        node.frontmatter.page_chapter_name === 'home' &&
        node.frontmatter.language === i18n.language
      ) {
        return (
          <div className={s.mainWrapper} key={node.id}>
            <div className={s.wrapper}>
              <Breadcrumb title={node.frontmatter.page_title} />
              <div className={s.contentWrapper}>
                <h1 className={s.title}>{node.frontmatter.page_title}</h1>
              </div>
              <HTMLContent className={s.content} content={node.html} />
              <Note description={node.frontmatter.description} />
              <ButtonsNavigate />
            </div>
            {width < 768 ? (
              <StaticImage
                src="../images/businessman-pointing-mobile.png"
                formats={['auto', 'webp', 'avif']}
                alt="businessman pointing"
                className={s.backgroundImage}
                placeholder="blurred"
              />
            ) : width > 1280 ? (
              <StaticImage
                src="../images/businessman-pointing-tablet.png"
                formats={['auto', 'webp', 'avif']}
                alt="businessman pointing"
                className={s.backgroundImage}
                placeholder="blurred"
              />
            ) : (
              <StaticImage
                src="../images/businessman-pointing-desktop.png"
                formats={['auto', 'webp', 'avif']}
                alt="businessman pointing"
                className={s.backgroundImage}
                placeholder="blurred"
              />
            )}
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
