import React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import Flag from 'react-world-flags'
// import * as s from './SwitchLanguages.module.css'

const showLanguage = lang => {
  return lang === 'uk' ? 'UA' : lang.toUpperCase()
}

const showFlag = lang => {
  switch (lang) {
    case 'uk':
      return 'UA'
    case 'en':
      return 'GB'
    case 'ru':
      return null
    default:
      return null
  }
}

const SwitchLanguages = () => {
  const [open, setOpen] = React.useState(false)
  const { languages, originalPath, language } = useI18next()

  const handleOpen = () => {
    setOpen(!open)
  }

  const langArray = languages.filter(lang => lang !== language)

  return (
    <div>
      <button onClick={handleOpen} className="flex">
        <Flag
          code={showFlag(language)}
          // className={s.icon}
          className="w-6 h-6 object-cover rounded-full mr-3"
        />
        <p>{showLanguage(language)}</p>
      </button>
      {open && (
        <ul className="languages">
          {langArray.map(lng => {
            return (
              <li key={lng}>
                <Link to={originalPath} language={lng} onClick={handleOpen}>
                  <Flag code={showFlag(lng)} />
                  {showLanguage(lng)}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SwitchLanguages
