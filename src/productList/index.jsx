import React, { Component } from "react";

import Filter from "./Filter";
import Card from "./Card";
import "./styles.css";

class ProductList extends Component {
  render() {
    return (
      <main className="main-content">
        <Filter />
        <div className="product-list">
          <div className="row">
            <Card />
          </div>
        </div>
      </main>
    );
  }
}

export default ProductList;
