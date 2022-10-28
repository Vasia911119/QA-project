import React from 'react'
import { Link } from 'gatsby'
import SearchBtnOpenModal from './SearchBlock/SearchBtnOpenModal'
import useSiteMetadata from '../queries/site-metadata'
import Logo from './Logo'

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <header className="  py-2 px-4 pt-7 pb-4 border-b border-stone-400">
      <Link to={`/`} className="">
        <Logo title={title} />
      </Link>

      <SearchBtnOpenModal />
    </header>
  )
}
