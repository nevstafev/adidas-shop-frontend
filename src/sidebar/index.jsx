import React from 'react';
import Logo from './logo';
import Search from './search';
import Categories from "./categories";
require('./Sidebar.css');

export default () => {
  return (<aside className="sidebar">
    <Logo/>
    <Search/>
    <Categories/>
  </aside>);
};