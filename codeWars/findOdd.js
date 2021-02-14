// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])) // 5

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])) // -1

/*

input:
  - array of integers
output:
  - integer
rules:
  - the input array contains only one integer that appears an odd number of times
  - all other integers in the input array appear an even number of times
  - There will always be one and only one integer that appears an odd number of times

algorithm:
  - count the number of occurrences of each integer in the input array
    - initialize a variable occurrences assigned to an empty object
    - iterate through the input array
    - either increment the value at that element's key in the object
    - or initilize it at 1
    - after iteration, iterate over the keys of the object
    - find the value that doesn't divide evenly into 2 and return the key
  - return the one that has an odd number of occurrences

*/

function findOdd(arr) {
  let occurrences = {};

  arr.forEach(int => {
    occurrences[int] = occurrences[int] + 1 || 1;
  });

  return Number(Object.keys(occurrences).filter(key => occurrences[key] % 2 === 1)[0]);
}