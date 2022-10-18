import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as s from './Accordion.module.css'

function Accordion({ title, content }) {
  const [accordionStatus, setAccordionStatus] = useState(false)

  const handleClick = () => {
    setAccordionStatus(!accordionStatus)
  }
  return (
    <div>
      <button className={s.button} onClick={handleClick}>
        {title}
        {/* <div className="w-1 h-1">
          <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        </div> */}
      </button>
      <div className={accordionStatus ? null : s.collapsed}>{content}</div>
    </div>
  )
}

export default Accordion
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}
