import '../css/main.css';

import { show, show1 } from './show.js';
import isInApp from './util.js';

show('Webpack');

// show1('Webpack1');

var a = '张三';

console.log(a);

console.log(isInApp());



import('./isShowHeader.js').then(
	function(module) {
		module.show1();
	},
	function(error) {
		console.error(error);
	}
);