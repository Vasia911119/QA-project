import 'fontsource-inter';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import PropTypes from 'prop-types';
import React, { createContext, useLayoutEffect, useState } from 'react';
import Navbar from '../Navbar';

import NotFoundPage from '../../pages/404';
import MobileMenu from '../MobileMenu/MobileMenu';
import * as s from './Layout.module.css';

export const MobileMenuContext = createContext();

const Layout = ({ children, pageContext }) => {
  const brakepoints = useBreakpoint();

  const [sidebarLoaded, setSidebarLoaded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const menuState = { mobileOpen, setMobileOpen };
  const handleCloseMobileMenu = () => {setMobileOpen(false)};
  const colapseMenuOnTablet = () => {
    brakepoints.tablet && brakepoints.md && setMenuCollapsed(true);
  };
  useLayoutEffect(() => {
    if (brakepoints.md && mobileOpen) setMobileOpen(false);
    if (brakepoints.tablet && !menuCollapsed) setMenuCollapsed(true);
    if (brakepoints.lg && menuCollapsed) {
      setMenuCollapsed(false);
    }
  }, [brakepoints.lg, brakepoints.tablet, brakepoints.md]);
  useLayoutEffect(() => {
   colapseMenuOnTablet()
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
        {brakepoints.md && (
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
          {mobileOpen && brakepoints.sm && (
            <MobileMenu
              setMobileOpen={setMobileOpen}
              handleCloseMobileMenu={handleCloseMobileMenu}
              mobileOpen={mobileOpen}
            />
          )}
          <div
            className={!menuCollapsed ? ' mdOnly:ml-14' : ' ml-0'}
            style={mobileOpen ? { height: '0px' } : null}
          >
            <MobileMenuContext.Provider value={menuState}>
              {sidebarLoaded && children}
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
