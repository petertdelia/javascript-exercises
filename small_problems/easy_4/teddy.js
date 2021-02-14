// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:

// Teddy is 69 years old!

// restate problem:
//  write a program that outputs a string to the console. The program randomly generates a number between 20 and 120 inclusive and logs it as Teddy's age.

// example: see above

// data structures: string, math functions

// algorithm: generate number; write it to the console.
//  to generate number: multiply Math.random by the difference between max and min; add min to the result. Floor the whole thing. It is exclusive of the max, so increment max by 1

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let number = randomInteger(20, 101);

console.log(`Teddy is ${number} years old`);