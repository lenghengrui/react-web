const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('../config');

let webpackConfig = {
    entry: {
        index: [],
        commons: []
    },
    output: {
        path: path.join(__dirname, '/../public/'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
        publicPath: 'http://' + config.host + ':' + config.port + '/'
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'stage-1', 'react'],
                    cacheDirectory: false,
                }

            },
            { test: /\.(png|jpg|gif|jpeg)$/, use: 'url-loader?limit=8192&name=./[name].[ext]?[hash]' },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' }) },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    plugins: []
};

console.log('webpack env:', process.env.NODE_ENV);
webpackConfig.entry.commons = ['react', 'react-redux', 'redux', 'react-router'];
webpackConfig.entry.index.push(path.join(__dirname, '/../client/index.js'));
webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '/../client/index.html'),
        filename: path.join(__dirname, '/../public/index.html'),
        chunks: ['index', 'commons']
    }),
    new ExtractTextPlugin("styles.css")
);

if (process.env.NODE_ENV === 'development') {
    
} else {
}

module.exports = webpackConfig;