import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="product-name">Ultra<br />Boost</h1>
        <button className="save-button">
          Save
        </button>
      </div>
      <div className="header-right">
        <div className="product-color-selector">
          <button className="product-color grey" />
          <button className="product-color blue" />
          <button className="product-color black" />
          <button className="product-color light-grey" />
          <span className="product-sale">sale</span>
        </div>
        <h2 className="product-price">$170</h2>
      </div>
    </header>
  );
};

export default Header;
