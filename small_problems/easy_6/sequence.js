// Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.

// Examples:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

// maybe come up with two ways to do it.
// problem: write a function that takes an integer and returns an array that contains all integer from 1 up to the input integer, inclusive.

// input: integer
// output: array of integers
//    requirements:
//    count up to and including the input integer
//    must count in ascending order

// data structure/algorithm:
//    declare a variable result and assign it to be an array of length equal to the input integer. Fill the array with 0s so that the elements are initialized. return a called map function on result, and within the callback function, return index + 1.

function sequence(number) {
  let result = Array(number);
  result.fill(0);
  return result.map((_, index) => index + 1);
}

// second algorithm, using forEach
//    use the index in the forEach callback function to assign each element at each index of result to index + 1.

function sequence(number) {
  let result = Array(number);
  result.fill(0);
  result.forEach((_,index) => result[index] = index + 1);
  return result;
}