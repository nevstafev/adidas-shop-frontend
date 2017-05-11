import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CategoriesSub.css';


class CategorySub extends Component {
  render() {
    return (
      <nav className="categories-sub">
        <Link className="category-sub category-sub-selected" to="#">Shoes</Link>
        <Link className="category-sub" to="#">Clothing</Link>
        <Link className="category-sub" to="#">Accessories</Link>
      </nav>
    );
  }
}

export default CategorySub;