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
    <div className={s.tableOfContent}>
      {titleUrl ? (
        <Link to={titleUrl}>
          <button className={s.button} onClick={() => handleClick(titleUrl)}>
            <span>{title}</span>
            <span className={accordionStatus ? null : s.iconRotate}>
              {<FontAwesomeIcon icon={faChevronUp} />}
            </span>
          </button>
        </Link>
      ) : (
        <button className={s.button} onClick={handleClick}>
          <span>{title}</span>
          <span className={accordionStatus ? null : s.iconRotate}>
            {<FontAwesomeIcon icon={faChevronUp} />}
          </span>
        </button>
      )}
      <div className={accordionStatus ? null : s.collapsed}>{content}</div>
    </div>
  )
}

export default Accordion
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}
