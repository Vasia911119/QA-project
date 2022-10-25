import React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import Flag from 'react-world-flags'

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
      <button onClick={handleOpen} className="flex items-center">
        <Flag
          code={showFlag(language)}
          className="w-6 h-6 !inline-block object-cover rounded-[50%] mr-3"
          fallback={
            <span className="w-6 h-6 inline-block object-cover rounded-[50%] mr-3 bg-white"></span>
          }
        />
        <p className="text-grey-350 hover:text-slate-50 transition-colors">
          {showLanguage(language)}
        </p>
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
                    className="w-6 h-6 !inline-block object-cover rounded-[50%] mr-3"
                    fallback={
                      <span className="w-6 h-6 inline-block object-cover rounded-[50%] mr-3 bg-white"></span>
                    }
                  />
                  <p className="text-grey-350 hover:text-slate-50 transition-colors">
                    {showLanguage(lng)}
                  </p>
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
