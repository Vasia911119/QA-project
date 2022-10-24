import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { BiChevronUp } from 'react-icons/bi'
import * as s from './Accordion.module.css'
import PropTypes from 'prop-types'

function Accordion({
  handleClose,
  title,
  content = '',
  titleUrl = null,
  status = false,
} = {}) {
  const [accordionStatus, setAccordionStatus] = useState(status)

  const handleClick = () => {
    setAccordionStatus(!accordionStatus)
  }
  // console.log(titleUrl)
  return (
    <div className={s.wrapper}>
      {titleUrl ? (
        <div className={s.buttonWrapper}>
          <Link to={titleUrl} activeClassName="activeLink">
            <button onClick={handleClose} className={s.button}>
              {title}
            </button>
          </Link>
          <span
            className={accordionStatus ? s.icon : s.iconRotate}
            onClick={handleClick}
          >
            {<BiChevronUp />}
          </span>
        </div>
      ) : (
        <div className={s.buttonWrapper}>
          <button className={s.button} onClick={handleClick}>
            {title}
          </button>
          <span
            className={accordionStatus ? s.icon : s.iconRotate}
            onClick={handleClick}
          >
            {<BiChevronUp />}
          </span>
        </div>
      )}
      <div className={accordionStatus ? s.uncollapsed : s.collapsed}>
        {content}
      </div>
    </div>
  )
}

export default Accordion
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}
