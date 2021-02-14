// In the previous exercise, you developed a function that converts
// non-negative numbers to strings. In this exercise, you're going
// to extend that function by adding the ability to represent negative
// numbers as well.

// Write a function that takes an integer, and converts it to a string
// representation.

// You may not use any of the standard conversion functions available
// in JavaScript, such as String() and Number.prototype.toString().
// You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// restate the problem:
//  write a function that takes an integer and converts it to its 
//  string representation
//  it may be negative, positive or zero.
//  if it is negative, append a '-' to the beginning of the string
//  if it is positive, append a '+' to the beginning of the string
//  if it is zero, return '0'
//  do not use any standard conversion functions in JavaScript
//  you may use integerToString() from the previous exercise

// input: signed integer
// output: string representation with sign

// Examples

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

// data structures:
//  function from previous exercise
//  integer
//  math functions
//  string

// algorithm
//  use the function from the previous exercise
//  check to see if the passed integer is negative, positive, or zero
//  using Math.sign()
//  modify the integer so it is a positive number
//  if it is zero, return zero.
//  if it is negative, return its string with a '-' sign appended
//  if it is positive, return its string with a '+' sign appended


function integerToString(integer) {
  const DIGITS = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];

  let outputString = '';
  while (integer) {
    let digit = integer % 10;
    integer = Math.floor(integer / 10);
    let stringDigit = DIGITS[digit];
    outputString = stringDigit + outputString;
  }
  return outputString;
}


function signedIntegerToString(integer) {
  switch (Math.sign(integer)) {
    case -1:
      return `-${integerToString(-integer)}`;
    case 1:
      return `+${integerToString(integer)}`;
    default:
      return '0';
  }
}