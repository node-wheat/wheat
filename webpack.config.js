const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  context: path.resolve(__dirname, './web'),
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
  },
  stats: 'verbose',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'web/index.html'),
      title: 'Custom template',
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'web'),
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /(\.ttf)|(\.woff)$/,
        loader: 'file-loader',
      },
    ],
  },
};
