import React, { useState } from 'react';
import { Link } from 'gatsby';
import { BiChevronUp } from 'react-icons/bi';
import * as s from './Accordion.module.css';
import PropTypes from 'prop-types';

function Accordion({ title, content = '', titleUrl = null, status = false }) {
  const [accordionStatus, setAccordionStatus] = useState(status);

  const handleClick = () => {
    setAccordionStatus(!accordionStatus);
  };
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
            <BiChevronUp />
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
            <BiChevronUp />
          </span>
        </div>
      )}
      <ul className={accordionStatus ? s.uncollapsed : s.collapsed}>
        {content.map(i => (
          <li key={i.slug || i.link_title}>
            <Link to={i.slug || i.url_adress}>{i.title || i.link_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
Accordion.propTypes = {
  // title: PropTypes.string.isRequired,
  // content: PropTypes.node.isRequired,
};
