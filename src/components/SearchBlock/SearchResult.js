import React from 'react';
import SearchResultItem from './SearchResultItem';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as s from './Search.module.css';

function SearchResult({ searchQuery, pagesIndexStore, onClick }) {
  const { t, i18n } = useTranslation();
  const { notFoundTitle, notFoundText } = t('search', {
    returnObjects: true,
  });
  const local = `${i18n.language}`;
  const pagesResult = [];

  pagesIndexStore.filter(page => {
    if (
      page.rawMarkdownBody &&
      page.frontmatter.page_chapter_title &&
      page.fields
    ) {
      if (
        page.rawMarkdownBody
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim()) ||
        page.frontmatter.page_chapter_title
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim())
      ) {
        pagesResult.push(page);
      }
    }
    return pagesResult;
  });

  if (pagesResult.length === 0) {
    return (
      <div className={s.searchResultNotFoundBox}>
        <h4 className={s.searchResultNotFoundSubtitle}>{notFoundTitle}</h4>
        <p className={s.searchResultNotFoundText}>{notFoundText}</p>
      </div>
    );
  }

  return (
    <>
      {pagesResult.length > 0 && (
        <div className="py-2">
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
