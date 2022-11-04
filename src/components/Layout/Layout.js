import 'fontsource-inter';
import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import useWindowResize from '../../hooks/useWindowResize';
import Navbar from '../Navbar';

import MobileMenu from '../MobileMenu/MobileMenu';
import * as s from './Layout.module.css';
import NotFoundPage from '../../pages/404';

export const MobileMenuContext = createContext();

const Layout = ({ children, pageContext }) => {
  const width = useWindowResize();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  // const [rememberMenuPosition, setRememberMenuPosition] = useState(false);

  const menuState = { mobileOpen, setMobileOpen };
  const handleClose = () => setMobileOpen(false);

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

  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  if (pageContext.layout === '404') {
    return <NotFoundPage />;
  } else
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
        <main className={s.main}>
          {mobileOpen && width < 768 && (
            <MobileMenu
              setMobileOpen={setMobileOpen}
              handleClose={handleClose}
              mobileOpen={mobileOpen}
            />
          )}
          <div
            className={!menuCollapsed ? ' mdOnly:ml-14' : ' ml-0'}
            style={mobileOpen ? { height: '0px' } : null}
          >
            <MobileMenuContext.Provider value={menuState}>
              {children}
            </MobileMenuContext.Provider>
          </div>
        </main>
      </section>
    );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
