// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

// Example:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// problem: write a function that takes an array. It prints to the console a list of the number of occurrences of each element from the array.
// input: an array
// output: a printed list
//  requirements:
//  the list must be case sensitive.
//  assume valid input.

// data structure/algorithm:
//  initialize an empty object, result.
//  iterate over the array. For each iteration, check to see if there is an object entry for that element. If there is, add one to that key's value. If not, initialize a key at 0.
//  Iterate over object.entries, using a template literal to print each key and value with => in between.

function countOccurrences(array) {
  let result = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    let element = array[idx].toLowerCase();
    result[element] ? result[element] += 1 : result[element] = 1;
  }

  for (let [key, value] of Object.entries(result)) {
    console.log(`${key} => ${value}`);
  }
}