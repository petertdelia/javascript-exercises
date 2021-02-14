// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

/*

input: string of words
output: string of digits separated by spaces
rules:
  - only convert letters, ignore other characters
  - replace every letter with its position in the alphabet
  - the numerical equivalent begins at 1, not 0
  - convert capital letters to lowercase

algorithm:
  - create an array of alphabetical characters; idx + 1 equals its position in the alphabet
  - initialize results variable, assigned to empty array
  - convert input string to its lower case equivalent
    - split it, then map it with each character to lower case. Assign to variable strArr
  - iterate through the input string
  - check to see if each character exists in the alphabetical array.
    - if it does, push its (index + 1), converted to a string, to results
    - or else ignore it
  - after iteration, join results with a space

*/

function alphabetPosition(string) {
  let alphaArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let results = [];
  let strArr = string.split('').map(char => char.toLowerCase());

  for (let idx = 0; idx < strArr.length; idx += 1) {
    if (alphaArr.indexOf(strArr[idx]) !== -1) {
      results.push(alphaArr.indexOf(strArr[idx]) + 1);
    }
  }

  return results.join(' ');
}

/*

write a method that checks if an element is in an array. If it is, it returns the index of that element. If not, if returns -1. If there are multiple elements with the input value, return the first one that matches.

input: array, value
output: number: the first occurrence of the index of the input value in the input array
rules: 
  - If the value doesn't exit, return -1.
  - If there are multiple elements with the input value, return the first index that matches.

algorithm
  - loop through the array
  - check if the input value equals the value at each index
  - if there is a match, return the index
  - if not, return -1

*/

function findIndex(array, value) {
  array.forEach((elem, idx) => {
    if (elem === value) return idx;
  });
  return -1;
}