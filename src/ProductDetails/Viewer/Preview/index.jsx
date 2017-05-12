import React from "react";
import Separator from "./Separator";
import Image from "./Image";
import MorePhotos from "./MorePhotos";
import "./styles.css";

export default () => {
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
