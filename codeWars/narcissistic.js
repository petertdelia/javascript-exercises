// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

/*

input: number
output: boolean
rules:
  explicit:
    - return the boolean that represents whether the input integer equals the sum of each of the digits raised to the power of the number of digits in the input integer.
    - use base 10

algorithm:
  - calculate the value of each digit of the input integer raised to the number equal to the number of digits in the input integer
    - calculate the number of digits in the input integer
      - call String().length on input integer
      - assign result to variable power
    - create an array of number digits
      - convert input integer to string
      - split string
      - map resulting array, converting each digit to a number 
      - assign to variable numArr
  - call reduce on numArr
    - in the callback, pass accum, value, return accum + (value ** power)
    - save result to variable sum
  - return the truthy result of comparing this sum to the input integer

*/

console.log(narcissistic(7));
console.log(narcissistic(371));

function narcissistic(num) {
  let power = String(num).length;

  let numArr = String(num).split('').map(char => Number(char));
  let sum = numArr.reduce((accum, value) => accum + (value ** power), 0);

  return sum === num;
}