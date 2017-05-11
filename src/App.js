import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ProductList from './productList';
import ProductDetails from './ProductDetails';
import Sidebar from "./sidebar";
require('./App.css');
require("./css/fonts.css");
require("./css/normalize.css");
require("./css/flexboxgrid.css");

class App extends Component {
  render() {
    return (<Router>
      <div className="MainContainer">
        <Sidebar/>
        <Route exact path="/" component={ProductList}/>
        <Route exact path="/product" component={ProductDetails}/>
      </div>
    </Router>);
  }
}

export default App;
