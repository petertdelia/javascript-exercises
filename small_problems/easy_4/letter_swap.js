// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

// Examples:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

// restate problem:
//  write a function that takes a string of words separated by spaces. The function will swap the first and last letters of each word.
//  assumptions: every word contains at least one letter. The string contains at least one word. Each string contains nothing but words and spaces. There are no leading, trailing, or repeated spaces.

// input: string
//  output: string of words with swapped first and last letters

// data structures: string, string methods, array, iteration over array, back to string.

// algorithm: use split to create an array of words. Use map to swap letters for each word(using a swapLetters function that will take in a word and return a swapped word). Use join to create the final string. Return the string.
//  to swap letters in a given word: split the word into an array. Save array[0] and array[array.length - 1] as first and last letters. Set the array[0] as last letter, and the array[array.length - 1] as first letter. Join the array, return it.

function swap(string) {
  return string.split(' ').map(word => {
    word = word.split("");
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];

    word[0] = lastLetter;
    word[word.length - 1] = firstLetter;

    return word.join("");
  }).join(" ");
}