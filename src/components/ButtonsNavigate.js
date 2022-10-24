import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { BiChevronRight } from 'react-icons/bi'
import { BiChevronLeft } from 'react-icons/bi'

const ButtonsNavigate = () => {
  const first = () => true
  const last = () => false
  const prev = () => {}
  const next = () => {}

  return (
    <div className="flex mt-[80px] md:mt-[92px] xl:mt-[100px] font-inter font-semibold text-base text-slate-50">
      <button
        onClick={prev}
        className={
          first() === true
            ? 'flex items-center justify-center rounded-[10px]  bg-stone-300 w-[114px] h-12 font-inter font-semibold text-xs transition-all ml-auto mr-8'
            : 'flex items-center justify-center rounded-[10px] bg-blue-600 w-[114px] h-12 font-inter font-semibold text-xs transition-all hover:bg-blue-500 focus:bg-blue-500 ml-auto mr-8'
        }
        type="button"
      >
        <BiChevronLeft className="w-[30px] h-[30px]" alt="prev" />
        Назад
      </button>
      <button
        onClick={next}
        className={
          last() === true
            ? 'flex items-center justify-center rounded-[10px]  bg-stone-300 w-[114px] h-12 font-inter font-semibold text-xs transition-all mr-auto'
            : 'flex items-center justify-center rounded-[10px] bg-blue-600 w-[114px] h-12 font-inter font-semibold text-xs  transition-all hover:bg-blue-500 focus:bg-blue-500 mr-auto'
        }
        type="button"
      >
        Далі
        <BiChevronRight className="w-[30px] h-[30px]" alt="next" />
      </button>
    </div>
  )
}

export default ButtonsNavigate

export const pathQuery = graphql`
  query MyQuery {
    allSitePage {
      edges {
        previous {
          path
        }
        next {
          path
        }
        node {
          path
        }
      }
    }
  }
`
