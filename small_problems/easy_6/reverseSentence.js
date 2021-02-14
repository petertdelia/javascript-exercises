// Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

// Examples:

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

// problem: write a function that takes a string argument consisting of space-separated words, and returns a new string containing those words in reverse order.

// input: string
// output: string
//  requirements: reverse the words in the input string
//  words are space separated
//  assume valid input.

// data structure/algorithm:
//    split the string into an array using the space as a separator. Reverse them, join them with a space, and return them.

function reverseSentence(words) {
  return words.split(" ").reverse().join(" ");
}

// Part 2

// Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

// Examples:

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

// problem: write a function that takes a string argument of space-separated words and returns a string of the same words, where the words that are five letters or longer have their letters reversed. Assume the input consists of only letters and spaces, and words are separated by a single space.

// data structure/algorithm: split the input string into an array of words; map the array, checking to see if each element is at least 5 characters long; if it is, split it into an array using an empty string, reverse the array, and join it together with an empty string, then return it. Join the mapped array using a space. Return the joined array.

function reverseWords(words) {
  return words.split(" ").map(word => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }
    return word;
  }).join(" ");
}