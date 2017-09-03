/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger),
);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
