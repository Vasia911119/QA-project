import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { HTMLContent } from '../Content';
import useMenuStructure from '../../queries/menu-structure';
import useWindowResize from '../../hooks/useWindowResize';
import Logo from '../Logo';
import SwitchLanguages from '../SwitchLanguages';
import ToggleMode from '../Toggler';
import { BiHomeAlt, BiChevronsLeft, BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import {
  HiOutlineTemplate,
  HiOutlineCreditCard,
  HiOutlineDocumentText,
} from 'react-icons/hi';
import * as s from './Navbar.module.css';

import Accordion from '../Accordion/Accordion';

export default function Navbar({
  mobileOpen,
  setMobileOpen,
  handleClose,
  menuCollapsed,
  setMenuCollapsed,
}) {
  const menuItems = useMenuStructure();
  const { t, i18n } = useTranslation();
  const width = useWindowResize();

  // ============= home page menu chapter (render only first page the home chapter) ================
  const menuIHomePage = menuItems.filter(
    i =>
      i.frontmatter.page_chapter_name === 'home' &&
      i.frontmatter.language === i18n.language
  );

  const homePageTitle = menuIHomePage[0].frontmatter.page_chapter_title;

  // ========================= =======================================

  //====== filtering data for certain chapter menu by chapter name
  const buildNewPagesChapterStructure = function (allData, chapterName) {
    const menuItemsWithoutHomePage = allData.filter(
      i =>
        i.frontmatter.page_chapter_name === chapterName &&
        i.frontmatter.language === i18n.language
    );
    return menuItemsWithoutHomePage.reduce((acc, next) => {
      const curGroup = acc.sub ?? [];
      return {
        ...acc,
        title: next.frontmatter.page_chapter_title,
        sub: [
          ...curGroup,
          {
            title: next.frontmatter.page_title,
            slug: next.fields.slug,
            html: next.html,
            position: next.frontmatter.page_range,
          },
        ],
      };
    }, {});
  };

  //===example=== const accordionDataSome_new_chapter_name = buildNewPagesChapterStructure(menuItems, 'some_new_chapter_name');
  const accordionDataComponent = buildNewPagesChapterStructure(
    menuItems,
    'component'
  );
  const homeDataComponent = buildNewPagesChapterStructure(menuItems, 'home');
  console.log(homeDataComponent);

  // links chapters array
  const linksMenu = menuItems.filter(
    i =>
      i.frontmatter.link_chapter_name &&
      i.frontmatter.language === i18n.language
  );
  console.log(linksMenu);

  return (
    <div
      className={menuCollapsed ? s.sidebarWrapperCollapsed : s.sidebarWrapper}
    >
      <div
        className={
          menuCollapsed
            ? ' flex h-24 w-full flex-col items-center justify-center border-b border-stone-400 pb-4'
            : 'w-full border-b border-stone-400  px-5 pb-4'
        }
      >
        {mobileOpen && (
          <button
            className="absolute right-5 top-8"
            onClick={() => setMobileOpen(false)}
          >
            <AiOutlineClose clsassName="h-6 w-6" />
          </button>
        )}
        <Link
          to={`/`}
          onClick={handleClose}
          className={menuCollapsed ? 'mb-9 block w-12 -rotate-90' : 'mb-9 '}
        >
          <Logo rotate={menuCollapsed} className={'mb-5 block'} title="Go-It" />
        </Link>
        {menuCollapsed ? (
          <BiSearch className="h-5 w-5" />
        ) : (
          <input
            type="text"
            className="w-full rounded p-3 text-sm"
            placeholder={'Search'}
          />
        )}
      </div>
      <ul
        style={menuCollapsed ? { maxWidth: '56px' } : null}
        className={`navigationScroll ${
          menuCollapsed ? s.collapsedNavigation : s.navigation
        }`}
      >
        <li className={s.navigationItem}>
          <Link to={'/'}>
            <BiHomeAlt className="h-5 w-5" />
          </Link>
          <Link
            to={'/'}
            onClick={handleClose}
            className={menuCollapsed ? 'hidden' : 'ml-4 w-full'}
          >
            {homePageTitle}
          </Link>
        </li>
        <li className={s.navigationItem}>
          <div onClick={() => setMenuCollapsed(false)} className={s.icon}>
            {<HiOutlineTemplate className="h-5 w-5" />}
          </div>
          <Accordion
            className={menuCollapsed ? 'hidden' : 'ml-4 w-full'}
            handleClose={handleClose}
            title={accordionDataComponent.title}
            content={accordionDataComponent.sub}
          />
        </li>

        <li className={s.navigationItem}>
          <div onClick={() => setMenuCollapsed(false)} className={s.icon}>
            {<HiOutlineCreditCard className="h-5 w-5" />}
          </div>

          <Accordion
            className={menuCollapsed ? 'hidden' : 'ml-4 w-full'}
            handleClose={handleClose}
            title={linksMenu[0].frontmatter.link_chapter_title}
            content={linksMenu[0].frontmatter.links_items}
          />
        </li>
        <li className={s.navigationItem}>
          <div onClick={() => setMenuCollapsed(false)} className={s.icon}>
            {<HiOutlineDocumentText className="h-5 w-5" />}
          </div>

          <Accordion
            className={menuCollapsed ? 'hidden' : 'ml-4 w-full'}
            handleClose={handleClose}
            title={linksMenu[1].frontmatter.link_chapter_title}
            content={linksMenu[1].frontmatter.links_items}
          />
        </li>
      </ul>
      <div className={menuCollapsed ? s.footer : s.collapsedFooter}>
        <SwitchLanguages collapsed={menuCollapsed} />
        <ToggleMode collapsed={menuCollapsed} />
        {width >= 768 && (
          <button
            type="button"
            onClick={() => setMenuCollapsed(!menuCollapsed)}
          >
            <BiChevronsLeft
              className={menuCollapsed ? s.collapsedMenu : s.uncollapsedMenu}
            />
          </button>
        )}
      </div>
    </div>
  );
}
