import 'fontsource-inter'

import { withPrefix } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'

// import useSiteMetadata from '../queries/site-metadata'

import Header from './Header'

const Layout = ({ children }) => {
  const color = '#ffffff'
  // const { color } = useSiteMetadata()

  return (
    <>
      <div className="max-w-screen-lg mx-auto relative antialiased">
        <Header />
        <Navbar />
        <main className="">
          <div className="ml-60">{children}</div>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
