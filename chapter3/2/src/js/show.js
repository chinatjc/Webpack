import { createElement } from './createElement';

export function show() {
	new Promise((resolve, reject) => {
		return resolve();
	})
	.then(() => {
		createElement('resolve');
	});
	const msg = '这是show函数';
	createElement('show: ', msg);
}