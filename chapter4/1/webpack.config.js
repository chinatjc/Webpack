const path = require('path');


// no Dll 1074ms

// module.exports = {
// 	mode: 'development',
// 	entry: {
// 		main: path.resolve(__dirname, './src/js/main.js'),
// 		vueVendor: ['vue', 'vuex'],
// 		babelVendor: ['babel-polyfill']
// 	},
// 	output: {
// 		filename: '[name].js',
// 		path: path.resolve(__dirname, './dist')
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.css$/,
// 				include: path.resolve(__dirname, './src'),
// 				use: ['style-loader', 'css-loader']
// 			}
// 		]
// 	},
// 	plugins: [
// 	]
// };



// Dll 294ms

const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, './src/js/main.js')
	},
	output: {
		filename: '[name].js',
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
		new DllReferencePlugin({
			manifest: require('./dist/ui.manifest.json')
		}),
		new DllReferencePlugin({
			manifest: require('./dist/util.manifest.json')
		}),
	],
	devtool: 'source-map'
};

