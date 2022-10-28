import React from 'react'
import { Link } from 'gatsby'

function PageSearchResultItem({ page }) {
  return (
    <Link to={`/`}>
      <a href="">
        <h2>{page.title}</h2>
      </a>
    </Link>
  )
}

export default PageSearchResultItem
