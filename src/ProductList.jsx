import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./css/fonts.css";
import "./css/normalize.css";
import "./css/flexboxgrid.css";
import "./css/style.css";
import GreyShoe from "./image/grey.png";
import DarkShoe from "./image/dark.png";
import SilverShoe from "./image/silver.png";

class ProductList extends Component {
  render() {
    return (
        <main className="main-content">
          <nav className="filter">
            <div className="filter-icon">
            </div>
            <div className="filter-gender">
              <button className="filter-selected">Man</button>
              <button className="filter-gender-button">Woman</button>
            </div>
            <div className="filter-size">
              <span className="filter-size-title">Size</span>
              <button className="filter-size-button filter-selected">36</button>
              <button className="filter-size-button">37</button>
              <button className="filter-size-button">38</button>
              <button className="filter-size-button">39</button>
              <button className="filter-size-button">40</button>
              <button className="filter-size-button">41</button>
              <button className="filter-size-button">42</button>
            </div>
          </nav>
          <div className="product-list">
            <div className="row">
              <div className="col-md-4">
                <div className="product-card">
                  <img className="product-image" src={GreyShoe}/>
                  <Link className="product-link product-sale-price" to="/product">$170</Link>
                  <span className="product-list-sale">sale</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-card">
                  <img className="product-image" src={DarkShoe}/>
                  <Link className="product-link" to="/product">$270</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-card">
                  <img className="product-image" src={SilverShoe}/>
                  <Link className="product-link product-sale-price" to="/product">$170</Link>
                  <span className="product-list-sale">sale</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-card">
                  <img className="product-image" src={GreyShoe}/>
                  <Link className="product-link product-sale-price" to="/product">$170</Link>
                  <span className="product-list-sale">sale</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-card">
                  <img className="product-image" src={SilverShoe}/>
                  <Link className="product-link product-sale-price" to="/product">$170</Link>
                  <span className="product-list-sale">sale</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-card">
                  <img className="product-image" src={DarkShoe}/>
                  <Link className="product-link" to="/product">$270</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default ProductList;
