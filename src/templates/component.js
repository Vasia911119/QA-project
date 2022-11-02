import { graphql, Link } from 'gatsby';

import i18next from 'i18next';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Form from '../components/Form/Form';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ButtonsNavigate from '../components/ButtonsNavigate/ButtonsNavigate';
import Note from '../components/Note/Note';
import * as s from '../styles/page.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import useWindowResize from '../hooks/useWindowResize';

import { MobileMenuContext } from '../components/Layout/Layout';
import Logo from '../components/Logo';
import { BiMenu } from 'react-icons/bi';

import { HTMLContent } from '../components/Content';

import { useTranslation } from 'gatsby-plugin-react-i18next';

const ComponentTemplate = ({ data }) => {
  const { t, i18n } = useTranslation();
  const { nodes } = data.allMarkdownRemark;
  const width = useWindowResize();
  const { mobileOpen, setMobileOpen } = useContext(MobileMenuContext);

  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  return (
    nodes &&
    nodes.map(node => {
      if (node.frontmatter.language === i18n.language) {
        return (
          // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
          <div className={s.mainWrapper} key={node.id}>
            <div className={s.wrapper}>
              {!mobileOpen && width < 768 && (
                <div className={s.mobileHeader}>
                  <Link to="/">
                    {websiteTheme === 'dark' ? <Logo /> : <Logo black />}
                  </Link>
                  <button
                    aria-label="open menu"
                    type="button"
                    onClick={() => setMobileOpen(true)}
                  >
                    <BiMenu className={s.biMenu} />
                  </button>{' '}
                </div>
              )}
              <Breadcrumb
                title={node.frontmatter.page_title}
                name={node.frontmatter.page_chapter_title}
              />
              <div className={s.contentWrapper}>
                <h1 className={s.title}>{node.frontmatter.page_title}</h1>
              </div>
              <HTMLContent className={s.content} content={node.html} />
              <Note description={node.frontmatter.description} />
              <ButtonsNavigate />
            </div>
            {width < 768 ? (
              <StaticImage
                src="../images/gradient-mobile.png"
                formats={['auto', 'webp', 'avif']}
                alt="gradient"
                className={s.backgroundImage}
                placeholder="blurred"
              />
            ) : width > 1280 ? (
              <StaticImage
                src="../images/gradient-tablet.png"
                formats={['auto', 'webp', 'avif']}
                alt="gradient"
                className={s.backgroundImage}
                placeholder="blurred"
              />
            ) : (
              <StaticImage
                src="../images/gradient-desktop.png"
                formats={['auto', 'webp', 'avif']}
                alt="gradient"
                className={s.backgroundImage}
                placeholder="blurred"
              />
            )}
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
