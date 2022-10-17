import React from 'react'
import { Link } from 'gatsby'
import { HTMLContent } from './Content'
import useMenuStructure from '../queries/menu-structure'

export default function Navbar() {
  const menuItems = useMenuStructure()
  return (
    <div className="font-bold w-60 bg-blue-200  py-2">
      <ul className="flex flex-col lg:inline-flex items-center">
        <li>
          <Link to={'/'} className=" ">
            Специфікація до web ресурсу
          </Link>
        </li>
        <li>
          <ul>
            {/* <Link to={`${menuItems[0].node.fields.slug}`} className=" "> */}
            <p>Компоненты и функциональность</p>
            {/* </Link> */}

            {Array.isArray(menuItems) &&
              menuItems.map(item => (
                <li key={item.node.fields.slug}>
                  <Link to={item.node.fields.slug} className=" px-2 lg:px-0">
                    {item.node.frontmatter.title}
                  </Link>
                  <HTMLContent content={item.node.tableOfContents} />
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
