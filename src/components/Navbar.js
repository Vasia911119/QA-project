import React from 'react'
import { Link } from 'gatsby'
import { HTMLContent } from './Content'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import useMenuStructure from '../queries/menu-structure'
import Accordion from './Accordion/Accordion'

import SwitchLanguages from './SwitchLanguages'

export default function Navbar() {
  const menuItems = useMenuStructure()

  const { t, i18n } = useTranslation()
  const { home, components, presentations, templates } = t('header', {
    returnObjects: true,
  })

  console.log(menuItems)

  return (
    <div className="font-bold w-60 bg-blue-200 fixed ">
      <ul className="flex flex-col lg:inline-flex ">
        <li>
          <Link to={'/'} className=" ">
            {t(home)}
          </Link>
        </li>
        <li>
          <div>
            <Accordion
              title={t(components)}
              content={
                Array.isArray(menuItems) &&
                menuItems.map(item =>
                  item.node.frontmatter.templateKey === 'component' ? (
                    <Accordion
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
          </div>
        </li>
        <li>
          <Accordion
            title={t(presentations)}
            content={
              Array.isArray(menuItems) &&
              menuItems.map(item =>
                item.node.frontmatter.templateKey === 'presentation' ? (
                  <div key={item.node.frontmatter.title}>
                    <HTMLContent content={item.node.html} />
                  </div>
                ) : null
              )
            }
          />
        </li>
        <li>
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
