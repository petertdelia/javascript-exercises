// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

/*

input: array
output: integer
rules:
  - output integer represents the sum of the subsequence of the input array that yields the greatest sum of any of the subsequences of the input array.
  - if the minimum value in the input array is a positive number (> -1), just sum the whole array
  - else if the max value is < 0, return zero
  - if the input is an empty array, return 0

algorithm:
  - check if the input array is empty; if it is, return zero
  - if the max value of the input array is < 0, return 0
  - if the min value of the input array is > -1, return the sum of all of the elements
  - otherwise, create an array with all of the subsequences of the input array
    - initialize an empty array, called subsequences
    - use a double for loop
    - begin at outer index 0 and inner index equal to outer index + 1;
    - continue to the end for inner index
    - increment the outer index by one
    - continue this until the outer index reaches the end
      - in each iteration, create a new array with the appropriate slice of the input array
      - push this array to subsequences
  - sum each subarray
    - use map on the outer array
    - use reduce on each subarray
  - return the greatest value from the mapped subsequences array

*/

function maxSequence(arr) {
  if (arr.length === 0 || Math.max(...arr) < 0) return 0;

  let subsequences = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    for (let jdx = idx + 1; jdx < arr.length; jdx += 1) {
      subsequences.push(arr.slice(idx, jdx));
      }
    }


    let sums = subsequences.map(subsequence => {
      return subsequence.reduce((accum, elem) => accum + elem);
    });
    let greatest = sums[sums.length - 1];
    sums.forEach(sum => {
      if (sum > greatest) greatest = sum;
    });

    return greatest;
}