document.querySelector('h1').innerHTML = new Date();

if (navigator.serviceWorker) {
	window.addEventListener('DOMContentLoaded', function() {
		console.log('register sw.js');
		navigator.serviceWorker.register('./sw.js')
			.then(function(reg) {
				console.log('success', reg);
			})
			.catch(function(err) {
				console.log('fail', err);
			});
	});
}
