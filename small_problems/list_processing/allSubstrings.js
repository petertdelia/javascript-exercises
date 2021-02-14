// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the substringsAtStart function you wrote in the previous exercise:

// Example:

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

// problem: write a function that takes a string as its only parameter. It returns a list of all substrings. The returned list should be ordered by where in the string the substring begins. The returned list should be further ordered at a given position by length, from shortest to longest.

// input: string
// output: array
//    requirements:
//    return all substrings
//    use the function from the previous exercise
//    Order the returned string first by the position where the substring starts, in relation to the input string. Then by length, with shortest substrings coming first.

// data structure/algorithm:
//    declare a result variable, assigned to an empty array
//    enter a for loop, terminating at the end of the input string
//    in each iteration, pass a slice of the input string to the function from the last exercise. The slice should begin at the iteration variable and end at the end of the string. Push the result to result.
// after iteration, flat() result and return.


function substringsAtStart(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    result.push(string.substring(0, idx + 1));
  }

  return result;
}

function substrings(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    result.push(substringsAtStart(string.substring(idx)));
  }

  return result.flat();
}