import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Card from './Card';

const Wrapper = styled.main`
  background-color: #ffffff;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  flex: 1 100%;
`;

const List = styled.div`
  flex-basis: 100%;
  padding: 22px 24px 0px 24px;
`;

export default () => (
  <Wrapper>
    <Filter />
    <List>
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
    </List>
  </Wrapper>
  );
