import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import Flag from 'react-world-flags';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Backdrop from './Backdrop';

const showLanguage = lang => {
  return lang === 'uk' ? 'UA' : lang.toUpperCase();
};

const showFlag = lang => {
  switch (lang) {
    case 'uk':
      return 'UA';
    case 'en':
      return 'GB';
    case 'ru':
      return null;
    default:
      return null;
  }
};

const SwitchLanguages = ({ collapsed = false }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const { languages, originalPath, language } = useI18next();
  const { languageSwitcher } = t('aria-labels', {
    returnObjects: true,
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const langArray = languages.filter(lang => lang !== language);

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        aria-label={languageSwitcher}
        onClick={handleOpen}
        className="flex items-center"
      >
        <Flag
          code={showFlag(language)}
          className=" !inline-block h-6 w-6 rounded-[50%] object-cover text-sm leading-3"
          fallback={
            <span className=" inline-block h-6 w-6 rounded-[50%] bg-white object-cover"></span>
          }
          alt={`${showLanguage(language)} flag`}
        />
        {!collapsed && (
          <p className="ml-3 text-grey-350 transition-colors hover:text-slate-50">
            {showLanguage(language)}
          </p>
        )}
      </button>
      {open && (
        <>
          <ul className="relative z-20 flex w-full flex-col gap-3">
            {langArray.map(lng => {
              return (
                <li key={lng} className="my-1">
                  <Link
                    to={originalPath}
                    language={lng}
                    onClick={handleOpen}
                    className="flex items-center"
                  >
                    <Flag
                      code={showFlag(lng)}
                      className=" !inline-block h-6 w-6 rounded-[50%] object-cover text-sm leading-3"
                      fallback={
                        <span className=" inline-block h-6 w-6 rounded-[50%] bg-white object-cover"></span>
                      }
                      alt={`${showLanguage(lng)} flag`}
                    />{' '}
                    {!collapsed && (
                      <p className="ml-3 text-grey-350 transition-colors hover:text-slate-50">
                        {showLanguage(lng)}
                      </p>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Backdrop bcDropClose={handleOpen} />
        </>
      )}
    </div>
  );
};

export default SwitchLanguages;

SwitchLanguages.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};
