import React from 'react'
import { Link } from 'gatsby'
import { HTMLContent } from './Content'
import useMenuStructure from '../queries/menu-structure'
import Accordion from './Accordion/Accordion'

export default function Navbar(props) {
  const menuItems = useMenuStructure()

  console.log(window.location.href)
  console.log(menuItems)
  return (
    <div className="navigationScroll font-semibold text-base text-grey-350 py-6 px-5 overflow-y-auto  max-h-[600px]">
      <ul className="flex flex-col ">
        <li className="navigationItem ">
          <div className="navigationItemIcon"></div>
          <i className="fa-regular fa-house" />
          <Link to={'/'} activeClassName="activeLink">
            Специфікація до web ресурсу
          </Link>
        </li>
        <li className="navigationItem">
          <div className="navigationItemIcon"></div>
          <div>
            <Accordion
              title="Components and functionality"
              content={
                Array.isArray(menuItems) &&
                menuItems.map(item =>
                  item.node.frontmatter.templateKey === 'component' ? (
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
          </div>
        </li>
        <li className="navigationItem ">
          <div className="navigationItemIcon"></div>
          <Accordion
            title="three"
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
        <li className="navigationItem">
          <div className="navigationItemIcon"></div>
          <Accordion
            title="four"
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
    </div>
  )
}
