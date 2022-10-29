import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header';
import Footer from '../Footer';

function MobileMenu({ setMobileOpen, handleClose, mobileOpen }) {
  return (
    <div className={mobileOpen ? 'mobileMemuOpened' : 'mobileMemuClosed'}>
      <Navbar
        setMobileOpen={setMobileOpen}
        mobileOpen={mobileOpen}
        handleClose={handleClose}
      />
    </div>
  );
}

export default MobileMenu;
