import './inline.css';

console.log('hello world');

console.log(Array.from(new Set([1, 2, 3, 4, 3])));

import(/* webpackChunkName: "outreach" */ './outreach.js').then(module => {
	const a = module.default;
	a();
});