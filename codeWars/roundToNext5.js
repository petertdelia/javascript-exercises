// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

/*

input: number
output: number
rules: 
  - input number can be any integer, positive, negative, or 0
  - output number should round the input number up to the next highest multiple of 5
  - 0 rounds to 0
  - 0 counts as a multiple of 5

algorithm:
  - iterate through numbers in ascending order, beginning with the input number and terminating after input number + 5
  - stop when division by five yields a remainder of 0.
  - return the iterating number
    - test modulo 5 with edge cases => 0, negatives

*/


console.log(roundToNext5(0)); // 0
console.log(roundToNext5(-7)); // -5
console.log(roundToNext5(3)); // 5

function roundToNext5(int) {

  for (let count = int; count < int + 5; count += 1) {
    if (count % 5 === 0) return count;
  }

  return undefined;
}