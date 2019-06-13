const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

// no happypack 1591ms

// module.exports = {
// 	mode: 'development',
// 	entry: './src/js/main.js',
// 	output: {
// 		filename: 'bundle.js',
// 		path: path.resolve(__dirname, './dist')
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js$/,
// 				include: path.resolve(__dirname, './src'),
// 				use: ['eslint-loader'],
// 				// 预处理
// 				enforce: 'pre'
// 			},
// 			{
// 				test: /\.css$/,
// 				use: [MiniCssExtractPlugin.loader, 'css-loader']
// 				// use: ['style-loader', 'css-loader']
// 			}
// 		]
// 	},
// 	plugins: [
// 		new MiniCssExtractPlugin({
// 			filename: '[name].css'
// 		}),
// 		new StyleLintPlugin({
// 			// 设置 stylelint 检验范围
// 			files: ['src/**/*.css']
// 		})
// 	]
// };








// happypack

const HappyPack = require('happypack');
const os = require('os');
// 创建共享进程池
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
	mode: 'development',
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
				use: ['happypack/loader?id=eslint'],
				// 预处理
				enforce: 'pre'
			},
			{
				test: /\.css$/,
				use: ['happypack/loader?id=cssDev'] // 开发环境
				// use: [MiniCssExtractPlugin.loader, 'happypack/loader?id=cssProd'] // 生产环境
			}
		]
	},
	plugins: [
		new HappyPack({
			id: 'eslint',
			loaders: ['eslint-loader'],
			// 使用共享进程池里的子线程
			threadPool: happyThreadPool
		}),
		// 对应开发环境的cssDev
		new HappyPack({
			id: 'cssDev',
			loaders: ['style-loader', 'css-loader'],
			// 使用共享进程池里的子线程
			threadPool: happyThreadPool
		}),
		// 对应生产环境的cssProd
		new HappyPack({
			id: 'cssProd',
			loaders: ['css-loader'],
			// 使用共享进程池里的子线程
			threadPool: happyThreadPool
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new StyleLintPlugin({
			// 设置 stylelint 检验范围
			files: ['src/**/*.css']
		})
	]
};