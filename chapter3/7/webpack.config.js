const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: {
		bundle: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './lib'),
		filename: '[name].js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, './src'),
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, './src'),
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	]
};