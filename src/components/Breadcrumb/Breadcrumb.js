import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { BiChevronRight, BiHome } from 'react-icons/bi';
import * as s from './Breadcrumb.module.css';

export const Breadcrumb = ({ title, name }) => {
  const { i18n } = useTranslation();
  return (
    <div className={s.wrapper}>
      {name ? (
        <>
          <Link to={`/${i18n.language}/`} aria-label="home">
            <BiHome className={s.iconHome} alt="home" />
          </Link>
          <BiChevronRight className={s.iconNext} alt="next" />
        </>
      ) : (
        <>
          <Link to={`/${i18n.language}/`} aria-label="home">
            <BiHome className={s.iconHomeMain} alt="home" />
          </Link>
          <BiChevronRight className={s.iconNextMain} alt="next" />
        </>
      )}
      {name && (
        <>
          <div className={s.textWrapper}>
            <p className={s.text}>{name}</p>
          </div>
          <BiChevronRight className={s.iconNext} alt="next" />
          <div className={s.textWrapper}>
            <p className={s.textTitle}>{title}</p>
          </div>
        </>
      )}
    </div>
  );
};
