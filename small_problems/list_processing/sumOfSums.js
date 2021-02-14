// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

// Examples:

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

// problem: write a function that takes an array of integers.
//  it returns a single number
//  That number is the sum of each leading subsequence of the input array.

// input: array
// output: integer

// data structure/algorithm: declare a sum variable and assign it to 0. Enter a for loop which terminates after it reaches the last element of the input array. In each iteration, call reduce on a section of the array, from element 0 to index + 1. Sum the elements in this section and add them to the sum variable. Return the sum variable after the loop is complete.

function sumOfSums(array) {
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    sum += array.slice(0,idx + 1).reduce((accumulator, value) => {
      return accumulator + value;
    });
  }

  return sum;
}