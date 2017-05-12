import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Filter from "./Filter";
import Card from "./Card";
import "./styles.css";

export default () => {
  return (
    <main className="main-content">
      <Filter />
      <div className="product-list">
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
        </Row>
      </div>
    </main>
  );
};
