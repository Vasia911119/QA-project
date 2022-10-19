import React from 'react'
import { Link } from 'gatsby'
import { HTMLContent } from './Content'
import useMenuStructure from '../queries/menu-structure'
import Accordion from './Accordion/Accordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  const menuItems = useMenuStructure()

  console.log(window.location.href)
  console.log(menuItems)
  return (
    <div className="navigation py-6 px-5 overflow-y-auto  max-h-[600px]">
      <ul className="flex flex-col ">
        <li className="navigationItem">
          <Link to={'/'} className=" ">
            Специфікація до web ресурсу
          </Link>
        </li>
        <li className="navigationItem">
          <div>
            <Accordion
              title="components and functionality"
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
          <Accordion
            title="three"
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
