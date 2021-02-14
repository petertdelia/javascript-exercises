// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

// Example:

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); // => [2, 4]

/*

input: an array of integers, an integer
output: an array of the indexes of the integers that match the second argument
rules:
  explicit:
    - if n, the second argument, is not found in the input array, return [].
    - assume that n and all values in the array are integers

algorithm:
  - declare result variable, assign to []
  - iterate through the input array, searching for the value given as the second argument
  - if there is a match, add the index of the match in the array to variable result
  - return result

*/

function findAll(arr, int) {
  let result = [];

  arr.forEach((elem, idx) => {
    if (elem === int) {
      result.push(idx);
    }
  });

  return result;
}