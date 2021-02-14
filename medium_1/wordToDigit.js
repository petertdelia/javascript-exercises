// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// Example:

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/*
input: string, 'sentence string'
output: string, 'sentence string'
rules:
  - assume valid input
  - return the input string where all number words are replaced by digit characters.
  - the input string is a series of space separated words.
  - don't assume that the number words will be separate from other chars.
  - number words may be part of a larger word. Replace them even if they are part of a larger word.
  - ignore case?

data structure:
  - strings -- replacing chars
  - regex - array of regexes
  - iteration over array of regexes

algorithm:
  - iterate over array of regexes -- one for each number word, and replace all instances of that word in the input string with the array index of the number word.
    - count from 0 to numbers.length
    - initialize regex var as the value at the count index
    - in each loop, reassign sentence to equal the return value of the string replace method, with regex as the first argument and String(count) as the second argument.
    - after iterating, return sentence.
*/



function wordToDigit(sentence) {
  let numbers = [/zero/gi, /one/gi, /two/gi, /three/gi, /four/gi, /five/gi, /six/gi, /seven/gi, /eight/gi, /nine/gi];
  
  numbers.forEach((regex, idx) => {
    sentence = sentence.replace(regex, String(idx));
  });

  return sentence;
}