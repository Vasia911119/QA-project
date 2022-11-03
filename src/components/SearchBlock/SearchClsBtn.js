import React from 'react';
// import { useTranslation } from 'gatsby-plugin-react-i18next';
// import { SearchModal } from './SearchModal';
import { GrClose } from 'react-icons/gr';
import * as s from './Search.module.css';

const SearchClsBtn = ({ onClsClick }) => {
  //   let [isOpen, setIsOpen] = useState(false);
  //   const [searchQuery, setSearchQuery] = useState('');

  //   const closeModal = () => {
  //     setIsOpen(false);
  //     setSearchQuery('');
  //   };

  //   const openModal = () => {
  //     setIsOpen(true);
  //   };

  return (
    <>
      <button className={s.searchClsBtn} onClick={onClsClick}>
        <GrClose className={s.searchClsIcon} size={24} />
      </button>
      {/* 
      <SearchModal
        isOpen={isOpen}
        closeModal={closeModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      /> */}
    </>
  );
};

export default SearchClsBtn;
