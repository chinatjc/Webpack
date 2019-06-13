export function createElement(str) {
	const ele = document.createElement('div');
	ele.innerHTML = str;
	document.body.appendChild(ele);
}