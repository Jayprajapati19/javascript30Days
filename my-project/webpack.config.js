// webpack.config.js

const path = require('path');

module.exports = {
   entry: './src/index.js',  // Entry point of the application
   output: {
      filename: 'bundle.js',  // Output file name
      path: path.resolve(__dirname, 'dist')  // Output directory
   },
   mode: 'development'  // Mode can be 'development' or 'production'
};
