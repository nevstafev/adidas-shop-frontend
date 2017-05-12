import React from "react";
import "./styles.css";
import Separator from "./Separator";
import Image from "./Image/index";
import MorePhotos from "./MorePhotos/index";

const Preview = () => {
  return (
    <div className="product-preview">
      <Image />
      <Image />
      <Image />
      <Image />
      <Separator />
      <MorePhotos />
    </div>
  );
};

export default Preview;
