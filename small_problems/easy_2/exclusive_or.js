// In this exercise, you will write a function named xor that takes two arguments,
//  and returns true if exactly one of its arguments is truthy, false otherwise.

// Examples:

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

// restate problem:
//  write a function that takes two arguments
//  it returns true if one, but not both, of those arguments is truthy
//  otherwise, it returns false.
//  inputs: two values
//  output: boolean

// edge cases? Fewer or more than two arguments?
//  Every value evaluates to true or false.

// Data structures:
//  inputs: values of any type
//  output: boolean
//  operators: comparisons

// Algorithm:
//  Run a nested comparison, which tests the two possible true conditions:
//  1: If the first one is true and the second one is false, return true,
//  OR 2: If the second one is true and the first one is false, return true.
//  Otherwise, return false.

function xor(arg1, arg2) {
  if ((arg1 && !arg2 ) || (!arg1 && arg2)) {
    return true;
  }
  return false;
}