import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo.png';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (<aside className="sidebar">
      <Link className="logo" to="./"><img src={Logo}/></Link>
      <form className="search" action="#" method="get">
        <input className="search-input" type="search"/>
      </form>
      <nav className="categories">
        <a className="category category-selected" href="#">Sports</a>
        <nav className="categories-sub">
          <a className="category-sub category-sub-selected" href="#">Shoes</a>
          <a className="category-sub" href="#">Clothing</a>
          <a className="category-sub" href="#">Accessories</a>
        </nav>
        <a className="category" href="#">Brands</a>
        <a className="category" href="#">Micoach</a>
      </nav>
    </aside>);
  }
}

export default Sidebar;