import isInApp from './util.js';

console.log(isInApp());

export function show(content) {
	window.document.getElementById('app').innerText = 'Hello, ' + content;
};

export function show1(content) {
	window.document.getElementById('app').innerText = 'Hello1, ' + content;
};
