import React, {Component} from "react";
import {Link} from "react-router-dom";

import GreyShoe from "./grey.png";
import DarkShoe from "./dark.png";
import SilverShoe from "./silver.png";
import Filter from "./filter";
require("./styles.css");

class ProductList extends Component {
  render() {
    return (
      <main className="main-content">
        <Filter/>
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
