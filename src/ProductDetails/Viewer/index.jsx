import React from "react";
import "./styles.css";
import Preview from "./Preview";

const ProductViewer = () => {
  return (
    <div className="product-info">
      <div className="product-image">
        <img src={require("./dark-big.png")} />
      </div>
      <Preview />
    </div>
  );
};

export default ProductViewer;
