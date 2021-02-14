// Write a function that takes a string as an argument, and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

// You may assume that every pair of words in the string will be separated by a single space.

// Examples:

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

/* problem: write a function that:
input: string
output: array
    requirements:
    -the array contains every word plus that word's length, separated by a space, as each element.
    -if the input argument is an empty string, or if it is empty, return an empty array.
    -every pair of words in the input string will be separated by a space

    data structure/algorithm:
    -if the input string is empty, or if the input is undefined, return an empty array
    -split(' ') the input string into an array of words. 
    -Map the result. In the callback, pass word and return a template literal that contains word, a space, and String(word.length). 
    -Return the result.
*/

function wordLengths(string) {
  if (typeof string === 'undefined' || string.length === 0) return [];

  return string.split(' ').map(word => `${word} ${String(word.length)}`);
}

const wordLengths = (...args) => {
  console.log(args);
}