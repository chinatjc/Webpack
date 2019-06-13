const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
				test: /\.css$/,
				include: path.resolve(__dirname, './src'),
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
	],
	optimization: {
		// minimize: true
		minimizer: [
			new UglifyJsPlugin({
				cache: true, // 利用缓存
	            parallel: true, // 多线程处理
				uglifyOptions: {
					compress: {
						drop_console: true,
						drop_debugger: true
					}
				}
			})
		]
	},
	devtool: 'hidden-source-map'
};