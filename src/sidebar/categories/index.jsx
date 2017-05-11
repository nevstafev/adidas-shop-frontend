import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Categories.css';
import CategorySub from "./CategoriesSub";

class Categories extends Component {
  render() {
    return (
      <nav className="categories">
        <Link className="category category-selected" to="#">Sports</Link>
        <CategorySub/>
        <Link className="category" to="#">Brands</Link>
        <Link className="category" to="#">Micoach</Link>
      </nav>
    );
  }
}

export default Categories;