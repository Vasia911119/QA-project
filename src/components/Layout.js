import 'fontsource-inter';
import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';

// import Header from './Header'
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    // <p>hello</p>
    <section className="max-sm:max-w-[480px] relative mx-auto antialiased sm:w-[480px] md:w-[768px] xl:w-[1280px]">
      <div className="fixed bg-blue-950 text-stone-400 md:w-[48px] xl:w-[348px] ">
        {/* <Header /> */}
        <Navbar />
        <Footer />
      </div>

      <main className="">
        <div className="md:ml-[48px] xl:ml-[348px]">{children}</div>
      </main>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
