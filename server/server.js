/* eslint-disable react/jsx-filename-extension */
import http from 'http';
import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { ServerStyleSheet } from 'styled-components';

import App from '../src/App';
import reducer from '../src/reducer';

const staticFiles = ['/static/*'];

const app = express();
app.server = http.createServer(app);
app.use(express.static('../build'));

staticFiles.forEach((file) => {
  app.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../build', req.url);
    res.sendFile(filePath);
  });
});

app.get('*', (req, res) => {
  const error = () => res.status(404).send('404');

  const htmlFilePath = path.join(__dirname, '../build', 'index.html');
  fs.readFile(htmlFilePath, 'utf8', (err, htmlData) => {
    if (err) {
      error();
    } else {
      const context = {};
      const store = createStore(reducer);
      const preloadedState = store.getState();
      const sheet = new ServerStyleSheet();
      const ReactApp = renderToString(
        sheet.collectStyles(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>,
        ),
      );

      res.status(200).send(
        htmlData
          .replace('{{STYLE}}', sheet.getStyleTags())
          .replace('{{SSR}}', ReactApp)
          .replace('preloadedState', JSON.stringify(preloadedState).replace(/</g, '\\u003c')),
      );
    }
  });
});

app.server.listen(process.env.PORT || 8080);
