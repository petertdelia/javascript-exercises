// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

// Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

// restate problem
//  write a function that takes in an integer and returns a boolean: true if the input integer is a palindrome. A palindrome is the same forwards and backwards

// examples: see above

// input: integer, edge cases? Assume int
// output: boolean

// data structures: integer, string, string methods

// algorithm: coerce integer to string, split it, reverse it, join it, and compare it to the original string. Return the results of that comparison.

function isPalindromicNumber(integer) {
  integer = parseInt(integer, 10);
  let number = String(integer);
  let backwardsNumber = number.split('').reverse().join('')
  return number === backwardsNumber;
}