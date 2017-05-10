import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LogoImg from './logo.png';
import './Logo.css'

class Logo extends Component {
  render() {
    return (<Link className="logo" to="./"><img src={LogoImg}/></Link>);
  }
}

export default Logo;