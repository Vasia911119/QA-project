import React from 'react'
import { Link } from 'gatsby'

import useSiteMetadata from '../queries/site-metadata'
import Logo from './Logo'

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <header className="flex items-center justify-between py-2 bg-green-300">
      <Link to={`/`} className="px-2 lg:px-0">
        <Logo title={title} />
      </Link>
      <ul className="flex items-center">
        <li key="navbar-change-theme" className="px-2 lg:px-4">
          <button
            onClick={() => console.log('change theme')}
            className="text-gray-500 font-semibold hover:text-gray-700"
          >
            change them
          </button>
        </li>
        <li key="navbar-change-language" className="px-2 lg:px-4">
          <button
            onClick={() => console.log('language')}
            className="text-gray-500 font-semibold hover:text-gray-700"
          >
            change language
          </button>
        </li>
      </ul>
    </header>
  )
}
