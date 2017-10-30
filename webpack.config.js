const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test : /\.jpg$/, exclude: /(node_modules)/, loader : 'file-loader'},
      { test : /\.html$/, exclude: /(node_modules)/, loader : 'html-loader'},
      { test: /\.(pdf|gif|png|svg)$/, loader: 'file-loader'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
}