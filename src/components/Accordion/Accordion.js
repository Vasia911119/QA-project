import React, { useState } from 'react';
import { Link } from 'gatsby';
import { BiChevronUp } from 'react-icons/bi';
import * as s from './Accordion.module.css';
import PropTypes from 'prop-types';

function Accordion({
  className = null,
  title,
  content = '',
  titleUrl = null,
  status = false,
  handleClose,
}) {
  const [accordionStatus, setAccordionStatus] = useState(status);

  const handleClick = () => {
    setAccordionStatus(!accordionStatus);
  };
  return (
    <div className={className}>
      <div className={accordionStatus ? s.wrapperUncollapsed : s.wrapper}>
        {titleUrl ? (
          <div className={s.buttonWrapper}>
            <Link
              to={titleUrl}
              onClick={handleClose}
              activeClassName="activeLink"
            >
              <button className={s.button}>{title}</button>
            </Link>
            <span
              className={accordionStatus ? s.icon : s.iconRotate}
              onClick={handleClick}
            >
              <BiChevronUp className={s.arrow} />
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
              <BiChevronUp className={s.arrow} />
            </span>
          </div>
        )}
        <ul className={accordionStatus ? s.uncollapsed : s.collapsed}>
          {content.map(i => (
            <li key={i.slug || i.link_title}>
              {i.link_title && (
                <a
                  className={s.sublink}
                  onClick={handleClose}
                  target={i.url_adress ? '_blank' : null}
                  to={i.url_adress}
                >
                  {i.link_title}
                </a>
              )}
              {i.slug && (
                <Link
                  className={s.sublink}
                  onClick={handleClose}
                  target={i.url_adress ? '_blank' : null}
                  to={i.slug}
                >
                  {i.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Accordion;
Accordion.propTypes = {
  // title: PropTypes.string.isRequired,
  // content: PropTypes.node.isRequired,
};
