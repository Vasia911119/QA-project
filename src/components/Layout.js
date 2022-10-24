import 'fontsource-inter'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'

import Header from './Header'
import Footer from './Footer'
import MobileMenu from './MobileMenu/MobileMenu'
import { BiMenu } from 'react-icons/bi'
import useWindowResize from '../hooks/useWindowResize'

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleClose = () => setMobileOpen(!mobileOpen)

  const width = useWindowResize()

  useEffect(() => {
    if (width > 768 && mobileOpen) setMobileOpen(false)
  }, [width])

  return (
    <section className="mx-auto relative antialiased  md:w-[768px] xl:w-[1280px]">
      {width >= 768 && (
        <div className="md:w-[348px] bg-blue-950 text-stone-400">
          <Header />
          <Navbar />
          <Footer />
        </div>
      )}
      <main className="relative">
        {!mobileOpen && width < 768 && (
          <button className="absolute right-5 top-8 " onClick={handleClose}>
            <BiMenu className="w-6 h-6" />
          </button>
        )}
        {mobileOpen && width < 768 && (
          <MobileMenu handleClose={handleClose} isOpen={mobileOpen} />
        )}
        <div className="md:ml-[48px] xl:ml-[348px]">{children}</div>
      </main>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
