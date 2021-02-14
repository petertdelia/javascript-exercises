// In the modern era under the Gregorian Calendar, leap years occur in every year
// that is evenly divisible by 4, unless the year is also divisible by 100. If
// the year is evenly divisible by 100, then it is not a leap year, unless the
// year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function
// that takes any year greater than 0 as input, and returns true if the year 
// is a leap year, or false if it is not a leap year.

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// inputs:
//   single integer greater than 0
//   edge cases:
//     non-integer input?
//     0 input?
//     no input?
//     integer string?
// outputs:
//   Boolean

// examples:
//   see above;
//   to add:
//     isLeapYear(0) => "not a valid input"
//     isLeapYear('1234') => false
//     isLeapYear('abc') => "not a valid input"
//     isLeapYear() => not built for this test case

// data structures:
//   integer, math functions, conditionals

// algorithm:
//   any input validation (num > 0)?
//   if false, return "not a valid input"
//   else
//   test for input % 400 === 0;
//   if true, return true;
//   else
//   test for input % 100 === 0;
//   if false, return false;
//   else, test for input % 4 === 0;

//   if true, return true;
//   else, return false;

// This function does not accept an empty argument
// It has been edited for part two (Julian/Gregorian calendar)

function isLeapYear(integer) {
  integer = parseInt(integer, 10);
  if (integer < 1 || isNaN(integer)) {
    return "not a valid input";
  } else if (integer >= 1752) {
    if (integer % 400 === 0) {
      return true;
    } else if (integer % 100 === 0) {
      return false;
    } else return integer % 4 === 0;
  } else {
    return integer % 4 === 0;
  }
}
console.log (
  isLeapYear(2016),      // true
  isLeapYear(2015),      // false
  isLeapYear(2100),      // false
  isLeapYear(2400),      // true
  isLeapYear(240000),    // true
  isLeapYear(240001),    // false
  isLeapYear(2000),      // true
  isLeapYear(1900),      // false
  isLeapYear(1752),      // true
  isLeapYear(1700),      // true
  isLeapYear(1),         // false
  isLeapYear(100),       // true
  isLeapYear(400),       // true
isLeapYear(0),
isLeapYear('1234'),
isLeapYear('abc')
);

function isLeapYearReverse(integer) {
  if (!(integer % 4 === 0)) {
    return false;
  } else if (!(integer % 100 === 0)) {
    return true;
  } else {
    return integer % 400 === 0;
  }
}

console.log (
  isLeapYearReverse(2016),      // true
  isLeapYearReverse(2015),      // false
  isLeapYearReverse(2100),      // false
  isLeapYearReverse(2400),      // true
  isLeapYearReverse(240000),    // true
  isLeapYearReverse(240001),    // false
  isLeapYearReverse(2000),      // true
  isLeapYearReverse(1900),      // false
  isLeapYearReverse(1752),      // true
  isLeapYearReverse(1700),      // false
  isLeapYearReverse(1),         // false
  isLeapYearReverse(100),       // false
  isLeapYearReverse(400),       // true
);