import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Sidebar from "./sidebar/index";
import './App.css';

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
