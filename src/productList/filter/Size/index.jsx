import React from "react";
import "./styles.css";

export default () => {
  return (
    <div className="filter-size">
      <span className="filter-size-title">Size</span>
      <button className="filter-size-button filter-selected">36</button>
      <button className="filter-size-button">37</button>
      <button className="filter-size-button">38</button>
      <button className="filter-size-button">39</button>
      <button className="filter-size-button">40</button>
      <button className="filter-size-button">41</button>
      <button className="filter-size-button">42</button>
    </div>
  );
};
