import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Sidebar from "./Sidebar";
import "./App.css";
import "./css/fonts.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Sidebar />
          <Route exact path="/" component={ProductList} />
          <Route exact path="/product" component={ProductDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
