// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

/*

input: array of strings
output: array of strings
rules:
  - sort the array by string length, from least to greatest
  - all strings will be of different lengths
  - return a new array; do not mutate the input array

algorithm:
  - make a copy of the input array
  - sort the array by length
  - return the sorted array

*/

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

function sortByLength(arr) {
  return arr.slice().sort((a, b) => a.length - b.length);
}