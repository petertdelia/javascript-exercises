// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product
// of all targetNums between 1 and the entered integer, inclusive.

// examples:
  // Please enter an integer greater than 0: 5
  // Enter "s" to compute the sum, or "p" to compute the product. s

  // The sum of the integers between 1 and 5 is 15.

  // Please enter an integer greater than 0: 6
  // Enter "s" to compute the sum, or "p" to compute the product. p

  // The product of the integers between 1 and 6 is 720.

// inputs: 
//  integer (targetNu)
//  string ('p' or 's')
// outputs: a string message that
//  tells the user sum or product, includes the integers 1 to targetNum
//  and the sum or product.
//  The output should be a sum ('s') or product ('p') that should
//  count all integers from 1 to the input integer, inclusive

// Data Structures:
//  integer
//  string
//  switch/if statement
//  iterable

// Algorithm:
//  get inputs from user;
//  num = userInput;
//  sOrP = userInput;
  // for loop from 1 to num:
    //   if s:
      //  s += iterable;
    // else:
      //  p *= iterable;

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number.includes(',') || Number(number) <= 0;
}

function invalidEntry(entry) {
  return !['p','s'].includes(entry);
}

function computeSum(targetNum) {
  let total = 0;
  for (let iterable = 1; iterable <= targetNum; iterable++) {
    total += iterable;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;
  for (let iterable = 1; iterable <= targetNum; iterable++) {
    total *= iterable;
  }

  return total;
}

prompt('Welcome to Sum or Product!');
prompt('Please enter an integer greater than 0:');
let targetNum = readline.question();

while (invalidNumber(targetNum)) {
  prompt('Please enter an integer greater than zero, without using a comma');
  targetNum = readline.question();
}

targetNum = parseInt(targetNum, 10);

prompt('Please enter "s" to compute the sum or "p" to compute the product:');
let sumOrProduct = readline.question();

while (invalidEntry(sumOrProduct)) {
  prompt('Please enter "s" to compute the sum or "p" to compute the product:');
  sumOrProduct = readline.question();
}

let total;
let userValue;
if (sumOrProduct === "s") {
  userValue = "sum";
  total = computeSum(targetNum);
} else {
  userValue = "product";
  total = computeProduct(targetNum);
}

console.log(`The ${userValue} of the integers between 1 and ${targetNum} is ${total}.`);
