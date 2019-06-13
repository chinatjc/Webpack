const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// 从 webpack.config.js 文件中读取 Webpack 配置
const config = require('./webpack.config.js');

// 实例化一个 Expressjs app
const app = express();

// 用读取到的 Webpack 配置实例化一个 Compiler
const compiler = webpack(config);

// 给 app 注册 webpackDevMiddleware 中间件
app.use(webpackDevMiddleware(compiler, {
    publicPath: '/'
}));

// 模块热替换
app.use(webpackHotMiddleware(compiler));

app.use(express.static('.'))

// 启动 HTTP 服务器，监听在 4000 端口
app.listen(4000, () => {
    console.info('成功监听在 4000');
});