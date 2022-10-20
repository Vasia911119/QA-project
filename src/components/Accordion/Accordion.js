import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import * as s from './Accordion.module.css'
import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Accordion({ title, content = '', titleUrl = null, status = false }) {
  const [accordionStatus, setAccordionStatus] = useState(status)

  const handleClick = () => {
    setAccordionStatus(!accordionStatus)
  }
  console.log(titleUrl)
  return (
    <div className={s.wrapper}>
      {titleUrl ? (
        <div className={s.buttonWrapper}>
          <Link to={titleUrl} activeClassName="activeLink">
            <button className={s.button}>
              <span>{title}</span>
            </button>
          </Link>
          <span
            className={accordionStatus ? s.icon : s.iconRotate}
            onClick={handleClick}
          >
            {<FontAwesomeIcon icon={faChevronUp} />}
          </span>
        </div>
      ) : (
        <div className={s.buttonWrapper}>
          <button className={s.button} onClick={handleClick}>
            <span>{title}</span>
          </button>
          <span
            className={accordionStatus ? s.icon : s.iconRotate}
            onClick={handleClick}
          >
            {<FontAwesomeIcon icon={faChevronUp} />}
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
