import React, {Component} from "react";
import './Filter.css'

class Filter extends Component {
  render() {
    return (
      <nav className="filter">
        <div className="filter-icon">
        </div>
        <div className="filter-gender">
          <button className="filter-selected">Man</button>
          <button className="filter-gender-button">Woman</button>
        </div>
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
      </nav>
    );
  }
}

export default Filter;