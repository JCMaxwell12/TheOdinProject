const repeatString = function(word, num) {
  let repeatedString = '';
  if (num < 0) {
    return 'ERROR';
  }

  for (let iterationNum = 0; iterationNum < num; iterationNum++) {
    for (let charIndex = 0; charIndex < word.length; charIndex++) {
      repeatedString = repeatedString + word.charAt(charIndex);
    }
  }
  return repeatedString;
}

// Do not edit below this line
module.exports = repeatString;
