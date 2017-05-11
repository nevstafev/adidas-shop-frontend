import React from "react";
import "./product.css";
import Header from "./Header";

export default () => {
  {
    return (
      <main className="main-content">
        <div className="product">
          <Header />
          <div className="product-info">
            <div className="product-image">
              <img src={require("./dark-big.png")} />
            </div>
            <div className="product-preview">
              <div className="product-preview-image">
                <img src={require("./dark-front.png")} />
              </div>
              <div className="product-preview-image">
                <img src={require("./dark-pair.jpg")} />
              </div>
              <div className="product-preview-image">
                <img src={require("./dark-pair-back.jpg")} />
              </div>
              <div className="product-preview-image product-preview-image-selected">
                <img src={require("./dark-pair-left-side.png")} />
              </div>
              <div className="product-preview-separator">
                <div className="edge" />
                <div className="edge" />
                <div className="edge" />
              </div>
              <p className="product-preview-more-photos">
                see <br /> more <br /> photos
              </p>
            </div>
          </div>
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
