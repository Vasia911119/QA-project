import React, { useState } from 'react'
import { Link } from 'gatsby'
import { BiHome, BiChevronUp } from 'react-icons/bi'
import * as s from './SubAccordion.module.css'
import PropTypes from 'prop-types'

function SubAccordion({
  title,
  content = '',
  titleUrl = null,
  status = false,
  parsedDataFromToc = false,
}) {
  const [accordionStatus, setAccordionStatus] = useState(status)

  const handleClick = () => {
    setAccordionStatus(!accordionStatus)
  }

  // console.log(content.props?.content)

  // let parser = new DOMParser()
  // let docs = parser.parseFromString(content.props?.content, 'text/html')
  // console.log(docs)
  // const body = docs.querySelector('body')
  // // const qwer = docs.querySelector('custom-class')
  // const mainList = body?.firstElementChild
  // console.dir(mainList)
  // const totalItems = mainList?.children
  // console.log(totalItems)
  //======================
  return (
    <div className={s.wrapper}>
      {titleUrl ? (
        <div className={s.buttonWrapper}>
          <Link to={titleUrl} activeClassName="activeLink">
            <button className={s.button}>{title}</button>
          </Link>
          <span
            className={accordionStatus ? s.icon : s.iconRotate}
            onClick={handleClick}
          >
            <BiChevronUp alt="toggle menu" />
          </span>
        </div>
      ) : (
        <div
          className={
            accordionStatus ? s.buttonWrapper : s.collapsedButtomWrapper
          }
        >
          <button className={s.button} onClick={handleClick}>
            {title}
          </button>
          <span
            className={accordionStatus ? s.icon : s.iconRotate}
            onClick={handleClick}
          >
            <BiChevronUp alt="toggle menu" />
          </span>
        </div>
      )}
      <div className={accordionStatus ? s.uncollapsed : s.collapsed}>
        {content}
      </div>
    </div>
  )
}

export default SubAccordion
SubAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}
