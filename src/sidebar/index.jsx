import React, {Component} from 'react';
import Logo from './logo/index';
import Search from './search/index';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (<aside className="sidebar">
      <Logo/>
      <Search/>
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