import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { HTMLContent } from './Content';
import useMenuStructure from '../queries/menu-structure';
import Accordion from './Accordion/Accordion';

export default function Navbar() {
  const menuItems = useMenuStructure();
  // console.log(menuItems);
  const { t, i18n } = useTranslation();
  //   const { home, components, presentations, templates } = t('header', {
  //     returnObjects: true,
  //   })
  // const pagesCollection = menuItems.find(item => {
  //   if (item.node.frontmatter.pages_chapter_item)
  //     return item.node.frontmatter.pages_chapter_item;
  // });

  // const { pages_chapter_item: pagesCollectionList } =
  //   pagesCollection.node.frontmatter;

  // const sortedPageChapters = pagesCollectionList.sort(
  //   (a, b) => a.chapter_range - b.chapter_range
  // );
  // console.log(sortedPageChapters);

  //   const linksCollection = menuItems.find(item => {
  //     if (item.node.frontmatter.links_chapter_item)
  //       return item.node.frontmatter.links_chapter_item || [];
  //   });

  //   const { links_chapter_item: linksCollectionList } =
  //     pagesCollection.node.frontmatter;

  //   const sortedLinkChapters = linksCollectionList.sort(
  //     (a, b) => a.chapter_range - b.chapter_range
  //   );
  //   console.log('sortedLinkChapters', sortedLinkChapters);

  return <p>menu</p>;
  //   return (
  //     <div className="navigationScroll font-semibold text-base text-grey-350 py-6 px-5 overflow-y-auto  max-h-[600px]">
  //       <ul className="flex flex-col ">
  //         <li className="navigationItem ">
  //           <div className="navigationItemIcon"></div>
  //           <Link to={'/'} className=" ">
  //             {t(home)}
  //           </Link>
  //         </li>
  //         <li className="navigationItem">
  //           <div className="navigationItemIcon"></div>
  //           <Accordion
  //             title={t(components)}
  //             content={
  //               Array.isArray(menuItems) &&
  //               menuItems.map(item =>
  //                 item.node.frontmatter.templateKey === 'component' &&
  //                 item.node.frontmatter.language === i18n.language ? (
  //                   <Accordion
  //                     titleUrl={item.node.fields.slug}
  //                     key={item.node.frontmatter.title}
  //                     title={item.node.frontmatter.title}
  //                     content={
  //                       <HTMLContent content={item.node.tableOfContents} />
  //                     }
  //                   />
  //                 ) : null
  //               )
  //             }
  //           />
  //         </li>
  //         <li className="navigationItem ">
  //           <div className="navigationItemIcon"></div>
  //           <Accordion
  //             title={t(presentations)}
  //             content={
  //               Array.isArray(menuItems) &&
  //               menuItems.map(item =>
  //                 item.node.frontmatter.templateKey === 'presentation' &&
  //                 item.node.frontmatter.language === i18n.language ? (
  //                   <div key={item.node.frontmatter.title}>
  //                     <HTMLContent content={item.node.html} />
  //                   </div>
  //                 ) : null
  //               )
  //             }
  //           />
  //         </li>
  //         <li className="navigationItem">
  //           <div className="navigationItemIcon"></div>
  //           <Accordion
  //             title={t(templates)}
  //             content={
  //               Array.isArray(menuItems) &&
  //               menuItems.map(item =>
  //                 item.node.frontmatter.templateKey === 'template' ? (
  //                   <div key={item.node.frontmatter.title}>
  //                     <HTMLContent content={item.node.html} />
  //                   </div>
  //                 ) : null
  //               )
  //             }
  //           />
  //         </li>
  //       </ul>
  //     </div>
  //   )
}
