var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/src/App.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
      { test: /\.(png|jpg|jpeg|PNG|JPG|JPEG)$/, loader: 'url-loader?limit=8192' },
      { test: /\.(png|jpg|jpeg|PNG|JPG|JPEG)$/, loader: "file-loader" },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?modules' }
    ]
  }

}