# react-web

1.install webpack global:
```javascript
npm install webpack -g
```

2.create webpack.config.js
```javascript
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
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }

}
```

3. install other required modules:
```javascript
npm install
```

4. run the server(development server):
```javascript
npm run start
```
