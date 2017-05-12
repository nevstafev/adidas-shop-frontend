import React from "react";
import "./styles.css";

const Image = () => {
  return (
    <div className="product-preview-image">
      <img src={require("./dark-front.png")} />
    </div>
  );
};

export default Image;
