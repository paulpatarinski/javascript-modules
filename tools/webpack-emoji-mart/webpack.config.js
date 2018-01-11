'use strict';

var path = require('path');
var webpack = require('webpack');

require('es6-promise').polyfill();

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
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
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  stats: {
    // Colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};