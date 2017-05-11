import React, {Component} from 'react';
import Logo from './logo/index';
import Search from './search/index';
import './Sidebar.css';
import Categories from "./categories/index";

class Sidebar extends Component {
  render() {
    return (<aside className="sidebar">
      <Logo/>
      <Search/>
      <Categories/>
    </aside>);
  }
}

export default Sidebar;