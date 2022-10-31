import React from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import * as s from './ButtonsNavigate.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ButtonsNavigate = () => {
  const { i18n } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fields: { slug: { regex: "/" } }
          frontmatter: { page_chapter_name: { ne: "home" } }
        }
        sort: { fields: frontmatter___page_range }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            language
          }
        }
      }
    }
  `);

  const getResultArray = () => {
    let result = [`/${i18n.language}/`];
    data.allMarkdownRemark.nodes.map(item => {
      if (item.frontmatter.language === i18n.language) {
        result.push(item.fields.slug);
      }
    });
    return result;
  };
  const resultArray = getResultArray();
  // console.log(resultArray);
  let pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentIndex = resultArray.indexOf(pathname);
  const navigation = resultIndex => {
    navigate(resultArray[resultIndex]);
  };
  const prev = () => {
    navigation(currentIndex - 1);
  };
  const next = () => {
    navigation(currentIndex + 1);
  };

  return (
    <div className={s.wrapper}>
      <button
        onClick={prev}
        className={
          currentIndex === 0 || pathname === '/' || pathname === ''
            ? s.buttonLeftDisabled
            : s.buttonLeft
        }
        disabled={currentIndex === 0 || pathname === '/' || pathname === ''}
        type="button"
      >
        <BiChevronLeft className={s.icon} alt="prev" />
        Назад
      </button>
      <button
        onClick={next}
        className={
          currentIndex === resultArray.length - 1
            ? s.buttonRightDisabled
            : s.buttonRight
        }
        disabled={currentIndex === resultArray.length - 1}
        type="button"
      >
        Далі
        <BiChevronRight className={s.icon} alt="next" />
      </button>
    </div>
  );
};

export default ButtonsNavigate;
