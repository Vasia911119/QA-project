import React from 'react'
import { Link } from 'gatsby'

function SearchResultItem({ page }) {
  return (
    <Link to={`/page`}>
      <a href="#">
        <h2>{page.title}</h2>
      </a>
    </Link>
  )
}

export default SearchResultItem
