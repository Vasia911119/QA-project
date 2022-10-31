import React from 'react';
import { Link } from 'gatsby';

function SearchResultItem({ page }) {
  console.log(page);

  return (
    <Link
      to={`${page.fields.slug}`}
      className="font-family: 'Inter' flex flex-col gap-2"
    >
      <h4 className="mb-1 font-medium">description</h4>
      <p className="font-normal">result</p>
    </Link>
  );
}

export default SearchResultItem;
