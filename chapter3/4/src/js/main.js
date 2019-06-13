import '../css/index';

new Promise((resolve, reject) => {
	setTimeout(resolve, 200);
})
.then(() => {
	console.log('new Promise, setTimeout');
});