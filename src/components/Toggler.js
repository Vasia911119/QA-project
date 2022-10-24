import React, { useState, useEffect } from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

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
    <button className="button" onClick={ThemeToggle}>
      {theme === 'dark' ? (
        <>
          <HiOutlineMoon />
          <p>Dark</p>
        </>
      ) : (
        <>
          <HiOutlineSun />
          <p>Light</p>
        </>
      )}
    </button>
  )
}

export default ToggleMode
