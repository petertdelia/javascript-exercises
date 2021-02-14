// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input validation
// and assume that the user will enter numbers.

// examples:
// tipCalulator() bill: 200, tip percentage: 15; => tip: 30, total: 230;

// inputs:
//   bill: number
//   percentage: number
// outputs:
//   tip: number
//   total: number

// data structures:
//   numbers, mathematical calculations

// algorithm:
//   get two numbers;
//   multiply the bill by the tip percentage to get the tip
//   add the tip to the bill
//   print the tip, print the total

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('What is the bill?');
let bill = Number(readline.prompt());

prompt('What is the tip percentage?');
let tipPercentage = Number(readline.prompt());

let tip = bill * (tipPercentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);