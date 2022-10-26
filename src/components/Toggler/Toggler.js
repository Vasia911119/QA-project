import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
// import Home from '../images/home.inline.svg'
// import Icon from '../images/Icon.inline.svg'
import * as s from './Toggler.module.css'

const ToggleMode = () => {
  let websiteTheme
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }
  useEffect(() => {
    setTheme(window.__theme)
  }, [])

  const [theme, setTheme] = useState(websiteTheme)

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark')
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={ThemeToggle}
      className="flex items-center text-grey-350 hover:text-slate-50 transition-colors"
    >
      {theme === 'dark' ? (
        <>
          <p className={s.darkIcon}>Dark</p>
        </>
      ) : (
        <>
          <p className={s.whiteIcon}>Light</p>
        </>
      )}
    </button>
  )
}

export default ToggleMode
