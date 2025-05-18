const fibonacci = function(num) {
	if (num < 0) return "OOPS";

	let ary = [0, 1, 1];
	if (num <= 2) return ary[num];

	num = num - 2;
	while (num > 0) {
		ary.push(ary[1] + ary[2]);
		ary.shift(1);
		num--;
	}
	return ary[2];
};

// Do not edit below this line
module.exports = fibonacci;
