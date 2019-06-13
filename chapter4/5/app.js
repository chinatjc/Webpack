const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');


// 一次构建，无watch模式
// webpack(webpackConfig, (err, status) => {
// 	if (err || status.hasErrors()) {
// 		console.log('error');
// 	} else {
// 		console.log('success');
// 	}
// });

// watch模式
const compiler = webpack(webpackConfig);

const watching = compiler.watch({
	aggregateTimeout: 300
}, (err, status) => {
	if (err || status.hasErrors()) {
		console.log('error');
	} else {
		console.log('success');
	}
});


// 关闭watch模式
setTimeout(() => {
	watching.close(() => {
		console.log('close watching');
	});
}, 5000);
