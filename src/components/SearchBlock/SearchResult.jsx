import { Link } from 'gatsby';
import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import SearchResultItem from './SearchResultItem';

function SearchResult({ searchQuery, pagesIndexStore }) {
  console.log(pagesIndexStore);
  // const pagesResult = useFlexSearch(
  //   searchQuery,
  //   JSON.stringify(pagesIndexStore.index),
  //   pagesIndexStore.store
  // );
  // console.log(pagesResult);
  // console.log(pagesIndexStore.store);

  const pagesResult = [];
  console.log(typeof pagesIndexStore);
  console.log(pagesIndexStore);

  pagesIndexStore.filter(page => {
    if (
      page.rawMarkdownBody.toLowerCase().includes(searchQuery) ||
      page.frontmatter.title.toLowerCase().includes(searchQuery)
    ) {
      pagesResult.push(page);
    }

    return pagesResult;
  });

  if (pagesResult.length === 0) {
    return <p>No Result Found.</p>;
  }

  return (
    <>
      {pagesResult.length > 0 && (
        <div className="py-2 px-4 ">
          {pagesResult.map(res => (
            <SearchResultItem key={res.id} page={res} />
          ))}
        </div>
      )}
    </>

    // <>
    //   {pagesResult.map(res => (
    //     <Link to="">{res.title}</Link>
    //   ))}
    // </>
  );
}

export default SearchResult;
