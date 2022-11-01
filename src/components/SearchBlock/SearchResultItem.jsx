import React from 'react';
import { Link } from 'gatsby';

function SearchResultItem({ page, query }) {
  console.log(page);

  // function subStrWithSearchQuery(str, query) {
  //   console.log(query);
  //   const clearStr = str.replace(/[^a-zA-Z ]/g, '');
  //   let idx = clearStr.indexof(query);
  //   // let subStr = str.slice(idx, 4);
  //   // let result = `...${query} ${subStr}`;
  //   return clearStr;
  // }

  // console.log(subStrWithSearchQuery(page.rawMarkdownBody, query));
  return (
    <Link
      to={`${page.fields.slug}`}
      className="font-family: 'Inter' flex flex-col gap-2 hover:bg-[#EDEEF9] focus:bg-[#EDEEF9] "
    >
      <h4 className="text-lg font-medium text-[#1C1917] ">
        {page.frontmatter.page_title}
      </h4>
      <p className="text-sm font-normal text-[#94A3B8]">
        {page.frontmatter.page_chapter_title}
      </p>
    </Link>
  );
}

export default SearchResultItem;
