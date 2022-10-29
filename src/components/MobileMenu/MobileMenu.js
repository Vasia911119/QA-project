import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header';
import Footer from '../Footer';

function MobileMenu({ handleClose, isOpen }) {
  return (
    <div className={isOpen ? 'mobileMemuOpened' : 'mobileMemuClosed'}>
      <Navbar handleClose={handleClose} />
    </div>
  );
}

export default MobileMenu;
