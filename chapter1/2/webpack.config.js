const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, './src/js/main.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.resolve(__dirname, './src'),
				use: [MiniCssExtractPlugin.loader, 'css-loader'] // 生产环境
				// use: ['style-loader', 'css-loader'] // 开发环境
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, './src'),
		open: true
	},
	devtool: 'source-map' // 可定位到某个源码文件
};