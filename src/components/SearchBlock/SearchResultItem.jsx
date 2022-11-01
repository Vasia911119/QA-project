import React from 'react';
import { Link } from 'gatsby';

function SearchResultItem({ page, query, onClick }) {
  console.log(page);

  function subRes(str1, str2, query) {
    if (str1.includes(query)) {
      console.log(query);
      return subStrWithSearchQuery(str1, query);
    }
    if (str2.includes(query)) {
      return subStrWithSearchQuery(str2, query);
    }
  }

  // function devideBlocks(htmlStr) {
  //   const blockArr = htmlStr.split('#');
  //   console.log(blockArr);
  //   blockArr.map(link => {
  //     link.split('//');
  //   });
  // }

  // devideBlocks(page.html);

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
      onClick={onClick}
      to={`${page.fields.slug}`}
      className="font-family: 'Inter' flex flex-col gap-2 hover:bg-[#EDEEF9] focus:bg-[#EDEEF9] "
    >
      <h4 className="text-lg font-medium text-[#1C1917] ">
        {page.frontmatter.page_title}
      </h4>
      <p className="text-sm font-normal text-[#94A3B8]">
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
