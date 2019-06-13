import '../css/main.css';

import { show } from './show.js';

show('Webpack23423');

console.log(23111);

if (module.hot) {
	module.hot.accept();
}