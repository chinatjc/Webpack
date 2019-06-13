const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: {
		mInquiry: './src/pages/mInquiry/inline.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.css', '.js', '.html']
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
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			filename: 'mInquiry.html',
			template: 'ejs-compiled-loader!./src/pages/mInquiry/index.html',
			inject: 'head',
			inlineSource: '.(css|js)$'
		}),
	    new HtmlWebpackInlineSourcePlugin()
	]
};