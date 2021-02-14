// Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

// Examples:

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

// problem: write a function that takes an array of integers and returns the average of the numbers in the array. Round the average down to the closest integer. Assume positive numbers and a non-empty array

// input: array of positive integers
// output: return the average as an integer
//    requirements;
//    round the average down to the closest integer
//    assume positive integers
//    assume a non-empty input array

//  data structures/algorithm
//    use the reduce method to add all of the elements, divide the result by the length of the array, truncate and return it

function average(array) {
  return Math.trunc(array.reduce((sum, number) => sum + number) / array.length);
}

// using forEach
//    algorithm: initialize a sum variable at 0; in each iteration of forEach, add the element to the sum. Divide the sum by the length of the array, truncate and return.

function average(array) {
  let sum = 0;

  array.forEach(number => sum += number);
  return Math.trunc(sum / array.length);
}