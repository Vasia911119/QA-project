import 'fontsource-inter';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useWindowResize from '../../hooks/useWindowResize';
import Navbar from '../Navbar';
import { BiMenu } from 'react-icons/bi';
import MobileMenu from '../MobileMenu/MobileMenu';
import * as s from './Layout.module.css';
import NotFoundPage from '../../pages/404';
import Logo from '../Logo';
import { Link } from 'gatsby';

const Layout = ({ children, pageContext }) => {
  const width = useWindowResize();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  // const [rememberMenuPosition, setRememberMenuPosition] = useState(false);

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

  // <<<<<<< HEAD
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
          // =======
          //       <main className={s.main}>
          //         {!mobileOpen && width < 768 && (
          //           <button className={s.button} onClick={() => setMobileOpen(true)}>
          //             <BiMenu className={s.biMenu} />
          //           </button>
          // >>>>>>> 80925b82b11d4db158d056a1a85582b66d6dde9e
        )}

        <main className="">
          {!mobileOpen && width < 768 && (
            <div className={s.mobileHeader}>
              <Link to="/">
                {websiteTheme === 'dark' ? <Logo /> : <Logo black />}
              </Link>
              <button
                aria-label="open menu"
                type="button"
                onClick={() => setMobileOpen(true)}
              >
                <BiMenu className={s.biMenu} />
              </button>{' '}
            </div>
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
