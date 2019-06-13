const path = require('path');



// development环境下，使用cheap-module-eval-source-map

// module.exports = {
// 	mode: 'development',
// 	entry: path.resolve(__dirname, './src/js/main.js'),
// 	output: {
// 		filename: '[name].js',
// 		path: path.resolve(__dirname, './dist')
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.css$/,
// 				use: ['style-loader', 'css-loader']
// 			}
// 		]
// 	},
// 	devtool: 'cheap-module-eval-source-map'
// };







// production环境下，使用hidden-source-map

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, './src/js/main.js'),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devtool: 'hidden-source-map'
};