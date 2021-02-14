// Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

// Examples:

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

// problem: write a function that takes a string as its argument. It returns a string with all of the words capitalized--the first character of every word is uppercase and the remaining characters in lowercase. A word is a series of non-whitespace words.

// data structure/algorithm: split the input string into words. Map the resulting array. For each element, add an uppercased first character to a slice of the remainder of the string and return the concatenated string. join the mapped array with a space, and return it.

function wordCap(string) {
  return string
  .split(' ')
  .map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  })
  .join(' ');
}