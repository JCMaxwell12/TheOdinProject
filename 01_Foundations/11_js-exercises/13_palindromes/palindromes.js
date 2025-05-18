const reverseStr = function (text) {
	return text.split("").reverse().join("");
}

const palindromes = function (text) {
	text = text.replace(/[^\w\']/g, "");
	text = text.toLowerCase();
	if (reverseStr(text) == text) return true;
	return false;
};

// Do not edit below this line
module.exports = palindromes;
