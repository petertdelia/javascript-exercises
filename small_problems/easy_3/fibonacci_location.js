// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

// Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// Examples:

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
console.log(findFibonacciIndexByLength(234));      // 74

// restate problem:
//  write a function that takes in an integer as its only argument, which specifies the number of digits of a fibonacci number. The function should calculate the first fibonacci number in the sequence of numbers that contains this many digits. The sequence begins at index 1. Assume the argument is always an integer greater than or equal to 2.

// data structures: iteration, math methods,

// algorithm:
//  initialize an index variable to 2;
//  initialize two number variables, oldNumber and newNumber, both to 1, outside the loop.
//  create a while loop that [calculates the fibonnaci sequence]=> do this later. TODO: what is the terminating condition? We might not need one, since the function will end once a number has been returned from within the loop.
//  start the loop.
//  check the length of newNumber (in the case above the 1 on the right side) against the passed in integer. If they are equal, return the index variable. TODO: do we need to cast newNumber to string? Why not? Let's do that.
//  initilize and evaluate a sum variable, which adds oldNumber and newNumber.
//  update variables: oldNumber = newNumber, newNumber = sum.
//  increment the index variable.

function findFibonacciIndexByLength(numberOfDigits) {
  let index = 2;
  let oldNumber = 1;
  let newNumber = 1;

  while (String(newNumber).length <= String(Number.MAX_SAFE_INTEGER).length) {
    if (String(newNumber).length === numberOfDigits) {
      return index;
    }
    let sum = oldNumber + newNumber;
    oldNumber = newNumber;
    newNumber = sum;
    index += 1;
  }
  return index;
}