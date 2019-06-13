import './index.css';

new Promise((resolve, reject) => {
	reject('this is error');
})
.catch((msg) => {
	console.log(msg);
});
console.log('login');