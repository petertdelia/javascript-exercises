// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// Example:

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/*

problem: write a function that:
input: string of space-separated words
output: string of space-separated words, where:
requirements:
  -number words are converted to digit characters
  -assume valid input

data structure/algorithm:
  -create array whose values are number words, from 'zero' to 'nine'.
  -call forEach over the array, create a regular expression for each number word that starts and ends with a word character, and call match on the input string. If there's a match, run replace, replacing the regular expression with the index of the array, and assign the result to the input string.

  more formally:
  DEFINE FUNCTION wordToDigit(words)
  DEFINE numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  numArray.forEach((num, idx) => {
    let regex = new RegExp(num, 'g');
    if (words.match(regex)) {
      words = words.replace(regex, String(idx));
    }
  })

*/

function wordToDigit(words) {
  const NUM_ARR = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  NUM_ARR.forEach((num, idx) => {
    let regex = new RegExp(num, 'g');
    if (words.match(regex)) {
      words = words.replace(regex, String(idx));
    }
  });

  return words;
}