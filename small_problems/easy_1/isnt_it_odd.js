// Write a function that takes one integer argument, which may be positive,
// negative, or zero. This method returns true if the
// number's absolute value is odd. You may assume that the argument is a
// valid integer value.

// examples:
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// inputs:
//  -one integer
//  -may be positive, negative, or zero
//  -questions: what if we are given a string or non-integer number, or other bad input?
//    -You may assume that the argument is a
//     valid integer value.
//  -what if we are given more than one input?
//  -What is the even/odd status of zero?
//    -console.log(isOdd(0)); // => false
// output:
//  -boolean (true or false)

// model the problem:
//  given an integer, for example, 2:
//  convert that number to its absolute value;
//  use an if statement with num % 2 === 0 to determine if the integer is even
//  or odd
//  return true if the number is odd

// Data structures:
//  input: Number
//  Math functions
//  output: boolean

// Algorithm:
// Absolutevalue(number);
// if (number % 2 === 1)
//   return true;
// else
//   return false;

function isOdd(number) {
  number = Math.abs(number);
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
}