import React from 'react';
import { Link } from 'gatsby';

function SearchResultItem({ page }) {
  console.log(page);
  return (
    <Link to={`${page.slug}`} className="font-family: 'Inter' block ">
      <p className="font-medium mb-1">description</p>
      <p className="font-normal">result</p>
    </Link>
  );
}

export default SearchResultItem;
