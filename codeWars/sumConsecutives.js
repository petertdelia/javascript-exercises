// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

console.log(sumConsecutives([1,1,7,7,3])) // # should return [2,14,3]
console.log(sumConsecutives([-5,-5,7,7,12,0])) // # should return [-10,14,12,0]

/*

input: an array of integers
output: an array of integers
rules:
  explicit
    - sum numbers that are BOTH consecutive in the input array AND equal to each other, place in output array
    - Numbers that are standalone should also be placed in the output array
  implicit:
    - sums in the output array should be in the same order that they were in the input array

algorithm:
  - declare results array (empty array)
  - declare sum variable assign to 0
  - iterate over numArr
  - assign current value to variable
  - if current value is at index 0 then add to sum and continue
  - compare current value to previous value
  - if they are equal, add current value to sum and continue
  - if not, push sum to results, then add current value to sum.


*/

function sumConsecutives(numArr) {
  let results = [];
  let sum = numArr[0];

  for (let idx = 1; idx < numArr.length; idx += 1) {

    let currentVal = numArr[idx];
    let previousVal = numArr[idx - 1];

    if (currentVal === previousVal) {
      sum += currentVal;
    } else {
      results.push(sum);
      sum = currentVal;
    }
  }
  results.push(sum);

  return results;
}

// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

console.log(sumConsecutives([1,1,7,7,3])) // # should return [2,14,3]
console.log(sumConsecutives([-5,-5,7,7,12,0])) // # should return [-10,14,12,0]

/*

input: array of numbers
output: array of numbers
rules:
  - sum numbers that are consecutive and equal to each other
  - return the result in an array

algorithm:
  - initilaize results array to []
  - initilaize sum variable to 0
  - loop through input array, starting with the second element
    - if we're at the first element, add it to the sum and continue
    - if the element is not the same as the last element, push sum to results and reassign sum to the current element
    - else, add the element to the sum
  - return results

*/

function sumConsecutives(arr) {
  let results = [];
  let sum = 0;

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (idx === 0) {
      sum += arr[idx];
      continue;
    }
    if (arr[idx] !== arr[idx - 1]) {
      results.push(sum);
      sum = arr[idx];
    } else {
      sum += arr[idx];
    }
  }
  results.push(sum);

  return results;
}
 