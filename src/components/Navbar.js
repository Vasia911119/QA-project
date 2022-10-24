import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { HTMLContent } from './Content'
import useMenuStructure from '../queries/menu-structure'
import Accordion from './Accordion/Accordion'
import SubAccordion from './SubAccordion/SubAccordion'

import SwitchLanguages from './SwitchLanguages'
import { HiOutlineDocumentText, HiOutlineTemplate } from 'react-icons/hi'
import { BiHome, BiCreditCard } from 'react-icons/bi'

export default function Navbar({ handleClose } = {}) {
  const menuItems = useMenuStructure()

  const { t, i18n } = useTranslation()
  const { home, components, presentations, templates } = t('header', {
    returnObjects: true,
  })

  return (
    <div className="navigationScroll font-semibold text-base text-grey-350 py-6 px-5 md:overflow-y-auto smOnly:overflow-y-scroll max-h-[600px]">
      <ul className="flex flex-col ">
        <li className="navigationItem ">
          <BiHome className="w-5 h-5 mr-5" />
          <Link to={'/'} className=" ">
            {t(home)}
          </Link>
        </li>
        <li className="navigationItem flex-grow">
          <HiOutlineTemplate className="w-5 h-5 mr-5" />
          <Accordion
            handleClose={handleClose}
            title={t(components)}
            content={
              Array.isArray(menuItems) &&
              menuItems.map(item =>
                item.node.frontmatter.templateKey === 'component' &&
                item.node.frontmatter.language === i18n.language ? (
                  <SubAccordion
                    handleClose={handleClose}
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
          <BiCreditCard className="w-5 h-5 mr-5" />
          <Accordion
            title={t(presentations)}
            content={
              Array.isArray(menuItems) &&
              menuItems.map(item =>
                item.node.frontmatter.templateKey === 'presentation' &&
                item.node.frontmatter.language === i18n.language ? (
                  <HTMLContent
                    key={item.node.frontmatter.title}
                    content={item.node.html}
                  />
                ) : null
              )
            }
          />
        </li>
        <li className="navigationItem">
          <HiOutlineDocumentText className="w-5 h-5 mr-5" />
          <Accordion
            title={t(templates)}
            content={
              Array.isArray(menuItems) &&
              menuItems.map(item =>
                item.node.frontmatter.templateKey === 'template' ? (
                  <HTMLContent
                    content={item.node.html}
                    key={item.node.frontmatter.title}
                  />
                ) : null
              )
            }
          />
        </li>
      </ul>
    </div>
  )
}
