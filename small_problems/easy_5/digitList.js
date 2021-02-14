// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

// Examples:

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

// problem: write a function that takes a positive integer as its argument. It returns an array that consists of the digits in the integer.

// input: integer
// output: array of digits
//    implicit requirements:
//    assume the input is a positive integer
//    the returned array should consist of numbers, not strings.

// data structure/algorithm:
//  convert the integer to a string. Use split('') to create an array of digits in the string. Use map to convert each string digit back to a number and return.

function digitList(integer) {
  let string = String(integer);
  return string.split('').map(element => Number(element));
}

