import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Sidebar from "./Sidebar";
import "normalize.css";
import "./css/fonts.css";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0px;
  display: flex;
  flex-flow: row nowrap;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Sidebar />
          <Route exact path="/" component={ProductList} />
          <Route exact path="/product" component={ProductDetails} />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
