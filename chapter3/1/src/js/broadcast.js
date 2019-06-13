import { createElement } from './createElement.js';

export function broadcast() {
	const newObj = Object.assign({}, {name: '234234'});
	const msg = '这是console函数' + newObj;
	createElement(`broadcast: , ${msg}`);
}