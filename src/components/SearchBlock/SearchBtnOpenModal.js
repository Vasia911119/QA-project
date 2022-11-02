import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { SearchModal } from './SearchModal';
import { RiSearchLine } from 'react-icons/ri';

const SearchBtnOpenModal = () => {
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
      <button
        className="flex h-10 w-[100%] cursor-pointer items-center justify-start gap-[10px] rounded-[10px] bg-[#EDEEF9] pl-5 capitalize text-[#9EA2C6] transition-colors hover:bg-slate-200 focus:bg-slate-200"
        type="button"
        onClick={openModal}
      >
        <RiSearchLine color="#9EA2C6" size={24} />
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
