const path = require('path');
const webpack = require('webpack');

const config = {
  entry: ['./index.js'],
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'index.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
