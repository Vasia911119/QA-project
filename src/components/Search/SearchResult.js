import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import { PageSearchResultItem} from './SearchResultItem';

function SearchResult({
  searchQuery,
  pagesIndexStore,
}) {
  const pagesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(pagesIndexStore.index),
    pagesIndexStore.store
  );
  if (pagesResult.length === 0) {
    return <p>No Result Found.</p>;
  }

  return (
    <>
      {pagesResult.length > 0 && (
        <>
          <h2>Pages</h2>
          {pagesResult.map((result) => (
            <PageSearchResultItem key={result.id} page={result} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;


