// Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

// Example:

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// restate problem: write a function that takes two arrays and returns one array that contains the elements of each. Values that are shared between arrays should not be duplicated. 

// see above for example

// input: 2 arrays
// output: 1 array that concatenates the two arrays and removes duplicates

// data structures: arrays, array methods, iteration

// algorithm: initilize an empty array, result, and concatenate the first array onto it. Iterate over the second array. In each loop, check to see if the result array contains the element at that index. If it does not, push that element. Return the array.

function union() {
  let result = [];
  for (let idx = 0; idx < arguments.length; idx += 1) {
    console.log(arguments[idx]);
    addNonDups(result, arguments[idx]);
  }
  return result;
}

function addNonDups(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function args() {
  console.log(arguments);
  let args = [...arguments];
  console.log(args);
}