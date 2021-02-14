

// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// restate problem:
//  write a program that prompts a user for their age and how old they would like to be to retire, and prints a statement that says: the current year; when they will retire; how many more years they have left

// example: see above

// input: numbers
//  output: string

// data structures: input, numbers, math operations, string

// algorithm: prompt user for two numbers. calculate the difference between the numbers, and add that number to the current year. Print the final string.

const rlsync = require('readline-sync');

let age = Number(rlsync.question('What is your age? '));
let retirementAge = Number(
  rlsync.question('At what age would you like to retire? ')
  );

let difference = retirementAge - age;

let today = new Date();
let year = today.getFullYear();

console.log(`It's ${year}. You will retire in ${year + difference}`);
console.log(`You have only ${difference} years of work to go!`);