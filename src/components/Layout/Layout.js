import 'fontsource-inter';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../Navbar';

import NotFoundPage from '../../pages/404';
import MobileMenu from '../MobileMenu/MobileMenu';
import * as s from './Layout.module.css';

export const MobileMenuContext = createContext();

const Layout = ({ children, pageContext }) => {
  const breakpoints = useBreakpoint();

  const [sidebarLoaded, setSidebarLoaded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const menuState = { mobileOpen, setMobileOpen };
  const handleCloseMobileMenu = () => {
    setMobileOpen(false);
  };
  const colapseMenuOnTablet = () => {
    breakpoints.tablet && breakpoints.md && setMenuCollapsed(true);
  };
  useEffect(() => {
    if (breakpoints.md && mobileOpen) setMobileOpen(false);
    if (breakpoints.tablet && !menuCollapsed) setMenuCollapsed(true);
    if (breakpoints.lg && menuCollapsed) {
      setMenuCollapsed(false);
    }
  }, [breakpoints.lg, breakpoints.tablet, breakpoints.md]);

  useEffect(() => {
    colapseMenuOnTablet();
    {
      breakpoints.sm && setSidebarLoaded(true);
    }
  }, []);

  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  if (pageContext.layout === '404') {
    return <NotFoundPage />;
  } else
    return (
      <main className={s.mainSection}>
        {breakpoints.md && (
          <div className={menuCollapsed ? s.collapsed : s.uncollapsed}>
            <Navbar
              colapseMenuOnTablet={colapseMenuOnTablet}
              setSidebarLoaded={setSidebarLoaded}
              handleCloseMobileMenu={handleCloseMobileMenu}
              setMenuCollapsed={setMenuCollapsed}
              menuCollapsed={menuCollapsed}
            />
          </div>
        )}
        <div className={s.main}>
          {mobileOpen && breakpoints.sm && (
            <MobileMenu
              setMobileOpen={setMobileOpen}
              handleCloseMobileMenu={handleCloseMobileMenu}
              mobileOpen={mobileOpen}
            />
          )}
          <div
            className={!menuCollapsed ? ' mdOnly:ml-14' : ' ml-0'}
            style={mobileOpen ? { display: 'none' } : null}
          >
            <MobileMenuContext.Provider value={menuState}>
              {breakpoints.md && sidebarLoaded && children}
              {breakpoints.sm && children}
            </MobileMenuContext.Provider>
          </div>
        </div>
      </main>
    );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
