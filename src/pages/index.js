import { graphql, Link } from 'gatsby';
import React, { useContext } from 'react';

import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';
import { Breadcrumb, ButtonsNavigate, Note } from '../components';
import * as s from '../styles/page.module.css';

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { MobileMenuContext } from '../components/Layout/Layout';

import { BiMenu } from 'react-icons/bi';
import LogoBlack from '../icons/logo-black.inline.svg';
import Logo from '../icons/logo.inline.svg';

import { useTranslation } from 'gatsby-plugin-react-i18next';
import { HTMLContent } from '../components/Content';

export default function HomePage({ data }) {
  const { nodes } = data.allMarkdownRemark;
  const { i18n } = useTranslation();
  const brakepoints = useBreakpoint();

  const { mobileOpen, setMobileOpen } = useContext(MobileMenuContext);

  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  const titleLanguageNode = nodes.filter(node => node.frontmatter.page_chapter_name === 'home' && node.frontmatter.language === i18n.language)
  const pageTitle = titleLanguageNode.length ? titleLanguageNode[0].frontmatter.page_title : 'HomePage'

  return (
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
    <>
      <Helmet 
        title={pageTitle}
        htmlAttributes={{
          lang: i18n.language,
        }}
      />
      {nodes.map(node => {
        if (
          node.frontmatter.page_chapter_name === 'home' &&
          node.frontmatter.language === i18n.language
        ) {
          return (
            <div className={s.section} key={node.id}>
              <div className={s.wrapper}>
                {!mobileOpen && brakepoints.sm ? (
                  <>
                    {' '}
                    <div className={s.mobileHeader}>
                      <Link to="/">
                        {websiteTheme === 'dark' ? <Logo /> : <LogoBlack />}
                      </Link>
                      <button
                        aria-label="open menu"
                        type="button"
                        onClick={() => setMobileOpen(true)}
                      >
                        <BiMenu className={s.biMenu} />
                      </button>
                    </div>
                    <Breadcrumb title={node.frontmatter.page_title} />
                    <div className={s.contentWrapper}>
                      <h1 className={s.title}>{node.frontmatter.page_title}</h1>
                    </div>
                    <HTMLContent className={s.content} content={node.html} />
                    <Note description={node.frontmatter.description} />
                    <ButtonsNavigate />
                  </>
                ) : (
                  <>
                    <Breadcrumb title={node.frontmatter.page_title} />
                    <div className={s.contentWrapper}>
                      <h1 className={s.title}>{node.frontmatter.page_title}</h1>
                    </div>
                    <HTMLContent className={s.content} content={node.html} />
                    <Note description={node.frontmatter.description} />
                    <ButtonsNavigate />
                  </>
                )}
              </div>
            </div>
          );
        }
      })}
    </>
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
