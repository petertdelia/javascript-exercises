// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...

// All elements of the sum are the results of integer division.
// Example

// 25  =>  25 + 12 + 6 + 3 + 1 = 47

/*

input: a positive integer
output: an integer
rules:
  explicit requirements
    - the elements of the sum are the result of integer division
  implicit requirements
    - keep halving the input integer until we reach the number 1
    - add together the original input integer with all of its integer divided halves, ending when we go below 1.

algorithm:
  - initialize a sum variable to 0;
  - enter a while loop, whose stopping condition is if number < 1
  - in the loop, add the number to the sum, then halve it, using Math.floor.
  - return the sum
*/

function halvingSum(num) {
  let sum = 0;

  while (num > 0) {
    sum += num;
    num = Math.floor(num / 2);
  }

  return sum;
}