const path = require('path');
const webpack = require('webpack');
const ReactWebConfig = require('react-web-config/lib/ReactWebConfig').ReactWebConfig;

console.log(path.resolve(__dirname, '../.env'))

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  entry: [
    path.join(__dirname, '../index.web.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        // Most react-native libraries include uncompiled ES6 JS.
        test: /\.js$/,
        include: /node_modules\/react-native-/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    ReactWebConfig(path.resolve(__dirname, '../.env'))
  ],
  resolve: {
    alias: {
      'react-native-config': 'react-web-config',
      'react-native': 'react-native-web'
    }
  }
};
