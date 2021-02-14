// Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

// Examples:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

// problem: write a function that takes an array and returns an array. The returned array should consist of an array with two elements, nested arrays. The first element should contain the first half of the elements from the input array. The second element should contain the second half of the elements from the input array. If the number of elements in the input array is odd, place the extra element in the first half.

// input: array
// output: array with two nested arrays as the two elements
//  requirements:
//   if there is an odd number of elements, place the extra element in the first half
//   if there is only one element, place it in the first half and return a second empty element as well
//   if the input array is empty, return two nested empty arrays.
//   assume valid input

// data structure/algorithm:
//  declare and initialize variable halfWayPoint to equal Math.ceil() of the length of the input array divided by 2.
//  declare and initialize variable firstHalf to equal a slice of the input array from 0 to halfWayPoint.
//  declare and initialize variable secondHalf to equal  a slice of the input array from halfWayPoint to the end(no argument needed).
//  use an array literal to return firstHalf, secondHalf inside the array.

function halvsies(array) {
  let halfWayPoint = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, halfWayPoint);
  let secondHalf = array.slice(halfWayPoint);
  return [firstHalf, secondHalf];
}