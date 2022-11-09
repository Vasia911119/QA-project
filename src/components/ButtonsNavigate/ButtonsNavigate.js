import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import * as s from './ButtonsNavigate.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useLocation } from '@reach/router';
import defaultLanguage from '../../services/defaultLangForBtn';

export const ButtonsNavigate = () => {
  const { t, i18n } = useTranslation();
  // Отримуємо адресу поточної сторінки
  const { pathname } = useLocation();
  const { next, previous } = t('button', {
    returnObjects: true,
  });
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

  // Отримуємо масив з адресами сторінок, по даному масиві буде відбуватись навігація кнопками Назад і Далі
  const getResultArray = () => {
    const result = [`/${i18n.language}/`];
    data &&
      data.allMarkdownRemark &&
      data.allMarkdownRemark.nodes &&
      data.allMarkdownRemark.nodes.map(item => {
        if (item.frontmatter.language === i18n.language) {
          result.push(
            // Дана перевірка зумовлена особливістю роботи плагіна gatsby-plugin-react-i18next з мовою на сторінці по замовчуванню, особливість полягає в тому, що на сторінку з мовою по замовчуванню можна перейти по двох різних шляхах, до прикладу - "/" та "/uk/", на інших мовах сторінки шлях буде до прикладу лише - "/en/", або "/ru/" і тому подібне
            i18n.language === `${defaultLanguage}`
              ? `/${defaultLanguage}` + item.fields.slug
              : item.fields.slug
          );
        }
      });
    return result;
  };
  const resultArray = getResultArray();

  // Отримуємо поточний індекс елемента в масиві сторінок
  const currentIndex =
    // Наступні перевірки зумовлені особливістю роботи плагіна gatsby-plugin-react-i18next з мовою на сторінці по замовчуванню особливість полягає в тому, що на сторінку з мовою по замовчуванню можна перейти по двох різних шляхах, до прикладу - "/" та "/uk/", на інших мовах сторінки шлях буде до прикладу лише - "/en/", або "/ru/" і тому подібне
    pathname === '/'
      ? 0
      : resultArray.indexOf(
          (i18n.language === `${defaultLanguage}` &&
            pathname.includes(`/${defaultLanguage}/`)) ||
            i18n.language !== `${defaultLanguage}`
            ? pathname
            : `/${defaultLanguage}` + pathname
        );

  const [path, setPath] = useState(pathname);
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setPath(
      typeof window !== 'undefined' && window.localStorage.getItem('path')
    );
  }, []);

  useEffect(() => {
    typeof window !== 'undefined' && window.localStorage.setItem('path', path);
    setPath(pathname);
    navigate(resultArray[index]);
  }, [index]);

  const goPrevious = () => {
    setIndex(currentIndex - 1);
  };

  const goNext = () => {
    setIndex(currentIndex + 1);
  };

  // Кнопка Назад має бути disabled:
  // В браузерній строці в адресі поточної сторінки лише '/', або '/uk/', '/en/', '/ru/'.

  // Кнопка Далі має бути disabled:
  // В браузерній строці в адресі поточної сторінки останнє значення масиву resultArray

  const prevBtnDisabled = path === `/${i18n.language}/` || path === '/';
  const nextBtnDisabled = path !== resultArray[resultArray.length - 1];

  return (
    <div className={s.wrapper}>
      <button
        onClick={goPrevious}
        className={s.buttonLeft}
        disabled={prevBtnDisabled}
        type="button"
      >
        <BiChevronLeft className={s.icon} />
        {t(previous)}
      </button>
      <button
        onClick={goNext}
        className={s.buttonRight}
        disabled={!nextBtnDisabled}
        type="button"
      >
        {t(next)}
        <BiChevronRight className={s.icon} />
      </button>
    </div>
  );
};
