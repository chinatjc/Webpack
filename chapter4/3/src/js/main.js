import '../css/main.css';

import { show } from './show.js';

show('Webpack');

console.log('this is main.js!');

if (module.hot) {
	module.hot.accept();
}