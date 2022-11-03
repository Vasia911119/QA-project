import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { SearchModal } from './SearchModal';
import { BiSearch } from 'react-icons/bi';
import * as s from './Search.module.css';

const SearchBtnOpenModal = ({ className }) => {
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
      <button className={className} type="button" onClick={openModal}>
        <BiSearch className={s.searchIcon} />
        {button}
      </button>

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
