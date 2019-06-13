const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const EndWebpackPlugin = require('./plugins/EndWebpackPlugin');

module.exports = {
	mode: 'development',
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
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new EndWebpackPlugin((status) => {
			console.log('done');
			console.log(status);
		}, (err) => {
			console.log('fail');
			console.log(err);
		})
	]
};