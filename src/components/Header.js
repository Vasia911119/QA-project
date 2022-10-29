import React from 'react';
import { Link } from 'gatsby';

import useSiteMetadata from '../queries/site-metadata';
import Logo from './Logo';
import SearchBtnOpenModal from './SearchBlock/SearchBtnOpenModal';

export default function Header() {
  const { title } = useSiteMetadata();

  return (
    <header className="  border-b border-stone-400 py-2 px-4 pt-7 pb-4">
      <Link to={`/`} className="">
        <Logo title={title} />
      </Link>
      <SearchBtnOpenModal />
    </header>
  );
}
