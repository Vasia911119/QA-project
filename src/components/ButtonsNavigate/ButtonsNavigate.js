import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import * as s from './ButtonsNavigate.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ButtonsNavigate = () => {
  const { t, i18n } = useTranslation();
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
    data.allMarkdownRemark.nodes.map(item => {
      if (item.frontmatter.language === i18n.language) {
        result.push(
          // Дана перевірка зумовлена особливістю роботи плагіна gatsby-plugin-react-i18next з мовою на сторінці по замовчуванню, особливість полягає в тому, що на сторінку з мовою по замовчуванню можна перейти по двох різних шляхах, до прикладу - "/" та "/uk/", на інших мовах сторінки шлях буде до прикладу лише - "/en/", або "/ru/" і тому подібне
          i18n.language === 'uk' ? '/uk' + item.fields.slug : item.fields.slug
        );
      }
    });
    return result;
  };
  const resultArray = getResultArray();
  // Отримуємо адресу поточної сторінки
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  // Отримуємо поточний індекс елемента в масиві сторінок
  const currentIndex =
    // Наступні перевірки зумовлені особливістю роботи плагіна gatsby-plugin-react-i18next з мовою на сторінці по замовчуванню особливість полягає в тому, що на сторінку з мовою по замовчуванню можна перейти по двох різних шляхах, до прикладу - "/" та "/uk/", на інших мовах сторінки шлях буде до прикладу лише - "/en/", або "/ru/" і тому подібне
    pathname === '/'
      ? 0
      : resultArray.indexOf(
          (i18n.language === 'uk' && pathname.includes('/uk/')) ||
            i18n.language !== 'uk'
            ? pathname
            : '/uk' + pathname
        );

  //----------------------------------Варіант №1-------------------------------------//
  const navigation = resultIndex => {
    navigate(resultArray[resultIndex]);
  };
  const goPrevious = () => {
    navigation(currentIndex - 1);
  };
  const goNext = () => {
    navigation(currentIndex + 1);
  };

  return (
    <div className={s.wrapper}>
      <button
        onClick={goPrevious}
        className={
          currentIndex === 0 || pathname === '/' || pathname === ''
            ? s.buttonLeftDisabled
            : s.buttonLeft
        }
        disabled={currentIndex === 0 || pathname === '/' || pathname === ''}
        type="button"
      >
        <BiChevronLeft className={s.icon} alt="previous" />
        {t(previous)}
      </button>
      <button
        onClick={goNext}
        className={
          currentIndex === resultArray.length - 1
            ? s.buttonRightDisabled
            : s.buttonRight
        }
        disabled={currentIndex === resultArray.length - 1}
        type="button"
      >
        {t(next)}
        <BiChevronRight className={s.icon} alt="next" />
      </button>
    </div>
  );
};

//----------------------------------Варіант №2-------------------------------------//
//   typeof window !== 'undefined' &&
//     window.localStorage.setItem('currentIndex', currentIndex);

//   const navigation = resultIndex => {
//     navigate(resultArray[resultIndex]);
//   };
//   const goPrevious = () => {
//     navigation(currentIndex - 1);
//   };
//   const goNext = () => {
//     navigation(currentIndex + 1);
//   };

//   return (
//     <div className={s.wrapper}>
//       <button
//         onClick={goPrevious}
//         className={s.buttonLeft}
//         disabled={
//           (typeof window !== 'undefined' &&
//             Number(window.localStorage.getItem('currentIndex'))) === 0 ||
//           pathname === '/' ||
//           pathname === ''
//         }
//         type="button"
//       >
//         <BiChevronLeft className={s.icon} alt="previous" />
//         {t(previous)}
//       </button>
//       <button
//         onClick={goNext}
//         className={s.buttonRight}
//         disabled={
//           (typeof window !== 'undefined' &&
//             Number(window.localStorage.getItem('currentIndex'))) ===
//           resultArray.length - 1
//         }
//         type="button"
//       >
//         {t(next)}
//         <BiChevronRight className={s.icon} alt="next" />
//       </button>
//     </div>
//   );
// };

//----------------------------------Варіант №3-------------------------------------//
//   const [index, setIndex] = useState(currentIndex);

//   const getIndex =
//     typeof window !== 'undefined'
//       ? JSON.parse(window.localStorage.getItem('index'))
//       : currentIndex;

//   useEffect(() => {
//     currentIndex === getIndex ? setIndex(getIndex) : setIndex(currentIndex);
//   }, []);

//   useEffect(() => {
//     typeof window !== 'undefined' &&
//       window.localStorage.setItem('index', index);
//     navigate(resultArray[index]);
//   }, [index]);

//   const goPrevious = () => {
//     setIndex(index - 1);
//   };
//   const goNext = () => {
//     setIndex(index + 1);
//   };

//   return (
//     <div className={s.wrapper}>
//       <button
//         aria-label="go previous page"
//         onClick={goPrevious}
//         className={s.buttonLeft}
//         disabled={index === 0 || pathname === '/' || pathname === ''}
//         type="button"
//       >
//         <BiChevronLeft className={s.icon} alt="previous" />
//         {t(previous)}
//       </button>
//       <button
//         aria-label="go next page"
//         onClick={goNext}
//         className={s.buttonRight}
//         disabled={index === resultArray.length - 1}
//         type="button"
//       >
//         {t(next)}
//         <BiChevronRight className={s.icon} alt="next" />
//       </button>
//     </div>
//   );
// };

export default ButtonsNavigate;
