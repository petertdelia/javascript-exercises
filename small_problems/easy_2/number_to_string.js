// In the previous two exercises, you developed functions that convert
// simple numeric strings to signed integers. In this exercise and the
// next, you're going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0,
// 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an
// expression such as '' + number. Your function should do this the
// old-fashioned way and construct the string by analyzing and manipulating
// the number.

// restate the problem:
//  write a function that converts a non-negative integer
//  to the string representation of that integer.
//  assume valid input
//  do not use standard conversion functions in JavaScript

//  input: non-negative integer, which we call inputNumber
//  output: string representation of that integer, outputString

// data structures:
//  integer; math operations
//  string
//  lookup table: object

// algorithm:

//  if the input is zero, return zero.
//  otherwise,
//  In a while loop whose condition is that the inputNumber is greater than zero:
//  isolate each digit of the number, beginning with the rightmost.
//  let digit = inputNumber % 10
//  update inputNumber to remove its rightmost digit:
//  inputNumber = Math.floor(inputNumber / 10);
//  convert digit to its string representation using a lookup table
//  stringDigit = lookupTable[digit];
//  concatenate it to the beginning of outputString => outputString = stringDigit + outputString
//  stop the loop when the input integer is zero.
//  return outputString

// Examples:

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

function integerToString(integer) {
  const DIGITS = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];
  if (!integer) {
    return '0';
  }
  let outputString = '';
  while (integer) {
    let digit = integer % 10;
    integer = Math.floor(integer / 10);
    let stringDigit = DIGITS[digit];
    outputString = stringDigit + outputString;
  }
  return outputString;
}