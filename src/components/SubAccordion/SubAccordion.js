import React, { useState } from 'react'
import { Link } from 'gatsby'
import { BiHome, BiChevronUp } from 'react-icons/bi'
import * as s from './SubAccordion.module.css'
import PropTypes from 'prop-types'

function SubAccordion({
  handleClose,
  title,
  content = '',
  titleUrl = null,
  status = false,
  // parsedDataFromToc = false,
} = {}) {
  const [accordionStatus, setAccordionStatus] = useState(status)

  const handleClick = () => {
    setAccordionStatus(!accordionStatus)
  }

  return (
    <div className={s.wrapperSub}>
      {titleUrl ? (
        <div className={s.buttonWrapperSub}>
          <Link to={`${titleUrl}#`} activeClassName="activeLink">
            <button onClick={handleClose} className={s.buttonSub}>
              {title}
            </button>
          </Link>
          <span
            className={accordionStatus ? s.iconSub : s.iconRotateSub}
            onClick={handleClick}
          >
            <BiChevronUp alt="toggle menu" />
          </span>
        </div>
      ) : (
        <div
          className={
            accordionStatus ? s.buttonWrapperSub : s.collapsedButtomWrapperSub
          }
        >
          <button className={s.buttonSub} onClick={handleClick}>
            {title}
          </button>
          <span
            className={accordionStatus ? s.iconSub : s.iconRotateSub}
            onClick={handleClick}
          >
            <BiChevronUp alt="toggle menu" />
          </span>
        </div>
      )}
      <div className={accordionStatus ? s.uncollapsedSub : s.collapsedSub}>
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
