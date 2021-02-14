//  Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
// Example

// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.
// Input/Output

//     [input] integer n

//     Constraints: 10 ≤ n ≤ 1000000.

//     [output] an integer

/*

input: integer
output: integer
rules:
  explicit:
    - find the greatest integer that can be obtained by deleting one digit from the input integer
    - the integer is at least >= 10

algorithm:
  - declare a results variable assigned to an empty array 
  - calculate all possible integers
    - convert the integer to a string
    - split the string into an array
    - iterate over the array
    - in each iteration, create a copy of the array, splice one digit out, join it, convert to number, and push to  results
  - sort the array largest to smallest, return the largest value.\

*/

function deleteDigit(num) {
  let results = [];
  let numArr = num.toString().split('');

  for (let idx = 0; idx < numArr.length; idx += 1) {
    let numArrCopy = [...numArr];
    numArrCopy.splice(idx, 1);
    results.push(Number(numArrCopy.join('')));
  }

  return results.sort((a, b) => b - a)[0];
}

console.log(deleteDigit(152));
console.log(deleteDigit(1001));
