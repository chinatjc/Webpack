const path = require('path');

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: './src/js/index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};