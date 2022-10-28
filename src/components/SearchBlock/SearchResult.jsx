import { Link } from 'gatsby'
import React from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { SearchResultItem } from './SearchResultItem'

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
    // <>
    //   {pagesResult.length > 0 && (
    //     <>
    //       <p>Chapter</p>
    //       {pagesResult.map(res => (
    //         <SearchResultItem key={res.id} page={res} />
    //       ))}
    //     </>
    //   )}
    // </>

    <>
      {pagesResult.map(res => (
        <Link to="">{res.title}</Link>
      ))}
    </>
  )
}

export default SearchResult
