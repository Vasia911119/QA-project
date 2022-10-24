import React from 'react'
import { Link } from 'gatsby'
import { HTMLContent } from './Content'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import useMenuStructure from '../queries/menu-structure'
import Accordion from './Accordion/Accordion'

import SwitchLanguages from './SwitchLanguages'
import { HiOutlineDocumentText, HiOutlineTemplate } from 'react-icons/hi'
import { BiHome, BiCreditCard } from 'react-icons/bi'

export default function Navbar() {
  const menuItems = useMenuStructure()

  const { t, i18n } = useTranslation()
  const { home, components, presentations, templates } = t('header', {
    returnObjects: true,
  })

  // console.log(menuItems)

  return (
    <div className="navigationScroll font-semibold text-base text-grey-350 py-6 px-5 overflow-y-auto  max-h-[600px]">
      <ul className="flex flex-col ">
        <li className="navigationItem ">
          <BiHome />
          <Link to={'/'} className=" ">
            {t(home)}
          </Link>
        </li>
        <li className="navigationItem">
          <HiOutlineTemplate />
          <Accordion
            title={t(components)}
            content={
              Array.isArray(menuItems) &&
              menuItems.map(item =>
                item.node.frontmatter.templateKey === 'component' &&
                item.node.frontmatter.language === i18n.language ? (
                  <Accordion
                    titleUrl={item.node.fields.slug}
                    key={item.node.frontmatter.title}
                    title={item.node.frontmatter.title}
                    content={
                      <HTMLContent content={item.node.tableOfContents} />
                    }
                  />
                ) : null
              )
            }
          />
        </li>
        <li className="navigationItem ">
          <BiCreditCard />
          <Accordion
            title={t(presentations)}
            content={
              Array.isArray(menuItems) &&
              menuItems.map(item =>
                item.node.frontmatter.templateKey === 'presentation' &&
                item.node.frontmatter.language === i18n.language ? (
                  <div key={item.node.frontmatter.title}>
                    <HTMLContent content={item.node.html} />
                  </div>
                ) : null
              )
            }
          />
        </li>
        <li className="navigationItem">
          <HiOutlineDocumentText />
          <Accordion
            title={t(templates)}
            content={
              Array.isArray(menuItems) &&
              menuItems.map(item =>
                item.node.frontmatter.templateKey === 'template' ? (
                  <div key={item.node.frontmatter.title}>
                    <HTMLContent content={item.node.html} />
                  </div>
                ) : null
              )
            }
          />
        </li>
      </ul>
      <SwitchLanguages />
    </div>
  )
}
