import React from 'react'
import { Link } from 'gatsby'
import { HTMLContent } from './Content'
import useMenuStructure from '../queries/menu-structure'
import Accordion from './accordion/accordion'

export default function Navbar() {
  const menuItems = useMenuStructure()

  console.log(menuItems)
  return (
    <div className="font-bold w-60 bg-blue-200 fixed ">
      <ul className="flex flex-col lg:inline-flex items-center">
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
                menuItems.map(item => (
                  <Accordion
                    title={item.node.frontmatter.title}
                    content={
                      <HTMLContent content={item.node.tableOfContents} />
                    }
                  />
                ))
              }
            />
          </div>
        </li>
      </ul>
    </div>
  )
}
