// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) //            -->  12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])) //        -->  12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])) //-->   3

/*

input: array of integers
output: an integer
rules:
  - returns the number that is most frequent in the given array
  - if there are multiple solutions, return the largest

algorithm:
  - create an object that contains the number of times each value appears in the input array
    - initalize an empty object called frequencies
    - iterate through the array
    - check to see if the array value exists as a key in frequencies
    - if it does, increment by 1
    - if it does not, inititlize the key at the value 1
  
  - check to see what value occurs the most times
    - convert the object to an array of keys and values, assign to variable entries
    - sort the array by size of value, greatest to least
  - add this/these values to an array 
    - filter the array by value: if the value is less than the first value in the array, it is filtered out
  - sort the array by size of number
  - return the largest number

*/

function highestRank(arr) {
  let frequencies = {};

  arr.forEach(value => {
    frequencies[value] === undefined ? frequencies[value] = 1 : frequencies[value] += 1;
  });
  
  let entries = Object.entries(frequencies)
    .sort((a, b) => b[1] - a[1])
    .filter((elem, _, arr) => {
      let greatestElem = arr[0][1];
      return elem[1] === greatestElem;
    })
    .sort((a, b) => b[0] - a[0]);
  return Number(entries[0][0]);
}