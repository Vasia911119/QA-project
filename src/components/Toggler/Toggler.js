import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
// import * as s from './Toggler.module.css';

const ToggleMode = ({ collapsed = falses }) => {
  let websiteTheme;

  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  const [theme, setTheme] = useState(() => websiteTheme);

  useEffect(() => {
    setTheme(window.__theme);
  }, [theme]);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={ThemeToggle}
      className="flex items-center gap-2 text-grey-350 transition-colors hover:text-slate-50 focus:text-slate-50"
    >
      <IconContext.Provider value={{ color: 'currentColor', size: 18 }}>
        {theme === 'dark' && (
          <>
            <HiOutlineMoon /> {!collapsed ? 'Dark' : ''}
          </>
        )}

        {theme === 'light' && (
          <>
            <HiOutlineSun /> {!collapsed ? 'Light' : ''}
          </>
        )}
      </IconContext.Provider>
    </button>
  );
};

export default ToggleMode;
