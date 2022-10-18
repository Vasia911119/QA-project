import React from 'react'
import { Link } from 'gatsby'
import { HTMLContent } from './Content'
import useMenuStructure from '../queries/menu-structure'
import Accordion from './accordion/accordion'

export default function Navbar() {
  const menuItems = useMenuStructure()

  // console.log(menuItems)
  return (
    <div className="font-bold w-60 bg-blue-200 fixed ">
      <ul className="flex flex-col lg:inline-flex ">
        <li>
          <Link to={'/'} className=" ">
            Специфікація до web ресурсу
          </Link>
        </li>
        <li>
          <div>
            <Accordion
              title="components and functionality"
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
        <li>
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
