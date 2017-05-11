import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default () => {
  return (
    <Link className="logo" to="./"><img src={require("./logo.png")} /></Link>
  );
};
