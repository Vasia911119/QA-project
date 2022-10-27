import React from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import * as s from './Breadcrumb.module.css';

const ButtonsNavigate = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark(
  //       filter: {
  //         fields: { slug: { regex: "/" } }
  //         frontmatter: { language: { eq: "uk" } }
  //       }
  //     ) {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             language
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // const getResultArray = () => {
  //   let result = ['/'];
  //   data.allMarkdownRemark.edges.map(item =>
  //     result.push(item.node.fields.slug)
  //   );
  //   return result;
  // };
  // const resultArray = getResultArray();
  // let pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  // const currentIndex = resultArray.indexOf(pathname);
  // const navigation = resultIndex => {
  //   navigate(resultArray[resultIndex]);
  // };
  // const prev = () => {
  //   navigation(currentIndex - 1);
  // };
  // const next = () => {
  //   navigation(currentIndex + 1);
  // };
  // return (
  //   <div className={s.wrapper}>
  //     <button
  //       onClick={prev}
  //       className={currentIndex === 0 ? s.buttonLeftDisabled : s.buttonLeft}
  //       disabled={currentIndex === 0}
  //       type="button"
  //     >
  //       <BiChevronLeft className={s.icon} alt="prev" />
  //       Назад
  //     </button>
  //     <button
  //       onClick={next}
  //       className={
  //         currentIndex === resultArray.length - 1
  //           ? s.buttonRightDisabled
  //           : s.buttonRight
  //       }
  //       disabled={currentIndex === resultArray.length - 1}
  //       type="button"
  //     >
  //       Далі
  //       <BiChevronRight className={s.icon} alt="next" />
  //     </button>
  //   </div>
  // );
};

export default ButtonsNavigate;
