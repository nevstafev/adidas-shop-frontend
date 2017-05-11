import React from "react";
import Gender from "./Gender";
import Size from "./Size";
import "./styles.css";

export default () => {
  return (
    <nav className="filter">
      <div className="filter-icon" />
      <Gender />
      <Size />
    </nav>
  );
};
