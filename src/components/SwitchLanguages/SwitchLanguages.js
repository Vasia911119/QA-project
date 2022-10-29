import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import Flag from 'react-world-flags';

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
  const { languages, originalPath, language } = useI18next();

  const handleOpen = () => {
    setOpen(!open);
  };

  const langArray = languages.filter(lang => lang !== language);

  return (
    <div>
      <button onClick={handleOpen} className="flex items-center">
        <Flag
          code={showFlag(language)}
          className=" !inline-block h-6 w-6 rounded-[50%] object-cover"
          fallback={
            <span className=" inline-block h-6 w-6 rounded-[50%] bg-white object-cover"></span>
          }
        />
        {!collapsed && (
          <p className="ml-3 text-grey-350 transition-colors hover:text-slate-50">
            {showLanguage(language)}
          </p>
        )}
      </button>
      {open && (
        <ul className="languages">
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
                    className=" !inline-block h-6 w-6 rounded-[50%] object-cover"
                    fallback={
                      <span className=" inline-block h-6 w-6 rounded-[50%] bg-white object-cover"></span>
                    }
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
      )}
    </div>
  );
};

export default SwitchLanguages;
