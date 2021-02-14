// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

// Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

// problem: write a function that takes a number as an argument, and returns that number as a negative. If it is negative, return it as it is.

// input: integer
// output: negative integer
//    requirements:
//    takes an integer
//    assume valid input
//    if input is already negative return it.
//    0 should return -0

// data structure/algorithm:
//    check if the number is < 0. If it is, return it.
//    else, multiply the number by -1 and return it.

function negative(integer) {
  return integer < 0 ? integer : -integer;
}