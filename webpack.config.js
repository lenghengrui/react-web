const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var config;

if (file_exists('./config/local.json')) {
    config = require('./config/local.json');
} else {
    config = require('./config/config.json');
}

let webpackConfig = {
    entry: [],
    output: {
        path: __dirname + '/public/dist/',
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
        publicPath: 'http://' + config.host + ':' + config.port + '/dist/'
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.js?$/, loader: 'babel-loader', query: { presets: ['es2015', 'stage-1', 'react'] } },
            { test: /\.(png|jpg|gif|jpeg)$/, use: 'url-loader?limit=8192' },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' }) },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: []
};

if (process.env.NODE_ENV === 'development') {
    console.log('webpack env:', process.env.NODE_ENV);
    webpackConfig.entry.push('./client/index.js');
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            template: __dirname + "/client/index.html",
            filename: __dirname + "/public/dist/index.html"
        }),
        new ExtractTextPlugin("styles.css")
        // new webpack.ProvidePlugin({
        //     $: "jqeury",
        //     jQuery: 'jquery',
        //     Cookies: "js-cookie"
        // })
    );
} else {
    console.log("webpack env:", process.env.NODE_ENV);
    webpackConfig.entry.push('./client/index.js');
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            template: __dirname + "/client/index.html",
            filename: __dirname + "/public/dist/index.html"
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin()
        // new webpack.ProvidePlugin({
        //     $: "jqeury",
        //     jQuery: 'jquery',
        //     Cookies: "js-cookie"
        // })
    );
}

module.exports = webpackConfig;

function file_exists(path) {
  try {
    fs.lstatSync(path);
    return true;
  } catch (e) {
    return false;
  }
}