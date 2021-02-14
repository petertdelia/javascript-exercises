// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

/*

input: array
output: number
rules:
  - return the number with the greatest number of digits in the input array
  - if more than one number share the greatest number of digits, return the one the appears first in the array

algorithm:
  - map the array, return lengths of numbers
    - save to variable mappedArr
  - pass the spread array to Math.max, find the max value
    - save to variable maxVal
  - find the indexOf the value
    - save to variable maxIndex
    - return the value at this index, of the original input array

*/

// function findLongest(array) {
//   let mappedArr = array.map(elem => elem.toString().length);
//   let maxVal = Math.max(...mappedArr);
//   let maxIndex = mappedArr.indexOf(maxVal);
//   return array[maxIndex];
// }

const findLongest = arr => {
  return arr.reduce((accum, val) => `${val}`.length > `${accum}`.length ? val : accum);
}


console.log(findLongest([1, 10, 100])) //, 100
console.log(findLongest([9000, 8, 800])) //, 9000
console.log(findLongest([8, 900, 500])) //, 900
