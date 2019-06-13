import { show } from './js/show';
import { broadcast } from './js/broadcast';

// babel-runtime 无法编译实例上的ES6方法
console.log([1, 2, 3].find(n => n === 3));

show();
broadcast();