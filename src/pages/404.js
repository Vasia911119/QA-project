// import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as s from '../styles/404.module.css';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const { oops, title, text, button } = t('404', { returnObjects: true });

  return (
    <section className="relative h-screen w-screen bg-[#DBD9D9] ">
      <div className="absolute top-1/3 left-1/3  text-center font-inter">
        <h1 className="mb-10 smOnly:text-2xl md:text-3xl">
          {oops} <br /> {title}
        </h1>
        <p className="mb-24 text-lg">{text}</p>
        <Link
          to="/"
          className="mx-auto flex h-12 w-[257px] items-center justify-center rounded-[12px] bg-blue-600  text-white"
        >
          <span className="mr-4">{button}</span>
          <BiChevronRight className={s.iconArrow} alt="home" />
        </Link>
      </div>
    </section>
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
