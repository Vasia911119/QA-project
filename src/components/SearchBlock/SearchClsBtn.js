import React from 'react';
import * as s from './Search.module.css';
import { MdOutlineClear } from 'react-icons/md';

const SearchClsBtn = ({ onClsClick }) => {
  return (
    <>
      <button className={s.searchClsBtn} onClick={onClsClick}>
        <MdOutlineClear color="#F8FAFC" size={44} />
      </button>
    </>
  );
};

export default SearchClsBtn;
