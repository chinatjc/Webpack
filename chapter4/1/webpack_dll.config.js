const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');

module.exports = {
	mode: 'development',
	entry: {
		ui: [path.resolve(__dirname, './src/js/ui.js')],
		util: [path.resolve(__dirname, './src/js/util.js')]
	},
	output: {
		filename: '[name].dll.js',
		path: path.resolve(__dirname, './dist'),
		library: '_dll_[name]'
	},
	plugins: [
		new DllPlugin({
			name: '_dll_[name]',
			path: path.resolve(__dirname, './dist/[name].manifest.json')
		})
	],
	devtool: 'source-map'
};