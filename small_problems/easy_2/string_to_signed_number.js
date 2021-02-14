// In the previous exercise, you developed a function that converts simple
// numeric strings to integers. In this exercise, you're going to extend
// that function to work with signed numbers.

// Write a function that takes a string of digits, and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the
// first character is a +, your function should return a positive number;
// if it is a -, your function should return a negative number. If no sign
// is given, you should return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in
// JavaScript, such as parseInt() and Number(). You may, however, use
// the stringToInteger() function from the previous lesson.

// restate problem:
//  write a function that takes a string of digits
//  it returns the appropriate number as an integer
//  The string may or may not have a leading + or - sign
//  If the first character is +, it should return positive
//  If the first character is -, it should return negative
//  otherwise, return a positive number
//  assume valid input
//  don't use any standard conversion methods in JavaScript
//  But you may use the conversion function from the previous lesson

//  input:
//   string, possibly beginning with +, -, or a digit
//  output:
//   integer, either negative or positive

// algorithm:
//  initialize a result variable
//  perform a check on the input string
//  if the string starts with a '-' character:
//  remove that character using slice,
//  return the result of negative one times
//  the value of the sliced string input to the stringToInteger function
//
//  if the string starts with '+', also use slice to remove it and then
//  pass it to the stringToInteger function, return the result.
//  else, just pass it to the function and return the result.

//  data structures:
//   string, function for conversion, output number


// Examples

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

// function from previous exercise, returns an integer

function stringToInteger(string) {
  const CONVERSION_TABLE = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  };
  let result = 0;

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] !== '0') {
    let digit = string[idx];
    let number = CONVERSION_TABLE[digit];
    number *= 10 ** (string.length - (idx + 1));
    result += number;
    }
  }
  return result;
}

function stringToSignedInteger(string) {
  if (string.startsWith('-')) {
    return -1 * stringToInteger(string.slice(1));
  } else if (string.startsWith('+')) {
    return stringToInteger(string.slice(1));
  }
  return stringToInteger(string);
}