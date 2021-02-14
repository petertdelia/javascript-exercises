// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

    // 90 <= score <= 100: 'A'
    // 80 <= score < 90: 'B'
    // 70 <= score < 80: 'C'
    // 60 <= score < 70: 'D'
    // 0 <= score < 60: 'F'

// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// Examples:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

// restate problem:
//  write a function that takes in three integers, determines their average, and returns the letter associated with that number. Use the provided conversion table. Assume valid input.

// inputs: Three integers
//  outputs: a string, single character

//  examples: see above, assum valid input.

// data structures: integers, math functions, return string, switch cases

// algorithm:
//  calculate the average of the three numbers (1 + 2 + 3) / 3 saved to a variable, mean.
//  use a switch statement to return the appropriate letter grade

function getGrade(num1, num2, num3) {
  let mean = (num1 + num2 + num3) / 3;

  if (mean >= 90) {
    return 'A';
  } else if (mean >= 80) {
    return 'B';
  } else if (mean >= 70) {
    return 'C';
  } else if (mean >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}