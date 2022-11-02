import React from 'react';
import SearchResultItem from './SearchResultItem';
import { useTranslation } from 'gatsby-plugin-react-i18next';

function SearchResult({ searchQuery, pagesIndexStore, onClick }) {
  const { t, i18n } = useTranslation();
  const { notFoundTitle, notFoundText } = t('search', {
    returnObjects: true,
  });
  // console.log(pagesIndexStore);
  const local = `${i18n.language}`;
  // console.log(local);

  const pagesResult = [];
  // console.log(typeof pagesIndexStore);
  // console.log(pagesIndexStore);

  pagesIndexStore.filter(page => {
    if (
      page.rawMarkdownBody &&
      page.frontmatter.page_chapter_title &&
      page.fields
      // page.frontmatter.language === local
    ) {
      if (
        page.rawMarkdownBody.toLowerCase().includes(searchQuery) ||
        page.frontmatter.page_chapter_title.toLowerCase().includes(searchQuery)
      ) {
        pagesResult.push(page);
      }
    }
    // console.log(page);
    // if (res.frontmatter.language === local)
    console.log(pagesResult);
    return pagesResult;
  });

  if (pagesResult.length === 0) {
    return (
      <div className="flex h-[180px] w-[100%] flex-col items-center justify-center gap-y-4">
        <h4 className="font-family: 'Inter' text-lg  font-bold text-[#1C1917]">
          {notFoundTitle}
        </h4>
        <p className="font-family: 'Inter' text-base  font-medium text-[#1C1917]">
          {notFoundText}
        </p>
      </div>
    );
  }

  return (
    <>
      {pagesResult.length > 0 && (
        <div className="py-2 px-4 ">
          {pagesResult.map(res => {
            if (res.frontmatter.language === local) {
              return (
                <SearchResultItem
                  key={res.id}
                  page={res}
                  query={searchQuery}
                  onClick={onClick}
                />
              );
            }
          })}
        </div>
      )}
    </>
  );
}

export default SearchResult;