const path = require('path');
const ReactWebConfig = require('react-web-config/lib/ReactWebConfig').ReactWebConfig;

console.log(path.resolve(__dirname, '../.env'))

const babelLoaderConfig = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
      ],
    }
  },
}

const compileReactNativeLibs = {
  test: /\.js$/,
  include: /node_modules\/react-native-/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
      ],
      cacheDirectory: true
    }
  },
}

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 3000
  },
  entry: [
    path.join(__dirname, '../index.web.js')
  ],
  module: {
    rules: [
      babelLoaderConfig,
      compileReactNativeLibs
    ],
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
      'react-native$': 'react-native-web'
    },
    extensions: [ '.web.js', '.js' ]
  }
};
