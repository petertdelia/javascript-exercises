//  The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.
// Input/Output

//     [input] integer year

//     1000 ≤ year ≤ 9000

//     [output] an integer

//     the minimum year number that is strictly larger than the input number year and all its digits are distinct.

console.log(distinctDigitYear(1987));

/*

input: number
output: number
rules:
  - the output number must be greater than the input number
  - the output number must not repeat any digits
  - the output number is the smallest number greater than the input number that does not have any repeat digits

algorithm:
  - iterate through numbers greater than the input number
  - check to see if each one has only distinct digits
    - create an array of the digits; sort the array by number
    - iterate through the array
    - if any element is the same as the one before, continue
  - else, return the number

*/

function distinctDigitYear(year) {
  for (let number = year + 1; number < 9100; number += 1) {
    let splitNum = String(number).split('').sort();
    let unique = true;
    for (let idx = 0; idx < splitNum.length; idx += 1) {
      if (splitNum[idx] === splitNum[idx - 1]) unique = false;
    }
    if (unique) return number;
  }
}