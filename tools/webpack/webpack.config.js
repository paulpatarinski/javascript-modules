'use strict';

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname,
    filename: 'www/bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: 'www/index.html' }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
  ,
  stats: {
    // Colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};