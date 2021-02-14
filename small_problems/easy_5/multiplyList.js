// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

// Example:

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// problem:
//  write a function that takes two arrays of numbers, each of the same length. It returns a new array of the same length, with each element consisting of the product of the two numbers at the corresponding index of the input arrays.

// input: two arrays of numbers
// output: one new array of numbers
//  explicit requirements:
//    the output array must contain the multiple of the two numbers from each index of the input arrays
//    the input arrays are of the same length

//  data structure/algorithm:
//    initialize an empty array, result
//    loop through the input arrays. In each iteration, push the result of multiplying the two numbers from the input arrays to the result array.
//    return result

//  alternate algorithm:
//    return a map of the first input array. In the call back function, include element and index. Multiply the element by the element in the second input array at that index.

function multiplyList(array1, array2) {
  let result = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    result.push(array1[idx] * array2[idx]);
  }
  return result;
}

function multiplyList(array1, array2) {
  return array1.map((element, index) => element * array2[index]);
}