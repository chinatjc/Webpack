const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, './src'),
				use: ['eslint-loader'],
				// 预处理
				enforce: 'pre'
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
				// use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new StyleLintPlugin({
			// 设置 stylelint 检验范围
			files: ['src/**/*.css']
		})
	]
};