import React from 'react';
import { Link } from 'gatsby';

function SearchResultItem({ page }) {
  return (
    <Link to={`/${page.slug.current}`} className="font-family: 'Inter' block">
      <span className="font-medium">{page.description}</span>
      <span className="font-normal">{page.body}</span>
    </Link>
  );
}

export default SearchResultItem;
