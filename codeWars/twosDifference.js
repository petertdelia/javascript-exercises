// The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

// The result should be sorted in ascending order.

// The input will consist of unique values. The order of the integers in the input collection should not matter.
// Examples

console.log(twosDifference([1, 2, 3, 4]));     // -->  [[1, 3], [2, 4]]
console.log(twosDifference([4, 1, 2, 3]));     // -->  [[1, 3], [2, 4]]
console.log(twosDifference([1, 23, 3, 4, 7])); //  -->  [[1, 3]]
console.log(twosDifference([4, 3, 1, 5, 6] )); //  -->  [[1, 3], [3, 5], [4, 6]]

/*

input: array of integers
output: nested array
rules:
  - output array's values should consist of integers from the input array whose difference is two
  - sort the result in ascending order

algorithm:
  - initialize results, empty array
  - sort the input array
  - use a double for loop to compare each value to every other value
    - the outer for loop begins at idx = 0
    - the inner for loop begins at jdx = idx + 1
  - calculate the absolute value of the difference between the two
  - if the difference is > 2, continue
  - if the difference is 2, save each value to an array; push the array to results

*/

function twosDifference(arr) {
  let results = [];
  arr.sort((a, b) => a - b);

  for (let idx = 0; idx < arr.length; idx += 1) {
    for (let jdx = idx + 1; jdx < arr.length; jdx += 1) {
      let difference = Math.abs(arr[idx] - arr[jdx]);
      if (difference > 2) continue;
      if (difference === 2) {
        results.push([arr[idx], arr[jdx]]);
      }
    }
  }

  return results;
}