import { graphql, Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Breadcrumb, ButtonsNavigate, Form, Note } from '../components';
import { MobileMenuContext } from '../components/Layout/Layout';
import * as s from '../styles/page.module.css';

import { BiMenu } from 'react-icons/bi';
import LogoBlack from '../icons/logo-black.inline.svg';
import Logo from '../icons/logo.inline.svg';

import { HTMLContent } from '../components/Content';

import { useTranslation } from 'gatsby-plugin-react-i18next';

const ComponentTemplate = ({ data }) => {
  const { t, i18n } = useTranslation();
  const { nodes } = data.allMarkdownRemark;
  const brakepoints = useBreakpoint();

  const { mobileOpen, setMobileOpen } = useContext(MobileMenuContext);

  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: i18n.language,
        }}
      />
      {nodes &&
        nodes.map(node => {
          if (node.frontmatter.language === i18n.language) {
            return (
              // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
              <section className={s.sectionComponents} key={node.id}>
                <div className={s.wrapper}>
                  {!mobileOpen && brakepoints.sm && (
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
                <Form />
              </section>
            );
          }
        })}
    </>
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
