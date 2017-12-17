const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './app/app',
  output: {
    path: path.resolve(__dirname, './app/dist'),
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;