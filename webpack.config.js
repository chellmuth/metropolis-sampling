const path = require('path');

module.exports = {
  entry: './js/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015"]
          }
        }
      }
    ]
  },
};
