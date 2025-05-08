const reverseString = function(word) {
  let reversedString = '';
  for (let charIndex = word.length; charIndex >= 0; charIndex--) {
    reversedString = reversedString + word.charAt(charIndex);
  }

  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
