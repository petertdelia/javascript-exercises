// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

// Examples:

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// problem: write a function that takes an array of strings, and returns an array with the same values but with their vowels removed.

// input: array of strings
// output: new array of strings, with vowels removed from each string.

// data structure/algorithm: call map on the array; in the callback, pass string; return string.replace(/[aeiou]/gi, ''). Return the mapped array.

function removeVowels(array) {
  return array.map(string => string.replace(/[aeiou]/gi, ''));
}