const sumAll = function(startInt, endInt) {
  let digits = [];

  if (typeof(startInt) != 'number' ||
    typeof(endInt) != 'number' ||
    !Number.isInteger(endInt) ||
    !Number.isInteger(startInt) ||
    startInt < 0 ||
    startInt < 0
  ){
    return 'ERROR'
  }

  if (startInt < endInt) {
    for (let  digit = startInt; digit <= endInt; digit++) {
      digits.push(digit);
    }
  }
  else {
    for (let  digit = startInt; digit >= endInt; digit--) {
      digits.push(digit);
    }
  }
  let sum = 0;
  for (let index = 0; index < digits.length; index++) {
    sum = sum + digits[index];
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
