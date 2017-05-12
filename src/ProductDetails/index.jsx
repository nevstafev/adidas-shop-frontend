import React from "react";
import Header from "./Header";
import ProductViewer from "./Viewer";
import Description from "./Description";
import "./product.css";

export default () => {
  {
    return (
      <main className="main-content">
        <div className="product">
          <Header />
          <ProductViewer />
          <Description />
        </div>
        <div className="product-buy">
          <button>
            Buy now
          </button>
        </div>
      </main>
    );
  }
};
