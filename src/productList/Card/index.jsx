import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-flexbox-grid";
import "./styles.css";

export default () => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="product-card">
        <img className="product-image" src={require("./dark.png")} />
        <Link className="product-link product-sale-price" to="/product">
          $170
        </Link>
        <span className="product-list-sale">sale</span>
      </div>
    </Col>
  );
};
