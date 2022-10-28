import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { HTMLContent } from './Content';
import useMenuStructure from '../queries/menu-structure';
import Accordion from './Accordion/Accordion';

export default function Navbar() {
  const menuItems = useMenuStructure();
  // const { t, i18n } = useTranslation();

  // home page menu chapter
  const menuIHomePage = menuItems.filter(
    i => i.frontmatter.page_chapter_name === 'home'
  );
  const homePageTitle = menuIHomePage[0].frontmatter.page_chapter_title;
  console.log(menuIHomePage);
  // components chapter

  const menuItemsWithoutHomePage = menuItems.filter(
    i => i.frontmatter.page_chapter_name === 'component'
  );
  const accordionData = menuItemsWithoutHomePage.reduce((acc, next) => {
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
        },
      ],
    };
  }, {});

  // links chapters
  const linksMenu = menuItems.filter(i => i.frontmatter.link_chapter_name);
  console.log(linksMenu);

  return (
    <div className="navigationScroll max-h-[600px] overflow-y-auto py-6 px-5 text-base font-semibold  text-grey-350">
      <ul className="flex flex-col ">
        <li className="navigationItem ">
          <div className="navigationItemIcon"></div>
          <Link to={'/'} className=" ">
            {homePageTitle}
          </Link>
        </li>
        <li className="navigationItem">
          <div className="navigationItemIcon"></div>
          <Accordion title={accordionData.title} content={accordionData.sub} />
        </li>
        {/* {linksMenu.map(i => (
          <li className="navigationItem ">
            <div className="navigationItemIcon"></div>
            <Accordion
              title={i.frontmatter.link_chapter_title}
              content={i.frontmatter.links_items}
            />
          </li>
        ))} */}

        <li className="navigationItem ">
          <div className="navigationItemIcon"></div>
          <Accordion
            title={linksMenu[0].frontmatter.link_chapter_title}
            content={linksMenu[0].frontmatter.links_items}
          />
        </li>
        <li className="navigationItem ">
          <div className="navigationItemIcon"></div>
          <Accordion
            title={linksMenu[1].frontmatter.link_chapter_title}
            content={linksMenu[1].frontmatter.links_items}
          />
        </li>
      </ul>
    </div>
  );
}
