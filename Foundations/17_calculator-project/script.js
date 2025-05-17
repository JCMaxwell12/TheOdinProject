const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const div = (a, b) => a / b;

const operate = function (operator, a, b) {
	switch (operator) {
		case '+': return add(a,b);
		case '-': return sub(a,b);
		case '*': return mul(a,b);
		case '/': return div(a,b);
	}
}

const round = function(num, digits) {
	let numStr = String(num);
	let dotPosn = numStr.indexOf('.');
	
	if (numStr.length <= digits) return numStr;
	
	if (dotPosn > digits) return 'OL';

	if (dotPosn == digits) return round(num);
	
	let precision = digits - dotPosn - 1; 	// Get digits after the . to keep
	let newNum = Number(num.toFixed(precision));

	return newNum;
}

const display = function(num, digits) {
	let val = ''
	if (typeof(num) == 'number') val = round(num, digits);
	if (typeof(num) == 'string') val = num;
	
	screen.textContent = val;
}

const clear = function() {
	num1 = 0;
	num2 = 0;
	operator = '';
	display()
}


let num1 = 0;
let num2 = 0;
let operator = '';

const screen = document.querySelector('.screen');
