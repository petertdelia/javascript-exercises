// Write a program that will ask for user's name. The program will then greet
// the user. If the user writes "name!" then the computer yells back to the user.

// Examples

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// Understand the problem:
//  -write a program that asks for a user's name;
//  -The program should greet the user.
//  -If the user ends his/her name with '!',
//    -The program will write back in all caps

// inputs:
//   user input--String
//   edge cases:
//   What about empty input? Should it be allowed?
// outputs:
//   A string greeting.
// Important term:
//  -yell: meaning to write back in all caps.

// data structures:
//    input: string
//    output: string
//    string methods

// algorithm
//  -collect user input
//  -check to see if it ends with a '!' character
//  -if it does, change the input to yell
//    -and print a yelling statement
//  -otherwise, print a non-yelling statement

const readline = require('readline-sync');

console.log('What is your name?');
let name = readline.question();

while (name === '') {
  console.log('Please type something in');
  name = readline.question();
}

if (name.endsWith('!')) {
  name = name.toUpperCase().slice(0, -1);
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

