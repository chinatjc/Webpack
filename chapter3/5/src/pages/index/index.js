import './index.css';

new Promise((resolve, reject) => {
	resolve('this is resolve');
})
.then((msg) => {
	console.log(msg);
});

console.log(Array.from(new Set([1, 2, 3, 4, 1, 2, 3])));

document.title = 1234123;