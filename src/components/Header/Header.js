import { Link } from 'gatsby';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../icons/logo.inline.svg';
import SearchBtnOpenModal from '../SearchBlock/SearchBtnOpenModal';
import * as s from './Header.module.css';

export const Header = ({
  mobileOpen,
  setMobileOpen,
  handleClose,
  menuCollapsed,
}) => {
  return (
    <div
      className={
        mobileOpen
          ? s.searchSectionMobile
          : menuCollapsed
          ? s.searchSectionMenuCollapsed
          : s.searchSectionMenuUncollapsed
      }
    >
      {mobileOpen && (
        <button
          type="button"
          aria-label="close menu"
          onClick={() => setMobileOpen(false)}
        >
          <AiOutlineClose className="h-6 w-6 smOnly:fill-white" />
        </button>
      )}
      <Link
        to={`/`}
        onClick={handleClose}
        className={
          mobileOpen
            ? ' mb-0'
            : menuCollapsed
            ? 'h-4 -rotate-90  md:mb-[52px] '
            : 'mb-[24px] '
        }
      >
        <Logo
          className={
            mobileOpen
              ? ' block  h-8 w-[100px]'
              : menuCollapsed
              ? 'h-4 w-[50px]'
              : 'mb-0 block  h-8 w-[100px]'
          }
          title="Go-It"
        />
      </Link>

      <SearchBtnOpenModal
        menuCollapsed={menuCollapsed}
        mobileOpen={mobileOpen}
      />
    </div>
  );
};
