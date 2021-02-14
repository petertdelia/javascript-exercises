// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console in both square
//  meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time.
//  Use the readlineSync.prompt method to collect user input.

// examples:
//   howBigIsTheRoom(7,10) => 70.00 square meters (753.47 square feet).

// inputs:
//   two numbers
// outputs:
//   two numbers to two decimals => m^2, ft^2

// data structures:
//   inputs: numbers
//   outputs: numbers
//   conversion rule: number, multiplication

// algorithm:
//   obtain two numbers from user;
//   multiply numbers to obtain m^2;
//   multiply the total by the conversion factor for the ft^2;
//   return both results

const readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;
const SQFEET_TO_SQMETERS = .092903;

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Would you like to use meters or feet? (enter m or f)');
let answer = readline.prompt();

if (answer[0] === 'm') {
  prompt('Enter the length of the room in meters:');
  let length = Number(readline.prompt());

  prompt('Enter the width of the room in meters:');
  let width = Number(readline.prompt());

  let areaInMeters = (length * width).toFixed(2);
  let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET).toFixed(2);

  prompt(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);
} else {

  prompt('Enter the length of the room in feet:');
  let length = Number(readline.prompt());

  prompt('Enter the width of the room in feet:');
  let width = Number(readline.prompt());

  let areaInFeet = (length * width).toFixed(2);
  let areaInMeters = (areaInFeet * SQFEET_TO_SQMETERS).toFixed(2);

  prompt(`The area of the room is ${areaInFeet} square feet (${areaInMeters} square meters).`);
}

