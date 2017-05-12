import React from "react";
import { Row } from "react-flexbox-grid";
import Filter from "./Filter";
import Card from "./Card";
import "./styles.css";

const ProductList = () => {
  return (
    <main className="main-content">
      <Filter />
      <div className="product-list">
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
      </div>
    </main>
  );
};

export default ProductList;
