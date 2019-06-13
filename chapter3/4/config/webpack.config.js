const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const DEfinePlugin = require('webpack/lib/DefinePlugin');
const { WebPlugin } = require('web-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, '../src'),
	entry: {
		app: './js/main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name]_[chunkhash:8].js'
	},
	resolve: {
		extensions: ['.css', '.js', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.resolve(__dirname, '../src'),
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, '../src'),
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		// 导出css文件
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new WebPlugin({
			template: path.resolve(__dirname, '../src/template.html'),
			filename: 'index.html'
		}),
		new DEfinePlugin({
			NODE_ENV: JSON.stringify('production')
		})
	],
	devtool: 'source-map',
	optimization: {
		// 压缩 js
		minimize: true,
		minimizer: [
			// 压缩css
			new OptimizeCSSAssetsPlugin({})
		]
	},
	watch: true
};