import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as s from './Accordion.module.css'

function Accordion({ title, content }) {
  const [accordionStatus, setAccordionStatus] = useState(false)

  const handleClick = () => {
    setAccordionStatus(!accordionStatus)
  }
  console.log(s)
  return (
    <div className={`accordion `}>
      <button className="bg-red-500" onClick={handleClick}>
        {title}
      </button>
      <div className={accordionStatus ? null : s.collapsed}>{content}</div>
    </div>
  )
}

export default Accordion
// Accordion.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.object.isRequired,
// }
