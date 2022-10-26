import { Link } from 'gatsby'
import React from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { PageSearchResultItem } from './SearchResultItem'

function SearchResult({ searchQuery, pagesIndexStore }) {
  const pagesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(pagesIndexStore.index),
    pagesIndexStore.store
  )

  if (pagesResult.length === 0) {
    return <p>No Result Found.</p>
  }

  return (
    <>
      {pagesResult.map(res => (
        <Link to="">{res.title}</Link>
      ))}
    </>
  )
}

export default SearchResult
