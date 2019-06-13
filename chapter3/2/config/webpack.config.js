const path = require('path');

module.exports = {
	context: path.resolve(__dirname, '../src'),
	mode: 'development',
	entry: ['./index.js'],
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
	}
};