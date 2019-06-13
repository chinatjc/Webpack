const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        // 为了支持模块热替换
        'webpack-hot-middleware/client',
        // JS 执行入口文件
        './src/js/main.js'
    ],
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'js/bundle.[hash:8].js',
        path: path.resolve(__dirname, './dist/')
    },
    plugins: [
        // 为了支持模块热替换
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        }),
    ],
    devtool: 'source-map',
};