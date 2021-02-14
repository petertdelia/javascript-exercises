
// Double Doubles

// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

// Examples:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

// input: integer
// output: integer

// restate problem: write a function that takes an integer as an argument. If the integer is a double number, return that number. Else, return the provided number multiplied by two.
//  special terminology: double number: an even-length number whose left-side digits are the same as its right-side digits.

// data structures: integer, coerce to string to test if the number is even and if the left side is the same as the right. Back to integer to return.

// algorithm:
//  coerce the input number to a string. Test it against % 2 === 0 to see if it is an even number. If not, multiply by 2 and return. If it is, split the right and left sides into two strings, and test them for equality. If they are equal, coerce them to number and return. If not, multiply by 2 and return.

function twice(num) {
  let numString = String(num);
  let length = numString.length;
  return length % 2 === 0 && numString.substring(0, length / 2) === numString.substring(length / 2, length) ? num : num * 2;
}