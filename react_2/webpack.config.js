var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        },
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      }
    ]
  }
};