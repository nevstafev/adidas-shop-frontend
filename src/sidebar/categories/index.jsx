import React from 'react';
import {Link} from 'react-router-dom';
import CategorySub from "./CategoriesSub";
require('./styles.css');

export default () => {
  return (
    <nav className="categories">
      <Link className="category category-selected" to="#">Sports</Link>
      <CategorySub/>
      <Link className="category" to="#">Brands</Link>
      <Link className="category" to="#">Micoach</Link>
    </nav>
  );
};