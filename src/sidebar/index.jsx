import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Categories from "./Сategories";
import "./styles.css";

export default () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Search />
      <Categories />
    </aside>
  );
};
