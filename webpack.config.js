const path = require('path');

const config = {
  entry: './app/app',
  output: {
    path: path.resolve(__dirname, './app/dist'),
    filename: 'bundle.js'
  }
};

module.exports = config;