// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// examples:
//    logOdds() => 1
//                 3
//                 5
//                 7
//                 ...
//                 99

// inputs:
//   none;
// output:
  // log all odd integers, 1 to 99, inclusive
  // each number on a separate line

// Data structures:
//   number, iterable

// algorithm:
//   iterator = 1;
//   for (iterator; iterator < 100; iterator += 2)
//      console.log(iterator);

// alt algorithm:
//   iterator = 1;
//   while (iterator < 100)
//     console.log(iterator);
//     iterator += 2;


const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getLimitNumber() {
  let number1 = readline.question(prompt("Enter a number:"));
  while (invalidNumber(number1)) {
    prompt("hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }
  return Number(number1);
}

function logOdds(limit = 100) {
  let iterator = 1;
  for (iterator; iterator < limit; iterator += 2) {
    console.log(iterator);
  }
}

logOdds();

logOdds(getLimitNumber());
