// import '../css/main.css';

import { show } from './show.js';

const eleDiv = document.createElement('div');

eleDiv.id = 'app';

document.body.appendChild(eleDiv);

show('Webpack');

console.log(12345);

if (module.hot) {
	module.hot.accept();
}