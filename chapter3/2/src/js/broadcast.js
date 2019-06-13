import { createElement } from './createElement';

export function broadcast() {
	const newObj = Object.assign({}, {name: '234234'});
	const msg = '这是console函数' + newObj;
	createElement(`broadcast: , ${msg}`);


	console.log(Array.from(new Set([1, 2, 3, 1, 2, 4])));
}