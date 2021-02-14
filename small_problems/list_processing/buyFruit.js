// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

// Example:

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// problem: write a function. It takes a two dimensional array as its only argument. Each element of the input array contains a fruit and a quantity, in the form of a string and an integer. It returns a one-dimensional array of fruits (strings), in which the number of times that each fruit appears is equal to its quantity (the integer in each subarray pair).

// input: array (with length-of-2 subarrays, each containing a string and an integer)
// output: array (single-dimension, all strings)

// requirements:
//    the output array should contain strings, where the first element of each subarray from the input array should be repeated the number of times of the integer in the second element of each subarray.
//    assume valid input

// data structure/algorithm: declare a variable, result, and assign it to an empty array. Call forEach on the input array. In the callback function, pass the subArr. Enter a for loop that terminates after the number of iterations represented by the second element of each subarray (let times = 0; times < subArr[1]). In the loop, push subArr[0] to result. Return result.

function buyFruit(groceryList) {
  let result = [];

  groceryList.forEach(subArr => {
    for (let times = 0; times < subArr[1]; times += 1) {
      result.push(subArr[0]);
    }
  });

  return result;
}

let list = [['apple', 3], ['orange', 1], ['banana', 2]];

// TODO: write function
function buyFruit(groceryList) {
  let fruit = groceryList.map(subArr => {
    let fruitArr = [];
      for (let times = 0; times < subArr[1]; times += 1) {
        fruitArr.push(subArr[0]);
      }
      return fruitArr;
  });

  return fruit.flat();
}
