import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

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
  const { i18n } = useTranslation();
  const width = useWindowResize();

  // ------if adding new page/links chapter => add a new icon for this certain array of icons ------
  const notHomePageMenuChaptersIcons = [
    <HiOutlineTemplate className={s.icon} />,
  ];
  const linkCaptersIcons = [
    <HiOutlineCreditCard className={s.icon} />,
    <HiOutlineDocumentText className={s.icon} />,
  ];

  // ============= home page menu chapter (render only first page the home chapter) ================
  const menuHomePage = menuItems.filter(
    i =>
      i.frontmatter.page_chapter_name === 'home' &&
      i.frontmatter.language === i18n.language
  );

  const homePageTitle = menuHomePage[0].frontmatter.page_chapter_title;

  // =========================end of home page menu chapter =======================================

  // =========================filtering data for other peges chapters =============================
  const notHomePageMenuChaptersName = menuItems
    .filter(
      i =>
        i.frontmatter.page_chapter_name !== 'home' &&
        i.frontmatter.language === i18n.language
    )
    .reduce(
      (acc, next) =>
        next.frontmatter.page_chapter_name &&
        !acc.includes(next.frontmatter.page_chapter_name)
          ? [...acc, next.frontmatter.page_chapter_name]
          : acc,
      []
    );

  const buildNewPagesChapterStructure = function (allData, chapterName) {
    const menuItemsWithoutHomePage = allData.filter(
      i =>
        i.frontmatter.page_chapter_name === chapterName &&
        i.frontmatter.language === i18n.language
    );
    if (menuItemsWithoutHomePage.length) {
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
    } else return null;
  };
  // ============== end of filtering data for other peges chapters (not home chapter) ===========

  // ========== links chapters array =============
  const linksMenus = menuItems.filter(
    i =>
      i.frontmatter.link_chapter_name &&
      i.frontmatter.language === i18n.language
  );
  console.log(linksMenus);
  return (
    <div
      className={menuCollapsed ? s.sidebarWrapperCollapsed : s.sidebarWrapper}
    >
      <div
        className={
          mobileOpen
            ? 'items  flex w-full flex-row-reverse  items-center justify-between border-b-[2px] border-[#9EA2C6] px-5 pb-7'
            : menuCollapsed
            ? 'flex h-32 w-full flex-col items-center justify-between border-b border-stone-400 pb-4'
            : 'flef w-full flex-col  border-b border-stone-400 px-5 pb-4'
        }
      >
        {mobileOpen && (
          <button
            className={s.closeModalButton}
            onClick={() => setMobileOpen(false)}
          >
            <AiOutlineClose />
          </button>
        )}
        <Link
          to={`/`}
          onClick={handleClose}
          className={
            mobileOpen
              ? ' mb-0'
              : menuCollapsed
              ? 'mt-8 h-4 -rotate-90'
              : 'mb-9 '
          }
        >
          <Logo
            className={
              mobileOpen
                ? ' block  h-8 w-[100px]'
                : menuCollapsed
                ? 'h-4 w-[50px]'
                : 'mb-0 block  h-8 w-[100px]'
            }
            title="Go-It"
          />
        </Link>

        {menuCollapsed || mobileOpen ? (
          <BiSearch
            className={'h-6 w-6 hover:text-slate-50 focus:text-slate-50'}
          />
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
          menuCollapsed
            ? s.navigationCollapsed
            : mobileOpen
            ? s.navigationMobile
            : s.navigation
        }`}
      >
        <li className={mobileOpen ? s.navigationItemMobile : s.navigationItem}>
          <Link to={'/'}>
            <BiHomeAlt className={s.icon} />
          </Link>
          <Link
            to={'/'}
            onClick={handleClose}
            className={
              menuCollapsed
                ? 'hidden'
                : 'ml-4 w-full hover:text-slate-50 focus:text-slate-50'
            }
          >
            {homePageTitle}
          </Link>
        </li>
        {notHomePageMenuChaptersName.length &&
          notHomePageMenuChaptersName.map((i, index) => {
            const accordionDataComponent = buildNewPagesChapterStructure(
              menuItems,
              i
            );
            // console.log(accordionDataComponent);
            if (accordionDataComponent)
              return (
                <li
                  key={i}
                  className={
                    mobileOpen ? s.navigationItemMobile : s.navigationItem
                  }
                >
                  <div
                    onClick={() => setMenuCollapsed(false)}
                    className={s.icon}
                  >
                    {notHomePageMenuChaptersIcons[index]}
                  </div>
                  <Accordion
                    className={menuCollapsed ? 'hidden' : 'ml-4 w-full'}
                    handleClose={handleClose}
                    title={accordionDataComponent.title}
                    content={accordionDataComponent.sub}
                  />
                </li>
              );
          })}
        {linksMenus.length &&
          linksMenus.map((i, index) => {
            console.log(i);
            return (
              <li
                className={
                  mobileOpen ? s.navigationItemMobile : s.navigationItem
                }
                key={i.frontmatter.link_chapter_title}
              >
                <div onClick={() => setMenuCollapsed(false)} className={s.icon}>
                  {linkCaptersIcons[index]}
                </div>

                <Accordion
                  icon={linkCaptersIcons[index]}
                  className={menuCollapsed ? 'hidden' : 'ml-4 w-full'}
                  handleClose={handleClose}
                  title={i.frontmatter.link_chapter_title}
                  content={i.frontmatter.links_items}
                />
              </li>
            );
          })}
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
              className={
                menuCollapsed ? s.collapsedMenuButton : s.uncollapsedMenuButton
              }
            />
          </button>
        )}
      </div>
    </div>
  );
}
