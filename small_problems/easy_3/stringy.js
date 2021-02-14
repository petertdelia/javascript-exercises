// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// Examples:

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

// restate problem:
//  write a function that takes a positive integer as its only argument. It returns a string that contains alternating '0's and '1's, starting with '1'. The length of the string is equal to the number that is passed in.

// input: positive integer
// output: returns a string of 0s and 1s

// data structures: array? Iteration? Integer, string.

// algorithm: initialize an empty string, called returnString. Loop through a for loop that terminates when the iterator is greater than the input integer.
//  inside the for loop, we will have an if clause. If the iterator is odd, concatenate a 1 on to the end of the initilaized string variable. Otherwise, concatenate a 0 to the end of the string variable. Return the string once the loop is complete.

function stringy(integer) {
  let returnString = "";

  for (let idx = 0; idx < integer; idx++) {
    let number = idx % 2 === 0 ? '1' : '0';
    returnString += number;
  }
  return returnString;
}