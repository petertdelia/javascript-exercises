// Using the multiply() function from the "Multiplying Two Numbers" problem,
// write a function that computes the square of its argument (the square
// is the result of multiplying a number by itself).

// console.log(square(5) === 25); // logs true
// console.log(square(-8) == 64); // logs true

function multiply(number1, number2) {
  return number1 * number2;
}

// understand the problem:
//  -write a function that computes the square of its argument
//  -the square is the result of multiplying a number by itself
//  -use the multiply function above to write the new function

// inputs:
//  -a single number.
//  -assuming it is valid input.
// output:
//  -a single number, the square of the input.
//  -key term, a square: multiplying a number by itself.

// data structures:
//  input: one number
//  output: one number
//  math operations.

// algorithm:
//  -pass the input argument as both arguments to the multiply function
//  -return the result.

const square = (num) => multiply(num, num);


console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true

// What if we wanted generalize this function to a "power to the n" type
// function: cubed, to the 4th power, to the 5th, etc. How would we go
// about doing so while still using the multiply() function?

// understand the problem:
//   use the multiply function to output a number to the power of n;

// inputs: two numbers: number to multiply, power
// output: number

// data structures:
//  -numbers as input
//  -math functions

// algorithm:
//  -for a number, num, and an exponent, exp
//  -create a result variable;
//  -use a for loop that loops from 2 to exp
//  -for each iteration, use multiply function to muliply num by 1
//  -and store the result in the result variable
//  -return the result variable

function power(number, exp) {
  let result = 1;

  if (exp === 0) {
    return result;
  }

  for (let iter = 1; iter <= exp; iter++) {
    result *= multiply(number, 1);
  }
  return result;
}

console.log(power(5,0)); // output => 1
console.log(power(5,1)); // output => 5
console.log(power(5,2)); // output => 25
console.log(power(5,3)); // output => 125