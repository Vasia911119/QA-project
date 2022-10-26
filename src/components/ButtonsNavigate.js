import React from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { BiChevronRight } from 'react-icons/bi'
import { BiChevronLeft } from 'react-icons/bi'

const ButtonsNavigate = ({ location }) => {
  return <p>button</p>
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
  // `)

  // const getResultArray = () => {
  //   let result = ['/']
  //   data.allMarkdownRemark.edges.map(item => result.push(item.node.fields.slug))
  //   return result
  // }
  // const resultArray = getResultArray()
  // const currentIndex = resultArray.indexOf(location.pathname)
  // // console.log('currentIndex', currentIndex)

  // // let first
  // // let last
  // // currentIndex === 0 ? (first = true) : (first = false)

  // const navigation = resultIndex => {
  //   navigate(resultArray[resultIndex])
  // }

  // const prev = () => {
  //   navigation(currentIndex - 1)
  // }
  // const next = () => {
  //   navigation(currentIndex + 1)
  // }

  // return (
  //   <div className="flex mt-[80px] md:mt-[92px] xl:mt-[100px] font-inter font-semibold text-base text-slate-50">
  //     <button
  //       onClick={prev}
  //       className={
  //         currentIndex === 0
  //           ? 'flex items-center justify-center rounded-[10px]  bg-stone-300 w-[114px] h-12 font-inter font-semibold text-xs transition-all ml-auto mr-8'
  //           : 'flex items-center justify-center rounded-[10px] bg-blue-600 w-[114px] h-12 font-inter font-semibold text-xs transition-all hover:bg-blue-500 focus:bg-blue-500 ml-auto mr-8'
  //       }
  //       disabled={currentIndex === 0}
  //       type="button"
  //     >
  //       <BiChevronLeft className="w-[30px] h-[30px]" alt="prev" />
  //       Назад
  //     </button>
  //     <button
  //       onClick={next}
  //       className={
  //         currentIndex === resultArray.length - 1
  //           ? 'flex items-center justify-center rounded-[10px]  bg-stone-300 w-[114px] h-12 font-inter font-semibold text-xs transition-all mr-auto'
  //           : 'flex items-center justify-center rounded-[10px] bg-blue-600 w-[114px] h-12 font-inter font-semibold text-xs  transition-all hover:bg-blue-500 focus:bg-blue-500 mr-auto'
  //       }
  //       disabled={currentIndex === resultArray.length - 1}
  //       type="button"
  //     >
  //       Далі
  //       <BiChevronRight className="w-[30px] h-[30px]" alt="next" />
  //     </button>
  //   </div>
  // )
}

export default ButtonsNavigate

// export const pathQuery = graphql`
//   query MyQuery {
//     allSitePage {
//       edges {
//         previous {
//           path
//         }
//         next {
//           path
//         }
//         node {
//           path
//         }
//       }
//     }
//   }
// `
