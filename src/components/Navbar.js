import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { HTMLContent } from './Content';
import useMenuStructure from '../queries/menu-structure';
import Accordion from './Accordion/Accordion';

export default function Navbar() {
  const menuItems = useMenuStructure();

  const { t, i18n } = useTranslation();
  //   const { home, components, presentations, templates } = t('header', {
  //     returnObjects: true,
  //   })
  //   const pagesCollection = menuItems.find(item => {
  //     if (item.node.frontmatter.pages_chapter_item)
  //       return item.node.frontmatter.pages_chapter_item;
  //   });

  //   const { pages_chapter_item: pagesCollectionList } =
  //     pagesCollection.node.frontmatter;

  //   const linksCollection = menuItems.find(item => {
  //     if (item.node.frontmatter.links_chapter_item)
  //       return item.node.frontmatter.links_chapter_item;
  //   });

  //   const { links_chapter_item: linksCollectionList } =
  //     linksCollection.node.frontmatter;
  //   console.log(pagesCollectionList);
  //   console.log(linksCollectionList);

  //   //   const menuSubItems = menuItems.find(item => {
  //   //     if (item.node.frontmatter.pages_chapter_item)
  //   //       return item.node.frontmatter.pages_chapter_item;
  //   //   });

  //   const componentsChapterName = pagesCollectionList[1].pages_chapter_name;
  //   const listOfComponentsNodes = menuItems.filter(
  //     i => i.node.frontmatter.page_chapter_name === componentsChapterName
  //   );
  //   console.log(listOfComponentsNodes);
  return (
    <div className="navigationScroll max-h-[600px] overflow-y-auto py-6 px-5 text-base font-semibold  text-grey-350">
      //{' '}
    </div>
    //   <ul className="flex flex-col ">
    //     <li className="navigationItem ">
    //       <div className="navigationItemIcon"></div>
    //       <Link to={'/'} className=" ">
    //         {/* {t(home)} */}
    //         {pagesCollectionList[0].chapter_title_UA}
    //       </Link>
    //     </li>
    //     <li className="navigationItem">
    //       <div className="navigationItemIcon"></div>
    //       <Accordion
    //         // title={t(components)}
    //         title={pagesCollectionList[1].chapter_title_UA}
    //         content={<p>sub</p>}
    //         //   Array.isArray(menuItems) &&
    //         //   menuItems.map(item =>
    //         //     item.node.frontmatter.templateKey === 'component' &&
    //         //     item.node.frontmatter.language === i18n.language ? (
    //         //       <Accordion
    //         //         titleUrl={item.node.fields.slug}
    //         //         key={item.node.frontmatter.title}
    //         //         title={item.node.frontmatter.title}
    //         //         content={
    //         //           <HTMLContent content={item.node.tableOfContents} />
    //         //         }
    //         //       />
    //         //     ) : null
    //         //   )
    //       />
    //     </li>
    //     <li className="navigationItem ">
    //       <div className="navigationItemIcon"></div>
    //       <Accordion
    //         // title={t(presentations)}
    //         title={linksCollectionList[0].chapter_title_UA}
    //         content={
    //           Array.isArray(menuItems) &&
    //           menuItems.map(item =>
    //             item.node.frontmatter.templateKey === 'presentation' &&
    //             item.node.frontmatter.language === i18n.language ? (
    //               <div key={item.node.frontmatter.title}>
    //                 <HTMLContent content={item.node.html} />
    //               </div>
    //             ) : null
    //           )
    //         }
    //       />
    //     </li>
    //     <li className="navigationItem">
    //       <div className="navigationItemIcon"></div>
    //       <Accordion
    //         // title={t(templates)}
    //         title={linksCollectionList[1].chapter_title_UA}
    //         content={
    //           Array.isArray(menuItems) &&
    //           menuItems.map(item =>
    //             item.node.frontmatter.templateKey === 'template' ? (
    //               <div key={item.node.frontmatter.title}>
    //                 <HTMLContent content={item.node.html} />
    //               </div>
    //             ) : null
    //           )
    //         }
    //       />
    //     </li>
    //   </ul>
    // </div>
  );
}
