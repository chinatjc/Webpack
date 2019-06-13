const path = require('path');
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
				test: /\.js$/,
				include: path.resolve(__dirname, './src'),
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, './src'),
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin()
	],
	devtool: 'source-map'
};