// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

// Examples:

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

// problem: write a function that takes a positive integer and returns the sum of its digits. Use list processing techniques.
// input: positive integer
// output: number,the sum of the digits of the input
//  requirements:
//    use list processing techniques. What is meant by this? Must use an array? OK.

// data structure/algorithm: convert input to string, then split it into characters. Use reduce and return the result: in each iteration, convert the character to a number and add it to the total. Initialize the first value as the number conversion of the first element of the array.

function sum(integer) {
  return String(integer)
  .split("")
  .reduce((accum, value) => accum + Number(value), 0);
}