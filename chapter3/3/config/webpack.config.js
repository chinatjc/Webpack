const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	context: path.resolve(__dirname, '../src'),
	mode: 'development',
	entry: ['./main.js'],
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.styl(us)?$/,
				include: path.resolve(__dirname, '../src'),
				use: [
					'vue-style-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, '../src'),
				use: ['babel-loader']
			},
			{
				test: /\.vue$/,
				include: path.resolve(__dirname, '../src'),
				use: ['vue-loader']
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};