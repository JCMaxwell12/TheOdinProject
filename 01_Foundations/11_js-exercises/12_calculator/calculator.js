const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

const sum = (ary) => ary.reduce((acc, cV) => acc + cV, 0);

const multiply = (ary) => ary.reduce((acc, cV) => acc * cV, 1);

const power = (a, b) => a**b;

const factorial = function(num) {
	let acc = 1;
	while (num>0) {
		acc = acc * num;
		num--;
	}
	return acc
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
