const path = require('path');
const { AutoWebPlugin } = require('web-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const autoWebPlugin = new AutoWebPlugin('./src/pages/', {
	template: './src/template.html'
});

module.exports = {
	mode: 'development',
	entry: autoWebPlugin.entry({}),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	optimization: {
		splitChunks: {
			minSize: 0,
			cacheGroups: {
				commons: {
					chunks: 'initial',
					name: 'common',
					minChunks: 2,
				},
			},
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		autoWebPlugin
	],
	devtool: 'inline-source-map',
};