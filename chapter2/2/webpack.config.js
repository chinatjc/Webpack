const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, './src/js/main.js'),
		vendor: [
			path.resolve(__dirname, './node_modules/vue/dist/vue.min.js')
		]
	},
	output: {
		filename: '[name].[contenthash:4].js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.resolve(__dirname, './src'),
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:4].css'
		})
	]
};