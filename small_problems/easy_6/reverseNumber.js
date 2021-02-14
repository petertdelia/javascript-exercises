Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

Examples:

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

// problem: write a function that takes a positive integer, reverses it, and returns that number. If there are leading zeros in the result, drop them.

// input: positive integer
// output: positive integer
//  requirements:
//    reverse the input integer
//    drop leading zeros in the result
//    assume valid input

// data structure/algorithm:
//    convert number to a String, then split it into an array. Reverse the array. Join it, convert it to Number and return it.

function reverseNumber(integer) {
  return Number(String(integer).split('').reverse().join(''));
}