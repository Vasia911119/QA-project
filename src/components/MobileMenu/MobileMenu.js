import React, { useState } from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'

function MobileMenu({ handleClose, isOpen }) {
  return (
    <div className={isOpen ? 'mobileMemuOpened' : 'mobileMemuClosed'}>
      <Header handleClose={handleClose} />
      <Navbar handleClose={handleClose} />
      <Footer handleClose={handleClose} />
    </div>
  )
}

export default MobileMenu
