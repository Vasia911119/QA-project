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
    <button
      onClick={ThemeToggle}
      className="flex items-center text-grey-350 hover:text-slate-50 transition-colors"
    >
      {theme === 'dark' ? (
        <>
          <HiOutlineMoon className="w-6 h-6 stroke-current mr-3" />
          <p>Dark</p>
        </>
      ) : (
        <>
          <HiOutlineSun className="w-6 h-6 stroke-current mr-3" />
          <p>Light</p>
        </>
      )}
    </button>
  )
}

export default ToggleMode
