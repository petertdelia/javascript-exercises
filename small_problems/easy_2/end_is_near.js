// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

// Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// restate problem:
//  write a function that takes a string as an argument
//  return the next to last word from the string argument
//  definition: words are sequences of non-blank characters
//  assumption: the input string will contain at least two words

// examples: see above

// input:
//  string that contains at least two words
// output:
//  return the next to last word

// data structures:
//  input: string
//  dealing with list of words: convert to array
//  output: string

// algorithm:
//  split string to array
//  use length to find second to last element of array
//  return element

function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

// Further exploration:
//  Suppose we need a function that retrieves the middle word of a phrase/sentence.
// What edge cases need to be considered? How would you handle those edge cases
// without ignoring them? Write a function that returns the middle word of a phrase
// or sentence. It should handle all of the edge cases you thought of.

// edge cases: bad input, fewer or more than three words.

// examples:

console.log(middleWord(123) === 'not valid input', // => not valid input
middleWord("hello you") === 'must input three words', // => must input three words
middleWord('hello to you') === 'to' // => to
);

function middleWord(string) {
  if (typeof string !== 'string') {
    return "not valid input";
  }
  let words = string.split(' ');
  if (words.length !== 3) {
    return "must input three words";
  }
  return words[1];
}