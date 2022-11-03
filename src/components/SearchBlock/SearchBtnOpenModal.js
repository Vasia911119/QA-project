import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { SearchModal } from './SearchModal';
import { BiSearch } from 'react-icons/bi';
import * as s from './Search.module.css';

const SearchBtnOpenModal = ({ menuCollapsed, mobileOpen }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { t } = useTranslation();

  const { button } = t('search', {
    returnObjects: true,
  });

  const closeModal = () => {
    setIsOpen(false);
    setSearchQuery('');
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {menuCollapsed || mobileOpen ? (
        <button type="button" className={s.searchBtnSm} onClick={openModal}>
          <BiSearch className={s.searchIcon} />
        </button>
      ) : (
        <button
          type="button"
          onClick={openModal}
          className={`${s.searchBtnLg} ${s.searchBtnBgLite}`}
        >
          <BiSearch className={s.searchIcon} />
          {button}
        </button>
      )}

      <SearchModal
        isOpen={isOpen}
        closeModal={closeModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
};

export default SearchBtnOpenModal;
