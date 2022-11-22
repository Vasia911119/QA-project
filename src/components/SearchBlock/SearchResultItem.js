import React from 'react';
import { Link } from 'gatsby';
import * as s from './Search.module.css';

function SearchResultItem({ page, query, onClick }) {
  function subRes(str1, str2, query) {
    if (str1.includes(query)) {
      return subStrWithSearchQuery(str1, query);
    }
    if (str2.includes(query)) {
      return subStrWithSearchQuery(str2, query);
    }
  }

  function subStrWithSearchQuery(str, query) {
    let subStr = '';
    let clearStr = str.replace(/[^a-zA-Zа-яґєіїА-ЯҐЄІЇ ]/g, ' ').split(' ');
    if (clearStr.includes(query)) {
      let idx = clearStr.indexOf(query);
      let startIdx = idx > 4 ? idx - 1 : 0;
      let endIdx = clearStr.length - idx > 5 ? idx + 1 : clearStr.length - 1;
      let subRes = clearStr.slice(startIdx, endIdx).join(' ');
      console.log(subRes);
      subStr = `...${subRes}...`;
    }

    return subStr;
  }

  return (
    <Link
      onClick={()=> onClick()}
      to={`${page.fields.slug}`}
      className={s.searchResultItemLink}
    >
      <h4 className={s.searchResultItemSubtitle}>
        {page.frontmatter.page_title}
      </h4>
      <p className={s.searchResultItemText}>
        {subRes(
          page.rawMarkdownBody,
          page.frontmatter.page_chapter_title,
          query
        )}
      </p>
    </Link>
  );
}

export default SearchResultItem;
