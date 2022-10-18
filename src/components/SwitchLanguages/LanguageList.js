import React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'

export const showLanguage = lang => {
  return lang === 'uk' ? 'UA' : lang.toUpperCase()
}

const LanguageList = ({ onItemClick }) => {
  const { languages, originalPath } = useI18next()

  return (
    <ul className="languages">
      {languages.map(lng => (
        <li key={lng}>
          <Link to={originalPath} language={lng} onClick={onItemClick}>
            {showLanguage(lng)}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LanguageList
