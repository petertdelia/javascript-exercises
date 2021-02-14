// Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

// Examples:

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

// problem: write a function that takes two arguments, both integers. The first number is a count that refers to the numbers of elements that a returned array should contain. The second number is the starting number of a sequence that will be created in the array. The returned array should contain the second argument as its first element, then double that element for the remainder of the elements in the array.

// inputs: two integers
// output: an array
//  requirements: If the first argument is zero, return an empty array. Negative numbers should remain negative when doubled. => Add the starting value to the previous value for each element

// data structure/algorithm: Declare and assign an empty array, result. Use a for loop that terminates when the length of the array is equal to the first argument, and push the second argument to the array, then multiply it by two. Return result.

function sequence(length, value) {
  let result = [];
  let startingValue = value;
  for (let idx = 0; idx < length; idx += 1) {
    result.push(value);
    value += startingValue;
  }
  return result;
}

// algorithm using methods instead of loop: