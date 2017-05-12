import React from "react";
import "./product.css";
import Header from "./Header";
import ProductViewer from "./Viewer/index";

export default () => {
  {
    return (
      <main className="main-content">
        <div className="product">
          <Header />
          <ProductViewer />
          <p className="product-description">
            <span className="company-name">Adidas</span>
            {" "}
            is a German multinational
            corporation,
            headquartered in
            Herzogenaurach, Germany, that designs and
            manufactures shoes, clothing and accessories.
          </p>
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
