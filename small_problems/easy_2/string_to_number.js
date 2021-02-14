// The parseInt() method converts a string of numeric characters (including
// an optional plus or minus sign) to an integer. The method takes 2
// arguments where the first argument is the string we want to convert
// and the second argument should always be 10 for our purposes. parseInt()
// and the Number() method behave similarly. In this exercise, you will
// create a function that does the same thing.

// Write a function that takes a String of digits, and returns the appropriate
// number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about
// invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript
// such as String() and Number(). Your function should do this the old-fashioned
// way and calculate the result by analyzing the characters in the string.

// Examples

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// understand the problem:
//  write a function that accepts a string of digits
//  return the appropriate number as an integer
//  do not use the Number(), parseInt() or String() methods
//  assume the input will be only digits

// hint: calculate the result by analyzing the characters in the string

// inputs:
//   String of numeric characters
// Outputs:
//   integer

// data structures:
//  String
//  integer
//  conversion table: object with strings for keys, Numbers for values
//  calculations to figure out trailing zeros

// algorithm:
//  create a conversion table of numbers and strings
//  initialize a result variable to 0;
//  Iterate over the string, and:
//  use the conversion table to convert each character to its appropriate number.
//  multiply that integer by itself times a number determined by
//  the length of the string subtracted by the index of the character.
//  If there is a 0 character, skip it.
//  add the new number to the result variable.
//  return the number.

//  break problem down:
//  exs: 1234: 1 => 1000, 2 => 200, 3 => 30, 4 => 4
//  given the position(index) of the character, multiply by itself * (10 ** (length - (index + 1))).


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

// further exploration:
// Write a hexadecimalToInteger() function that converts a string
//  representing a hexadecimal number to its integer value. Note that
//  hexadecimal numbers use base 16 instead of 10, and the "digits"
//  A, B, C, D, E, and F (and the lowercase equivalents) correspond
//  to decimal values of 10-15.

// Example:

console.log(hexadecimalToInteger('4D9f') === 19871);

// algorithm:
//  make sure the string is in lower case
//  use conversion table to create an array of digits out of the string
//  initialize a value variable to 0;
//  use the forEach method to iterate over the array, multiplying the 
//  value by 10 and adding the next digit.

function hexadecimalToInteger(string) {
  const DIGITS = {1:1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
    a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };

  string = string.toLowerCase();

  let arrayOfDigits = Array.from(string, digit => DIGITS[digit]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (value * 16) + digit));
  return value;
}