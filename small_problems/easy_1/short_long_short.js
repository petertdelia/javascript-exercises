// Write a function that takes two strings as arguments, determines the longer
// of the two strings, and then returns the result of concatenating the shorter
// string, the longer string, and the shorter string once again. You may assume
// that the strings are of different lengths.

// inputs:
//  two strings, of different lengths;
// outputs:
//  one string, of the short string + the long string + the short string

// Examples:
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// Edge cases:
//  empty string?

// Data structures:
//  input: strings
//  output: string

// algorithm:
//  use ternary to determine the short string
//  assign it to a variable along with the long string
//  use a template literal to concat the three strings into one

function shortLongShort(str1, str2) {
  let short;
  let long;

  if (str1.length < str2.length) {
    short = str1;
    long = str2;
  } else {
    short = str2;
    long = str1;
  }

  console.log(`${short}${long}${short}`);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');