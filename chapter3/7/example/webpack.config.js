const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		bundle: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, './src'),
				use: ['babel-loader']
			}
		]
	}
};