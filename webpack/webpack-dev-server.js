const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");
const config = require('../config');
console.log(config);

let host = config.host;
let port = config.port;
console.log(host, port);

let serverConfig = {
  watchOptions:{
    aggregateTimeout: 300, //延迟时间
    poll: 1000, // 轮询间隔
  },
  hot: true,
  inline: true,
  historyApiFallback: true,
  compress: true,
  staticOptions: {
  },
  stats: { colors: true },
  contentBase: './public',
  publicPath: webpackConfig.output.publicPath,
  headers: {
    'X-Custom-Header': 'yes'
  }
}

// 开启Hot Module Replacement相关设置
if ( process.env.NODE_ENV === 'development' ) {
  webpackConfig.profile = true;
  webpackConfig.entry.index.push("webpack-dev-server/client?http://"+ host + ":" + port + "/");
  webpackConfig.entry.index.push("webpack/hot/dev-server");
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  );
}

let compiler = webpack(webpackConfig);
let server = new WebpackDevServer(compiler, serverConfig);

server.listen(port, host, function() {
  console.log('listening on ' + host + ' : ' + port);
});
