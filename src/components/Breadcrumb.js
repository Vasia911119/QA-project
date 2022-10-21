import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { BiHome } from 'react-icons/bi'
import { BiChevronRight } from 'react-icons/bi'

const Breadcrumb = ({ title, name }) => {
  return (
    <div className="flex font-inter font-semibold text-sm text-stone-900 mb-[24px]">
      {name ? (
        <>
          <Link to="/">
            <BiHome
              className="w-[22px] h-[22px] text-[#B3B3B3] transition-all hover:text-stone-900"
              alt="home"
            />
          </Link>
          <BiChevronRight
            className="ml-[1px] w-[22px] h-[22px] text-[#B3B3B3]"
            alt="next"
          />
        </>
      ) : (
        <>
          <Link to="/">
            <BiHome className="w-[22px] h-[22px]" alt="home" />
          </Link>
          <BiChevronRight className="ml-[1px] w-[22px] h-[22px]" alt="next" />
        </>
      )}
      {name && (
        <>
          <span className="ml-[1px] text-[#B3B3B3]">{name}</span>
          <BiChevronRight
            className="ml-[1px] w-[22px] h-[22px] text-[#B3B3B3]"
            alt="next"
          />
          <span className=" ml-[1px]">{title}</span>
        </>
      )}
    </div>
  )
}

export default Breadcrumb
