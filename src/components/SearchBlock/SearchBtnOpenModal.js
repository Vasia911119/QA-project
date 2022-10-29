import React, { useState } from 'react';
import { SearchModal } from './SearchModal';
import { RiSearchLine } from 'react-icons/ri';

const SearchBtnOpenModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
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
        search
      </button>

      <SearchModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SearchBtnOpenModal;
