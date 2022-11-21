import { graphql, Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BiChevronRight } from 'react-icons/bi';
import * as s from '../styles/404.module.css';

const NotFoundPage = function () {
  const { t, i18n } = useTranslation();
  const { oops, title, text, button } = t('404', { returnObjects: true });

  return (
    <>
      <Helmet
        title='404'
        htmlAttributes={{
          lang: i18n.language,
        }}
      />
      <section className={s.section}>
        <div className={s.wrapper}>
          <h1 className={s.title}>
            {oops} <br /> {title}
          </h1>
          <p className={s.text}>{text}</p>
          <Link to="/" className={s.button}>
            <span className="mr-4">{button}</span>
            <BiChevronRight className={s.iconArrow} alt="home" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;

export const notFoundQuery = graphql`
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
  }
`;
