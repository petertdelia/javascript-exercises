// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

// problem: write a function that takes a non-empty string. It returns the middle character of the string if the length of the string is odd, or the middle two characters of the string if the length of the string is even.

// input: non-empty string
// output: one or two characters (depending on the length of the input string)
// requirements:
//    -if the length of the input string is odd, return a single middle character
//    -if its length is even, return the two middle characters

// data structure/algorithm:
//    declare and assign a const CENTER_OF_EVEN = string[(string.length / 2) - 1] + string[string.length / 2] and const CENTER_OF_ODD = string[string.length / 2].
//    if string.length % 2 === 0, return CENTER_OF_EVEN. Else, return CENTER_OF_ODD

function centerOf(string) {
  const ODD_CENTER_INDEX = Math.floor(string.length / 2);
  const EVEN_CENTER_INDEX = ODD_CENTER_INDEX - 1;

  const CENTER_OF_ODD = string[ODD_CENTER_INDEX];
  const CENTER_OF_EVEN = string[EVEN_CENTER_INDEX] + CENTER_OF_ODD;

  return string.length % 2 === 1 ? CENTER_OF_ODD : CENTER_OF_EVEN;
}