// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// Examples:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

// problem: write a function that takes a string as its input. It doubles every character in the string and returns a new string as its result.

// input: string
// output: string
//  requirements:
//  double every character
//  empty input string returns empty string

// data structure/algorithm:
//  initialize an empty string, result
//  iterate over the string; in each iteration, append each character twice to the result string. Return.

function repeater(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    result += (string[idx] + string[idx]);
  }

  return result;
}