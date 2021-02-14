// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// problem: write a function that takes two arguments, both arrays. Each array contains a list of numbers.
// The function returns a new array which contains the products of all combinations of number pairs that exist between the two array.
// The returned array should be sorted in ascending numerical order.

// input: two arrays, assume array input, non-empty
// output: a new array
//    requirements:
//    the output array contains the products of all possible number pairs from the input arrays
//    the output array must be sorted in ascending numerical order.

// data structure/algorithm:
//    parameters of function: inputArr1, inputArr2
//    initialize an empty array, result.
//    call method forEach on inputArr1. In callback, name callback argument num1. Call method forEach on inputArr2. In callback, name argument num2. Multiply num1 and num2, push product to result.
//    call sort method on result. In callback, name arguments a, b, and return a - b. Return result of method call.

function multiplyAllPairs(inputArr1, inputArr2) {
  let result = [];

  inputArr1.forEach(num1 => {
    inputArr2.forEach(num2 => result.push(num1 * num2));
  });

  return result.sort((a, b) => a - b);
}