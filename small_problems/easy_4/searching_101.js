// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

// restate problem: write a program that prompts its user for six numbers. It then prints a statement that tells the user whether the sixth number was among the first five numbers.

// input: six numbers
// output: string

// data structures: array for storing the first five numbers; the includes method

// algorithm: push the first five numbers into an array. Save the sixth number in a separate variable. Use the includes method to execute on an if/else statement, printing the appropriate string.

const rlsync = require('readline-sync');

let numArray = [];
numArray.push(rlsync.question('Enter the 1st number: '));
numArray.push(rlsync.question('Enter the 2nd number: '));
numArray.push(rlsync.question('Enter the 3rd number: '));
numArray.push(rlsync.question('Enter the 4th number: '));
numArray.push(rlsync.question('Enter the 5th number: '));

let searchNumber = rlsync.question('Enter the last number: ');

if (numArray.includes(searchNumber)) {
  console.log(`The number ${searchNumber} does appear in ${numArray}`);
} else {
  console.log(`The number ${searchNumber} does not appear in ${numArray}`);
}

// To check if a condition is true for at least one element in the array
numArray.some(num => num > 5);

function isIncluded(arr, val) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] > val) {
      return true;
    }
  }

  return false;
}
