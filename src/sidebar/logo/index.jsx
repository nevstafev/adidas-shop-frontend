import React from 'react';
import {Link} from 'react-router-dom';
require('./Logo.css');

export default () => {
  return (<Link className="logo" to="./"><img src={require('./logo.png')}/></Link>);
};