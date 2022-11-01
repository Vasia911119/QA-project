import 'fontsource-inter';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useWindowResize from '../../hooks/useWindowResize';
import Navbar from '../Navbar/Navbar';
import { BiMenu } from 'react-icons/bi';
import ContentSection from '../ContentSection';
import MobileMenu from '../MobileMenu/MobileMenu';
import * as s from './Layout.module.css';

const Layout = ({ children }) => {
  const width = useWindowResize();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [rememberMenuPosition, setRememberMenuPosition] = useState(false);

  console.log(width);
  const handleClose = () => setMobileOpen(false);
  console.log('rememberMenuPosition', rememberMenuPosition);
  useEffect(() => {
    if (width > 768 && mobileOpen) setMobileOpen(false);
    if (width < 1280 && !menuCollapsed) setMenuCollapsed(true);
    if (width > 1280 && menuCollapsed) {
      setMenuCollapsed(false);
      // setRememberMenuPosition(true);
    }
  }, [width]);
  useEffect(() => {
    if (width < 1280) setMenuCollapsed(true);
  }, []);

  return (
    <section className={s.mainSection}>
      {width >= 768 && (
        <div className={menuCollapsed ? s.collapsed : s.uncollapsed}>
          <Navbar
            setMenuCollapsed={setMenuCollapsed}
            menuCollapsed={menuCollapsed}
          />
        </div>
      )}

      <main className="">
        {!mobileOpen && width < 768 && (
          <button className={s.button} onClick={() => setMobileOpen(true)}>
            <BiMenu className={s.biMenu} />
          </button>
        )}
        {mobileOpen && width < 768 && (
          <MobileMenu
            setMobileOpen={setMobileOpen}
            handleClose={handleClose}
            mobileOpen={mobileOpen}
          />
        )}
        <div className={!menuCollapsed ? ' mdOnly:ml-14' : 'ml-0'}>
          {children}
        </div>
      </main>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
