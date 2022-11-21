import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { BiChevronRight, BiHome } from 'react-icons/bi';
import * as s from './Breadcrumb.module.css';

export const Breadcrumb = ({ title, name }) => {
  const { t, i18n } = useTranslation();
  const { home } = t('aria-labels', {
    returnObjects: true,
  });

  return (
    <div className={s.wrapper}>
      {name ? (
        <>
          <Link to={`/${i18n.language}/`} aria-label={home}>
            <BiHome className={s.iconHome} />
          </Link>
          <BiChevronRight className={s.iconNext} />
        </>
      ) : (
        <>
          <Link to={`/${i18n.language}/`} aria-label={home}>
            <BiHome className={s.iconHomeMain} />
          </Link>
          <BiChevronRight className={s.iconNextMain} />
        </>
      )}
      {name && (
        <>
          <div className={s.textWrapper}>
            <p className={s.text}>{name}</p>
          </div>
          <BiChevronRight className={s.iconNext} />
          <div className={s.textWrapper}>
            <p className={s.textTitle}>{title}</p>
          </div>
        </>
      )}
    </div>
  );
};
