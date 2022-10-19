import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'

import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as s from './Accordion.module.css'

function Accordion({ title, content, titleUrl = null }) {
  const [accordionStatus, setAccordionStatus] = useState(false)

  const handleClick = () => {
    setAccordionStatus(!accordionStatus)
  }
  return (
    <div>
      {titleUrl ? (
        <Link to={titleUrl}>
          <button className={s.button} onClick={() => handleClick(titleUrl)}>
            {title}
          </button>
        </Link>
      ) : (
        <button className={s.button} onClick={handleClick}>
          {title}
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
