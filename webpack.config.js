const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const middleware = require('webpack-dev-middleware');
const express = require('express');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const app = express();
const config = {
  context: path.resolve(__dirname, './web'),
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets')
  },
  stats: 'verbose',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'web/index.html'),
      title: 'Custom template',
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'web'),
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /(\.ttf)|(\.woff)$/,
        loader: 'file-loader'
      }
    ]
  }
}
const compiler = webpack(config);

app.use(
  middleware(compiler, {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
  })
);
app.listen(3001, () => console.log('Example app listening on port 3001!'));
// module.exports = config;