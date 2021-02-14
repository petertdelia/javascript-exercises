// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

// Examples:

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// problem: write a function. It takes a string argument. It returns an array of all substrings that start from the beginning of the string. The elements in the returned array should be ordered from shortest to longest.

// input: string
// output: array
//    requirements:
//    The returned array should contain, as its elements, all of the substrings, from the input string, that begin with the first character of the input string.
//    Order the returned array by length

// data structure/algorithm:
//    define function parameter as 'string'
//    declare a variable, result, and assign it to an empty array.
//    enter a for loop, terminating when idx = string.length. In each iteration, call substring method on string. Pass 2 arguments, first one will be 0, second one will be idx + 1. Push the result of the method call to result array.
// return result.

function substringsAtStart(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    result.push(string.substring(0, idx + 1));
  }

  return result;
}

