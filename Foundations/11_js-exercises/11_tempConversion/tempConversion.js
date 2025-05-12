const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * (5/9));
  let celsiusRounded = parseFloat(celsius.toFixed(1));
  return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5) + 32);
  let fahrenheitRounded = parseFloat(fahrenheit.toFixed(1));
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
