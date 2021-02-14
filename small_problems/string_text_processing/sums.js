// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

// Examples:

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

// algorithm: assign let sum to 0
// -use a for loop to loop over the array
// -in each iteration, make a slice of the array from 0 to idx + 1
// -call reduce on the slice; in the callback, pass accum and currentVal; add accum + currentVal
// -add the result to sum
// -return sum

function sumOfSums(array) {
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    sum += array.slice(0, idx + 1).reduce((accum, currentVal) => accum + currentVal);
  }

  return sum;
}