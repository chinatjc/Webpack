const path = require('path');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

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
		new HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, './src'),
		open: true
	},
	watch: true,
	watchOptions: {
		// 忽略监听的文件
		ignored: '/node_modules/',
		// 多少毫秒内的变化整合为一个变化
		aggregateTimeout: 300,
		// 每隔多少毫秒轮询文件的变化
		poll: 1000
	},
	devtool: 'cheap-module-eval-source-map' // 可定位到某个源码文件
};