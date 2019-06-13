const path = require('path');

module.exports = {
	context: path.resolve(__dirname, '../src'),
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, '../src/index.js'),
		vendor: [
			'babel-polyfill'
		]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, '../src'),
				use: ['babel-loader']
			}
		]
	},
	devtool: 'source-map'
};