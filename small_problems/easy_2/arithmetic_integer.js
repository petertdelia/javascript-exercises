// Write a program that prompts the user for two positive integers,
// and then prints the results of the following operations on those
// two numbers: addition, subtraction, product, quotient, remainder,
// and power. Do not worry about validating the input.

// understand the problem:
//  -write a program that prompts the user for input.
//  -the user should input two integers
//  -the program should print the results of operations
//  -on those two integers. These operations are:
//    -addition
//    -subtraction
//    -product
//    -quotient
//    -remainder
//    -power

// Example:
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 141050039560662968926103

// data structures:
//  -numbers;
//  -math operations;

// algorithm:
//   -prompt user for input
//   -log each operation as output using string literal

const readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

prompt("please enter a number:");
let number1 = Number(readline.question());

prompt("please enter another number:");
let number2 = Number(readline.question());

prompt(`${number1} + ${number2} = ${number1 + number2}`);
prompt(`${number1} - ${number2} = ${number1 - number2}`);
prompt(`${number1} * ${number2} = ${number1 * number2}`);
prompt(`${number1} / ${number2} = ${number1 / number2}`);
prompt(`${number1} % ${number2} = ${number1 % number2}`);
prompt(`${number1} ** ${number2} = ${number1 ** number2}`);

// let operations = [ '+', '-', '*', '/', '%', '**' ];

// for (let idx = 0; idx < operations.length; idx++) {
//   let result = number1
//   prompt("")
// }
