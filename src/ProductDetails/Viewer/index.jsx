import React from "react";
import Preview from "./Preview";
import "./styles.css";

export default () => {
  return (
    <div className="product-info">
      <div className="product-image">
        <img src={require("./dark-big.png")} />
      </div>
      <Preview />
    </div>
  );
};
