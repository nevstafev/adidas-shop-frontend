import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import styled from 'styled-components';
import 'normalize.css';

import media from './utils/media';
import ProductList from './Products/List';
import ProductDetails from './Products/Show';
import Sidebar from './Sidebar';
import './css/fonts.css';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0px;
  display: block;
  ${media.small`
    display: flex;
    flex-flow: row nowrap;
  `};
`;

export default () => (
  <Wrapper>
    <Sidebar />
    <Switch>
      <Route exact path="/products/:group/:type/" component={ProductList} />
      <Route exact path="/products/:group/:type/:id" component={ProductDetails} />
      <Redirect from="/" to="/products/football/cleats/" />
    </Switch>
  </Wrapper>
);
