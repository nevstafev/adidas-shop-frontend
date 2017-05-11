import React from 'react';
import {Link} from 'react-router-dom';
require('./CategoriesSub.css');

export default () => {
  return (
    <nav className="categories-sub">
      <Link className="category-sub category-sub-selected" to="#">Shoes</Link>
      <Link className="category-sub" to="#">Clothing</Link>
      <Link className="category-sub" to="#">Accessories</Link>
    </nav>
  );
};