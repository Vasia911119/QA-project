import React from 'react';
import { Link } from 'gatsby';
import { BiHome } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import * as s from './Breadcrumb.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Breadcrumb = ({ title, name }) => {
  const { i18n } = useTranslation();
  return (
    <div className={s.wrapper}>
      {name ? (
        <>
          <Link to={`/${i18n.language}/`}>
            <BiHome className={s.iconHome} alt="home" />
          </Link>
          <BiChevronRight className={s.iconNext} alt="next" />
        </>
      ) : (
        <>
          <Link to={`/${i18n.language}/`}>
            <BiHome className={s.iconHomeMain} alt="home" />
          </Link>
          <BiChevronRight className={s.iconNextMain} alt="next" />
        </>
      )}
      {name && (
        <>
          <span className={s.text}>{name}</span>
          <BiChevronRight className={s.iconNext} alt="next" />
          <span className={s.textTitle}>{title}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
