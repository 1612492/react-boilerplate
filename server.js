const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config');

const compiler = webpack(config);
const app = express();

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/',
    writeToDisk: true,
  })
);

app.use(webpackHotMiddleware(compiler));

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
