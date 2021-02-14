// Write a function that takes a string argument and returns a
// new string that contains the value of the original string
// with all consecutive duplicate characters collapsed into
// a single character.

// restate the problem:
//  write a function that takes a string argument
//  it returns a new string that collapses all duplicate
//  consecutive characters to one character. Otherwise,
//  it retains the value of the original string.

// inputs:
//  string of any length.
//  bad input?
// output:
//  string

// Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

// data structures:
//  string, possibly array for iterating over string
//  output string

// algorithm:
//  create an array of characters from the input string
//  initialize an empty results string
//  iterate over the array
//  if the last character of the results string is not the same
//  as the iterating character, add it to the results string
//  return the results string

function crunch(string) {
  let charArray = Array.from(string);
  let results = "";

  for (let idx = 0; idx < string.length; idx++) {
    if (results[results.length - 1] !== charArray[idx]) {
      results += charArray[idx];
    }
  }
  return results;
}