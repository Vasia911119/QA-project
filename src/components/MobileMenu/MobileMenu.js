import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
// import Header from '../Header';
// import Footer from '../Footer';
import * as s from './MobileMenu.module.css';

function MobileMenu({ setMobileOpen, handleClose, mobileOpen }) {
  useEffect(() => {
    document.body.setAttribute('overflow', 'hidden');

    return () => {
      document.body.setAttribute('overflow', 'hidden');
    };
  }, [mobileOpen]);

  return (
    <div className={mobileOpen ? s.mobileMemuOpened : s.mobileMemuClosed}>
      <Navbar
        setMobileOpen={setMobileOpen}
        mobileOpen={mobileOpen}
        handleClose={handleClose}
      />
    </div>
  );
}

export default MobileMenu;
