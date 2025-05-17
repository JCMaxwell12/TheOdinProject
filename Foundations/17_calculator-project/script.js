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

let num1 = 0;
let num2 = 0;
let operator = '';
