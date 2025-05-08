const removeFromArray = function(ary, ...args) {
  for (let argIndex = 0; argIndex < args.length; argIndex++) {
    for (let aryArg = 0; aryArg < ary.length; aryArg++) {
      if (ary[aryArg] === args[argIndex]) {
        ary.splice(aryArg, 1);
        aryArg--; // Prevent loop from skipping an argument
      }
    }
  }

  return ary
};

// Do not edit below this line
module.exports = removeFromArray;
