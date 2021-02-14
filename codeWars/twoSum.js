// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)

/*

input: array of integers, target number
output: array of two numbers, indexes of valid numbers
rules:
  - two numbers from the input array add up to the target number
  - return the indices of these two numbers
  - assume valid input
  - must use two different items from the array

algorithm:
  - use a double for loop
  - the outer loop will begin at idx 0
  - the inner loop will begin at idx outerIdx + 1
  - they both terminate at < array.length
  - if they do, return their indices in an array

*/

function twoSum(arr, target) {
  for (let outerIdx = 0; outerIdx < arr.length; outerIdx += 1) {
    for (let innerIdx = outerIdx + 1; innerIdx < arr.length; innerIdx += 1) {
      if (arr[outerIdx] + arr[innerIdx] === target) return [outerIdx, innerIdx];
    }
  }
  
  return undefined;
}