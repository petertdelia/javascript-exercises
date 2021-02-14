// Write a function that accepts two arguments: an array/list of integers and another integer (n).

// Determine the number of times where two integers in the array have a difference of n.

// For example:

// [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
// [1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)

/*

input: array of integers, integer
output: integer
rules:
  explicit:
    - the output represents the number of times the difference between a pair of integers from the input array equals the second integer argument
    - the difference is the absolute value of the difference


algorithm:
  - declare count variable, assign to 0;
  - calculate the difference between each pair of numbers in the array
    - run a nested loop over the array; 
    - in the outer loop, begin with idx 0;
    - in the inner loop, begin with idx (outerloop idx + 1)
    - in the body of the inner loop, 
      - calculate the absolute value of the difference between the value at the outerloop idx to the value at the innerloop idx. Save this value to variable difference
      -compare the difference to the second function argument. If they match, increment variable count by 1. 
  - return count

*/

function intDiff(arr, num) {
  let count = 0;

  for (let outerIdx = 0; outerIdx < arr.length; outerIdx += 1) {
    for (let innerIdx = outerIdx + 1; innerIdx < arr.length; innerIdx += 1) {
      let difference = Math.abs(arr[outerIdx] - arr[innerIdx]);
      if (difference === num) count += 1;
    }
  }

  return count;
}

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4));
console.log(intDiff([1, 1, 3, 3], 2));