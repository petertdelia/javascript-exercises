// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

 console.log(persistence(39)) // === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 console.log(persistence(999)) // === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 console.log(persistence(4)) // === 0 // because 4 is already a one-digit number

 /*

 input: positive integer
 output: positive integer
 rules:
  - the output number represents the multiplicative persistence of the input number
  - multiplicative persistence is the number of times that the digits in a given number must be multiplied together until the result is a one-digit number
  - once the digits in the given number are multiplied together, multiply the digits in the resulting number, see if it results in a single-digit number, and continue until we reach a single digit number
  - if the input is already a single digit number, return 0

algorithm:
  - initialize a numberOfSteps variable to 0;
  - while the length of the string converted number > 1:
    - multiply the digits of the input number together
      - convert the number to a string
      - split the string
      - reduce it so we multiply each number together
    - save the result in a variable
    - increment numberOfSteps

*/

function persistence(num) {
  let numberOfSteps = 0;

  while (String(num).length > 1) {
    num = String(num).split('').reduce((accum, value) => accum * Number(value), 1);
    numberOfSteps += 1;
  }

  return numberOfSteps;
}
