import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
// import Home from '../images/home.inline.svg'
// import Icon from '../images/Icon.inline.svg'
import * as s from './Toggler.module.css';
import { IconContext } from 'react-icons';

const ToggleMode = () => {
  let websiteTheme;

  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
    // console.log('window.__theme', window.__theme);
  }
  const [theme, setTheme] = useState(websiteTheme);

  useEffect(() => {
    setTheme(window.__theme);
  }, [theme]);

  // useEffect(() => {
  //   console.log('наш useEffect', theme)
  // }, [theme])

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
    // console.log('websiteTheme', websiteTheme);
  };

  // console.log('theme', theme)

  return (
    <button
      onClick={ThemeToggle}
      className="flex items-center gap-2 text-grey-350 hover:text-slate-50 transition-colors"
    >
      <IconContext.Provider value={{ color: 'white', size: 24 }}>
        {theme === 'dark' && <HiOutlineMoon />}
        {theme === 'light' && <HiOutlineSun />}
      </IconContext.Provider>

      {theme !== 'dark' ? 'Light' : 'Dark'}
    </button>
  );
};

export default ToggleMode;
