// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

// For example:

isAscOrder(Array(1,2,4,7,19)) == true
isAscOrder(Array(1,2,3,4,5)) == true
isAscOrder(Array(1,6,10,18,2,4,20)) == false
isAscOrder(Array(9,8,7,6,5,4,3,2,1)) == false // numbers are in DESCENDING order

/*

input: array of numbers
output: boolean
rules:
  explicit
    - function returns true if the input array is in ascending sorted order
    - don't mutate the input array in the function

algorithm:
  - make a copy of the array
  - sort the copy
  - run a for loop over the array
  - compare each element of the original to each element of the copy
  - if they aren't equal, return false
  - at the end of the for loop, return true.
*/

function isAscOrder(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);

  for (let idx = 0; idx < arr.length; idx += 1) {
   if (arr[idx] !== sortedArr[idx]) {
     return false;
   }
  }

  return true;
}