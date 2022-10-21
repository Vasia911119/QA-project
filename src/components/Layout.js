import 'fontsource-inter'
import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <section className="mx-auto relative antialiased w-[1280px]">
      <div className="w-[348px] bg-blue-950 text-stone-400 fixed ">
        <Header />
        <Navbar />
        <Footer />
      </div>

      <main className="">
        <div className="ml-[348px]">{children}</div>
      </main>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
