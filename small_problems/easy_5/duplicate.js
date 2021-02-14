
// Find the Duplicate

// Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

// Examples:

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

// problem: write a function that takes an array of numbers, in which one value is duplicated. It returns the number that is duplicated.

// input: array of numbers
// output: the duplicate number
//    requirements:
//      assume that the input array contains one duplicate number
//      the function finds and returns the duplicate number

// data structures/algorithm:
//   sort the array in place. Declare a duplicate variable, a previousVal variable, and a currentVal variable. iterate through the sorted array using forEach. On each iteration, assign currentVal to the current value, then compare it to the previousVal. If they are equal, assign duplicate to currentVal. Then assign previousVal to the current value. Return the duplicate.

function findDup(array) {
  array.sort((a, b) => a - b);

  let previousVal;
  let currentVal;

  array.forEach(value => {
    currentVal = value;
    if (currentVal === previousVal) {
      return currentVal;
    }
    previousVal = value;
  });
}

// data structure/algorithm:
//    declare a duplicate variable. create a new set out of the input array, then use an array literal to convert it to an array. Use a for loop that compares values at the same index for each array. When they are not equal, assign the duplicate variable to the value at the index of the input array. Return the duplicate.

function findDupUsingSet(array) {
  arraySet = [...new Set(array)];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (arraySet[idx] !== array[idx]) {
      return array[idx];
    }
  }
}

let findDupRegex = function(array) {
  let stringArray = String(array);
  let pattern = /((^|,)(\d+?),.*,\3(,|$))|((^|,)(\d+?),\7(,|$))/g;
  let matchString = stringArray.match(pattern)[0];

  if (matchString.startsWith(',')) {
    matchString = matchString.slice(1, matchString.length - 1);
  }

  return Number(matchString.split(',')[0]);
};
