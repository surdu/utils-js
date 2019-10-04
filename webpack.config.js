const path = require('path');

module.exports = {
  entry: './src/utils.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'utils.min.js'
  }
};
