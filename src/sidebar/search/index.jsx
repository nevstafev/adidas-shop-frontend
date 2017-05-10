import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (<form className="search" action="#" method="get">
      <input className="search-input" type="search"/>
    </form>);
  }
}

export default Search;