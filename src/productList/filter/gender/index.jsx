import React from 'react';
require('./styles.css');

export default () => {
  return (
    <div className="filter-gender">
      <button className="filter-selected">Man</button>
      <button className="filter-gender-button">Woman</button>
    </div>
  );
}