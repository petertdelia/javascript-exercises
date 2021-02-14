// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

// Examples:

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// problem: write a function that:
  // takes an array of integers, 
  // multiplies them together, 
  // divides the result by the number of entries in the array, 
  // and returns the result as a string rounded to three decimals

// input: array of integers
// output: numeric string
//    explicit requirements:
//    output string must be rounded to three decimals
//    implicit requirements:
//    assume valid input: an array of integers
//    if there are fewer than three numbers after the decimal point, add zeros to pad

// data structure/algorithm:
  //  use reduce to multiply the integers together and save to a sum variable => let sum = array.reduce((sum, value) => sum * value)
  //  divide sum by the number of elements in the array, using the length property and save to a variable => average = sum / array.length
  //  Use toFixed() method to make sure there are three numbers after the decimal point, to round, and to convert to string, and return

function multiplicativeAverage(array) {
  let sum = array.reduce((sum, value) => sum * value);
  let average = sum / array.length;
  return average.toFixed(3);
}