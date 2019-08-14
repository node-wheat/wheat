const path = require('path');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express');

const app = express();
const config = require('../webpack.config');

const compiler = webpack(config);

app.use(
  middleware(compiler, {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: false,
  }),
);
app.listen(3001, () => console.log('Example app listening on port 3001!'));
// module.exports = config;
