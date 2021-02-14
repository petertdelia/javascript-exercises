// Write a function that returns an Array that contains every other element
// of an Array that is passed in as an argument. The values in the returned
// list should be those values that are in the 1st, 3rd, 5th, and so on
// elements of the argument Array.

// Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// restate the problem
//  write a function that takes in an array as an argument
//  it returns an array that contains every other element of the
//  argument array, beginning with the zero index element.
//  If the input array is empty, it returns an empty array.

// edge cases: bad input? Assume it is an array. Empty array? return an empty array

// data structures:
//  input: array
//  output: array
//  utilities: iteration

// algorithm:
//  initialize an empty array, returnArray
//  if the length of the input array is zero, return the empty array
//  otherwise, iterate through the input array
//  test to see if the iterator % 2 === 0
//  if it evaluates true, push the element at that index to the returnArray.
//  return the array.

function oddities(array) {
  let returnArray = [];

  if (array.length === 0) {
    return array;
  }

  for (let idx = 0; idx < array.length; idx++) {
    if (idx % 2 === 0) {
      returnArray.push(array[idx]);
    }
  }
  return returnArray;
}

function evens(array) {
  let returnArray = [];

  if (array.length === 0) {
    return array;
  }

  for (let idx = 0; idx < array.length; idx++) {
    if (idx % 2 === 1) {
      returnArray.push(array[idx]);
    }
  }
  return returnArray;
}

function oddities2(array) {
  let returnArray = [];

  if (array.length === 0) {
    return array;
  }

  array.forEach((_, idx) => {
    if (idx % 2 === 0) {
    returnArray.push(array[idx]);
    }
  });
  return returnArray;
}

console.log(evens([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evens(["abc", "def"])); // logs ['abc']
console.log(evens([123])); // logs [123]
console.log(evens([])); // logs []

console.log(oddities2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities2(["abc", "def"])); // logs ['abc']
console.log(oddities2([123])); // logs [123]
console.log(oddities2([])); // logs []